// 1 d array
function highestScore(scores){
    let max = scores[0];
    for(var x = 1; x < scores.length; x++){
        if(max < scores[x]){
            max = scores[x];
        }
    }
    return max;
}

let scores = [21, 28, 1, 88, 15];
let maxScore = highestScore(scores);
console.log(maxScore);


// 2 d array
function highestRunScorer(info){
    let highestScorer = playerInfo[0][0];
    let highestScore = playerInfo[0][1];

    for(let x = 1; x < playerInfo.length; x++){

        if(highestScore < playerInfo[x][1]){
            highestScore = playerInfo[x][1];
            highestScorer = playerInfo[x][0];
        }
    }

    return highestScorer;
}

let playerInfo = [
    ["Ashraful", 95],
    ["Tamim", 25],
    ["Shakib", 45],
    ["Mushfiq",105],
];

let playerName = highestRunScorer(playerInfo);
console.log(playerName);