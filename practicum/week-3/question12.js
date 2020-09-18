/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    let curr = [0,0];
    let points = [];
    for (let i = 0; i < s.length; i++) {
        points.push("" + curr[0] + ',' + curr[1]);

        console.log(points);
        console.log('-------------');
        let letter = s.charAt(i);
        if (letter == 'N') {
            curr[0] += 1;
        } else if (letter == 'E') {
            curr[1] += 1;
        } else if (letter == 'S') {
            curr[0] -= 1;
        } else {
            curr[1] -= 1;
        }
        console.log(curr);

        if (points.includes("" + curr[0] + ',' + curr[1])) {
            return true;
        }
    }

    return false;
};

console.log(isCrossing("NESWW"));