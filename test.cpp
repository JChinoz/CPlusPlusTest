#include <iostream>
#include <string>
using namespace std;

void printArray(int *array){
    int arrLength = sizeof(array) / sizeof(array[0]);
    std::cout << arrLength << endl;
}

// void binarySearch(int low, int high, int key, int array[]){
//     // std::cout << low;
//     // std::cout << high;
//     // std::cout << key;
    
//     int arrLength = sizeof(array) / sizeof(array[0]);

//     for(int i = 0; i < arrLength; i++){
//         std::cout << array[i] << endl;
//     }
//     // while(low <= high){
//     //     int mid = (low + high) / 2;
//     //     if(array[mid] < key){
//     //         low = mid + 1;
//     //     } else if (array[mid] > key){
//     //         high = mid - 1;
//     //     } else {
//     //         return mid;
//     //     }
//     // }
//     // return -1;
// }

int main(){
    int arrayNum[] = {1,2,3,4,5,7,8,9};
    printArray(arrayNum);
    // std::cout << binarySearch(0, 8, 8, arrayNum);

    return 0;
}