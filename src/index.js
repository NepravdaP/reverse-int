module.exports = function reverse(n) {
    return Array.from(Math.abs(n).toString(), Number).reverse().join("");
};
// let revNum = (n) => {
//     let absStr = Math.abs(n).toString();
//     let rev = parseInt(Array.from(absStr, Number).reverse().join(""), 10);

//     return rev;
// };
// console.log(revNum(261));
