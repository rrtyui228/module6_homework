function numbersBetween(from, to) {
    let i = from;

    let timerId = setInterval(function() {
        console.log(i);
        if (i === to) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
}

numbersBetween(8, 16);
