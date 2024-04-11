const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', palindrome)

function palindrome() {
    let word = document.querySelector('.input-text').value
    let length = word.length

    let start = word.substring(0, Math.floor(length / 2)).toLowerCase();
    let end = word.substring(length - Math.floor(length / 2)).toLowerCase();

    let flip = end.split("").reverse().join("")


    if ( start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`
    }


}