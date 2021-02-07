let arr = []
for (let i = 0; i <= 200; i++) {
    arr[i] = i
}
arr.unshift('heloworld', 0, null, NaN)

function getElementsCount() {
    const clearedArray = arr.filter(function (element) {
        return Number(element)
    })
    let evenArray = clearedArray.filter(function (num) {
        return num % 2 === 0
    })
    let oddArray = clearedArray.filter(function (num) {
        return num % 2 !== 0
    })
    let nullArray = arr.filter(function (num) {
        return num === 0 || num === null
    })
    console.log(`Even count - ${evenArray.length}, Odd count - ${oddArray.length}, Null count - ${nullArray.length}`)
}

getElementsCount()