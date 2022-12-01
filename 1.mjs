import { openFile, Performance } from "./lib.mjs";

const perf  = new Performance();
openFile("./input1.txt","\n\n")
.then( lines => 
    lines.map(lines => lines.split('\n').reduce((total, cur) => total + parseInt(cur.trim(), 10), 0))
    .sort((a,b) => b - a)
    .slice(0,3)   
)
.then(cal => console.log("Part 1: ", cal[0] ,"Part 2 : ", cal.reduce((total, cur) => total + cur, 0)))

// done in part 1
// let sum = 0, record = 0;

// for (const line of lines) {
//     if (line === "") {
//         if (sum > record) record = sum;
//         sum = 0;
//     } else {
//         sum += parseInt(line);
//     }
// }

// console.log(record);

perf.end();