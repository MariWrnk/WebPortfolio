let array = Array.from({length: 1000}, () => Math.random() * 100);
console.log(array);

let funcMin = function(array){
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }        
    }
    return min;
}

let funcMax = function(array){
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }        
    }
    return max;
}

let fucnMedian = function(array){
    quickSort(array);
    let middle = Math.floor(array.length/2);
    if(array.length % 2 == 1){
        return array[middle];
    }else{
        return (array[middle] + array[middle + 1]) / 2;
    }
}

console.log(funcMin(array));
console.log(funcMax(array));
console.log(fucnMedian(array));

function swap(array, a, b){
    let buf = array[a];
    array[a] = array[b];
    array[b] = buf;
}

function partition(array, left, right){
    let center = Math.floor((left + right) / 2);
    let pivot = array[center];
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function quickSort(array, left = 0, right = array.length - 1){
    if (array.length > 1) {
        let index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
}

quickSort(array);
console.log(array);