const fs = require("fs");
var output = []
var found = false
var run = 0
var result = 0

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


/*while(run != whilemax) {
    console.log(whilerun)
    output.push(random(1, 6))
    console.log(output)
    whilerun++;
    console.log(whilerun)
    if(whilerun == whilemax) {
        fs.writeFileSync("output.json", output.toString())
        console.log(whilerun)
    }
}*/
/*while(found == false) {
    run++
    console.log(run)
    result = random(1,6) + ":" + random(1,6) + ":" + random(1,6) +  ":" + random(1,6) + ":" + random(1,6) + ":" + random(1,6)
    output.push(result)
    if(output.includes("1:2:3:4:5:6")) {
        found = true
        console.log("FOUND 1:2:3:4:5:6 AFTER " + run + " RUNS")
        fs.writeFileSync("output.json", output.toString())
    }
}*/

while(found == false) {
    run++
    result = random(1,6) + ":" + random(1,6) + ":" + random(1,6) +  ":" + random(1,6) + ":" + random(1,6) + ":" + random(1,6)
    if(result == "1:2:3:4:5:6") {
        found = true
        console.log("FOUND 1:2:3:4:5:6 AFTER " + run + " RUNS")
    }
    console.log(run)
}