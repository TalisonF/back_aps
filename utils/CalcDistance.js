module.exports = 
function CalcDistance(lat1, lon1, lat2, lon2) {
    const RADIUSKILOMETERS = 6373
    let latR1 = deg2rad(lat1)
    let lonR1 = deg2rad(lon1)
    let latR2 = deg2rad(lat2)
    let lonR2 = deg2rad(lon2)
    let latDifference = latR2 - latR1
    let lonDifference = lonR2 - lonR1
    let a = Math.pow(Math.sin(latDifference / 2), 2) + Math.cos(latR1) * Math.cos(latR2) * Math.pow(Math.sin(lonDifference / 2), 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let dk = c * RADIUSKILOMETERS;
    let km = round(dk);
    return km;
}

function deg2rad(deg) {
    var rad = deg * Math.PI / 180;
    return rad;
};

function round(x) {
    return Math.round(x * 10) / 10;
};
