function total(addCount, addPrice, currentTotal = 0) {
    return Number((Number(addCount) * Number(addPrice) + currentTotal).toFixed(2))
}