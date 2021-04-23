/**
 * @param {string} dateStr - 2021-04-25
 * @returns {string} - 25-04-2021
 */
function formatDate(dateStr) {
    const dArr = dateStr.split('-');
    return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
}

module.exports = { formatDate };
