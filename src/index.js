module.exports = function reverse(n) {
    let absStr = Math.abs(n).toString();
    let rev = Array.from(absStr, Number).reverse().join("");

    return rev;
};
// let revNum = (n) => {
//     let absStr = Math.abs(n).toString();
//     let rev = parseInt(Array.from(absStr, Number).reverse().join(""), 10);

//     return rev;
// };
// console.log(revNum(261));
