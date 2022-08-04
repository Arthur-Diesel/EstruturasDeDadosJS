const { defaultCompare, Compare } = require('../Util/DefaultCompare')
const { swap } = require('./Sort')

function bubbleSort(array, compareFn = defaultCompare){
    const { length } = array
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - 1; j++){
            if(compareFn(array[j], array[i]) === Compare.BIGGER_THAN){
                swap(array, j, j + 1)
            }
        }
    }
    return array
}