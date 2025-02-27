function vectorAffinity(xs, ys) {
    if (xs.length === 0 && ys.length === 0) return 1;
    const maxLen = Math.max(xs.length, ys.length);
    let matchCount = 0;
    for (let i = 0; i < maxLen; i++) {
        if (i < xs.length && i < ys.length && xs[i] === ys[i]) {
            matchCount++;
        }
    }
    return matchCount / maxLen;
}