var PI = 3.14,R = 0
function getGirth(R) {
    return 2*Math.PI*R
}

function getArea(R) {
    return Math.PI*R*R
}

module.exports = {
    girth : getGirth,
    area : getArea
}