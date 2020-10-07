#include <iostream>
#include <string>
using namespace std;

void selection_sort(int *array, int arrLength){
    int minimum;
    for(int i = 0; i < arrLength-1; i++){
        minimum = i;
        for(int j = i + 1; j < arrLength; j++){
            if(array[j] < array[minimum]){
                minimum = j;
            }
        }
        int temp = array[i];
        array[i] = array[minimum];
        array[minimum] = temp;
    }
}

int main(){
    int arrayNum[] = {16, 6, 13, 20, 12, 2, 14, 4, 10, 11};
    int arrLength = sizeof(arrayNum) / sizeof(arrayNum[0]);

    selection_sort(arrayNum, arrLength);

    for(int i = 0; i < arrLength; i++){
        std::cout << arrayNum[i] << endl;
    }

    return 0;
}