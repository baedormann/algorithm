function solution(binomial) {
    return binomial.includes('+')
        ? binomial.split(' + ').map(e => parseInt(e)).reduce((a, c) => a += c)
        : binomial.includes('-')
            ? binomial.split(' - ').map(e => parseInt(e)).reduce((a, c) => a -= c)
            : binomial.split(' * ').map(e => parseInt(e)).reduce((a, c) => a *= c)
}