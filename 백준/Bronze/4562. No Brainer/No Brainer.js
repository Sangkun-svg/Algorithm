const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const result = input.map(v => {
    const [x,y] = v.split(" ").map(Number)
    return x >= y ? "MMM BRAINS" : "NO BRAINS"   
 })
console.log(result.join("\n"));