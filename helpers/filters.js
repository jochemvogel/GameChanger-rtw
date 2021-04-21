function formatDate(dateStr) {
    const dArr = dateStr.split('-');
    return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
}

module.exports = { formatDate };
