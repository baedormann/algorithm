function solution(myString) {
    return myString.split('').map(e => e.toUpperCase() === 'A' ? 'A' : e.toLowerCase()).join('')
}