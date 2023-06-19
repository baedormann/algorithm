function solution(names) {
    return names.map((e, i) =>  i % 5 === 0 ? e : null).filter(e => e !== null)
}