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
var array = [];

array[0] = 3;
array[1] = 5;
array[2] = 6;
array[3] = 3;
array[4] = 3;
array[5] = 5;
array[6] = 4;

var ignoredIndex = [];
var indexLists = [];
var indexPairs = [];

array.forEach(function(value, index){
    var indexedArray = getAllIndexes(array, value);
    if(!ignoredIndex.includes(index)){
        if(indexedArray.length > 1){
            ignoredIndex = ignoredIndex.concat(indexedArray);
            indexLists.push(indexedArray);
        }    
    }
});

generatePairs(indexLists);
console.log(indexPairs);

function generatePairs(arr){
    arr.forEach(function(value, index){
        var i = 0;
        for(var j = 1; j < value.length; j++){
            indexPairs.push(value[i], value[j]);
            i++;
        }
    });
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}