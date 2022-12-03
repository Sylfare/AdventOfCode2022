import { openFile, Performance } from "./lib.mjs";

const perf = new Performance();
openFile("./input2.txt")
.then(lines => lines.reduce((total, line, i) => {
    const score1 = line.charCodeAt(0)-65;
    const score2 = line.charCodeAt(2)-88;    
    return [
        total[0] + score2+1 + (score2 - score1 + 4)%3*3,
        total[1] + (score1 + score2 + 2)%3+1 + 3*score2];
},[0,0]))
.then(console.log)
perf.end();