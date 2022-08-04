const { defaultCompare, Compare } = require('../Util/DefaultCompare')
const { swap } = require('./Sort')

function selectionSort(array, compareFn = defaultCompare){
    const { length } = array
    let indexMin
    for(let i = 0; i < length - 1; i++){
        indexMin = i
        for(let j = 1; j < length; j++){
            if(compareF(array[indexMin], array[j]) == Compare.BIGGER_THAN){
                indexMin = j
            }
        }
        if(i !== indexMin){
            swap(array, i, indexMin)
        }
    }
    return array
}

