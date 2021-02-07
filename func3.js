function getSum(firstNum) {
    return function (secondNum) {
        return firstNum+secondNum
    }
}

console.log(getSum(1)(2))