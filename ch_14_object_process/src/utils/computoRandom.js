const computo_randoms = (qty) => {
    let result = {};
    for (let i = 0; i < qty; i++) {
        const random = Math.floor(Math.random() * 1000);
        result[random] ? result[random]++ : (result[random] = 1);
    }
    return result
}

process.on('message', (qty) => {
    const result = computo_randoms(qty);
    process.send(result);
})