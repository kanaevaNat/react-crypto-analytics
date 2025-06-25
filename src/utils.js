export function percentDifference (a,b){
    return +(100* Math.abs((a-b)/((a+b)/2))).toFixed(2)
}

export function capitalize(str){
    return String(str).charAt(0).toUpperCase() + String(str).slice(1)
}