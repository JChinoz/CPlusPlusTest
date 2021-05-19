// Check if all b's are after all a's

// var S = 'aaabaab';
// console.log(solution(S));
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
// 	var bAfterA = true;
// 	var bFlag = false;

// 	for(var i = 0; i < S.length; i++){
// 		if(S[i] == 'b'){
// 			bFlag = true;
// 		}
// 		if(bFlag == true && S[i] == 'a'){
// 			bAfterA = false;
// 			return bAfterA;
// 		}
// 	}
// 	return bAfterA;
// }

// Return biggest possible value by inserting '5'
// var N = 33634;
// console.log(solution(N));

// function solution(N){
// 	N = Array.from(String(N));

// 	var biggestNumArray = [];
// 	var pushedFlag = false;
// 	var negativeValue = false;
// 	var newNumber = 0;

// 	if(N[0] === '-'){
// 		negativeValue = true;
// 	}

// 	for(var i = 0; i < N.length; i++){
// 		if(negativeValue == false){
// 			if(5 > parseInt(N[i]) && pushedFlag == false){
// 				pushedFlag = true;
// 				biggestNumArray.push('5');
// 			}
// 		} else {
// 			if(5 < parseInt(N[i]) && pushedFlag == false){
// 				pushedFlag = true;
// 				biggestNumArray.push('5');
// 			}
// 		}
// 		biggestNumArray.push(N[i]);

// 		if(i == N.length - 1 && pushedFlag == false){
// 			pushedFlag = true;
// 			biggestNumArray.push('5');
// 		}
// 	}

// 	for(var i = 0; i < biggestNumArray.length; i++){
// 		if(biggestNumArray[i] == '-'){
// 			i++;
// 		}
// 		newNumber += parseInt(biggestNumArray[i]) * Math.pow(10 ,(biggestNumArray.length - i) - 1);
// 	}

// 	if(negativeValue == true){
// 		newNumber *= -1;
// 	}
// 	return newNumber;
// }

// Pairs of elements of the array that are equal but occupy different positions
var A = [];
A[0] = 3;
A[1] = 5;
A[2] = 6;
A[3] = 3;
A[4] = 3;
A[5] = 5;

solution(A);

function solution(A) {
    var map = new Object();
    for (var i = 0; i < A.length; i++) {
        map[i] = A[i];
    }

    var indexArray = [];
    var index = [];
    // Get duplicate values;
    var uniqueDuplicates = A.filter((e, i, a) => a.indexOf(e) !== i).filter(
        onlyUnique
    );

    for (var i = 0; i < uniqueDuplicates.length; i++) {
        for (const [key, value] of Object.entries(map)) {
			console.log("Key: " + key);
            if (value == uniqueDuplicates[i]) {
				console.log("Key Push");
                index.push(key);
            }
        }
    }
	console.log(indexArray);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
