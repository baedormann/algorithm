function solution(myString) {
    return myString.split('').map(e => e.charCodeAt() < 'l'.charCodeAt() ? 'l' : e).join('')
}