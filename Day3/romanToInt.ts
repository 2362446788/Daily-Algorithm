function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let cur: number = romanMap[s[i]];
    const next: number = romanMap[s[i + 1]];
    if (next && next > cur) {
      cur = -cur;
    }
    total += cur;
  }
  return total;
}
