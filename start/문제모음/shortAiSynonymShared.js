/**
 * 주관식 AI 정답/오답 → Firebase 후보
 * 학생: 후보 기록 + 승인된 동의어·오답 병합
 * 관리자: 후보 확인 후 승인/거절
 *
 * 용량 안전장치: 문항당 승인·대기 후보 상한 (초과 시 신규 후보 정리 / 신규 승인 거부)
 */

export const SHORT_AI_SYN_ROOT = 'ranking_totals/__group_feedback__/__short_ai_synonym__';
/** 이 횟수 이상이면 관리자 목록에서 우선 표시 */
export const SHORT_AI_SYN_PRIORITY_COUNT = 3;
/** 문항당 승인 동의어 최대 */
export const SHORT_AI_SYN_MAX_APPROVED = 40;
/** 문항당 승인 오답 최대 */
export const SHORT_AI_SYN_MAX_APPROVED_WRONG = 40;
/** 문항당 대기 후보(정답/오답 각각) 최대 — 초과 시 횟수 적은 pending 정리 */
export const SHORT_AI_SYN_MAX_PENDING = 60;
/** 학생 답·문항 저장 길이 상한 */
export const SHORT_AI_SYN_MAX_TEXT = 80;
export const SHORT_AI_SYN_MAX_QUESTION = 400;

export function normalizeQuestionStem(question) {
    return String(question || '')
        .replace(/\r\n/g, '\n')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, SHORT_AI_SYN_MAX_QUESTION);
}

/** 문항 식별용 짧은 해시 (회차·번호와 무관) */
export function shortQuestionHash(question) {
    const s = normalizeQuestionStem(question).toLowerCase();
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
        h = ((h << 5) + h) + s.charCodeAt(i);
    }
    return `q${(h >>> 0).toString(36)}`;
}

/** 후보 키 — 띄어쓰기·기호 무시 비교용 */
export function shortSynonymCandidateKey(text) {
    return String(text ?? '')
        .trim()
        .replace(/\s+/g, '')
        .toLowerCase()
        .replace(/[()（）[\]{}·・.,，。:：;；'"“”‘’\-_/\\～~]/g, '')
        .replace(/[％%]/g, '%')
        .replace(/[ΩΩ]/g, 'ω')
        .slice(0, 80) || 'empty';
}

export function encodeFbKey(str) {
    return String(str || '').replace(/[.#$/[\]]/g, '_');
}

export function isAlreadyOfficialAnswer(officialList, studentAnswer, normalizeFn) {
    const key = normalizeFn
        ? normalizeFn(studentAnswer)
        : shortSynonymCandidateKey(studentAnswer);
    if (!key) return true;
    const list = Array.isArray(officialList) ? officialList : [];
    return list.some((a) => {
        const ak = normalizeFn ? normalizeFn(a) : shortSynonymCandidateKey(a);
        return ak && ak === key;
    });
}

export function countPendingCandidates(candsObj) {
    const cands = candsObj && typeof candsObj === 'object' ? candsObj : {};
    let n = 0;
    Object.keys(cands).forEach((k) => {
        const st = String(cands[k]?.status || 'pending');
        if (st === 'pending') n += 1;
    });
    return n;
}

/**
 * pending 이 maxPending 초과면 count 낮은 것부터 제거 (keepKey 는 유지)
 */
export function prunePendingCandidates(candsObj, maxPending, keepKey) {
    const cands = { ...(candsObj || {}) };
    const pendingKeys = Object.keys(cands).filter((k) => {
        const st = String(cands[k]?.status || 'pending');
        return st === 'pending';
    });
    if (pendingKeys.length <= maxPending) return cands;

    pendingKeys.sort((a, b) => {
        const ca = Number(cands[a]?.count) || 0;
        const cb = Number(cands[b]?.count) || 0;
        if (ca !== cb) return ca - cb;
        return (Number(cands[a]?.lastAt) || 0) - (Number(cands[b]?.lastAt) || 0);
    });

    let over = pendingKeys.length - maxPending;
    for (let i = 0; i < pendingKeys.length && over > 0; i++) {
        const k = pendingKeys[i];
        if (keepKey && k === keepKey) continue;
        delete cands[k];
        over -= 1;
    }
    return cands;
}

export function trimStringList(list, maxLen) {
    const arr = Array.isArray(list) ? list.map((a) => String(a || '').trim()).filter(Boolean) : [];
    if (arr.length <= maxLen) return arr;
    return arr.slice(0, maxLen);
}
