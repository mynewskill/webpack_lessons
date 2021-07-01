const abc = {
    one: "string",
    two: "number",
    three: "logic"
};

const xyz = {
    ...abc,
    ttt: 3,
    zz: 2
}

console.log(abc);
console.log(xyz);