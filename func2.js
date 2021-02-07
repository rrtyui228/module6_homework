function simpleNumberCheck(number) {
    if (number > 1000 || isNaN(Number(number)) || number === null) return `Данные не верны`
    let dividers = []
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            dividers.push(i)
        }
    }
    if (dividers.length >= 2 || number === 1 || number === 0 || number < 0) {
        return `Your number is not simple`
    } else {
        return `Your number is simple`
    }
}

console.log(simpleNumberCheck(97))
