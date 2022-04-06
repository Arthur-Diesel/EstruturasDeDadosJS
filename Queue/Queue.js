class Queue{
    constructor () {
        this.count = 0;
        this.lowestCount = 0;
        this._items = {};
    }

    enqueue(element){
        this._items[this.count] = element;
        this.count++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this._items[this.lowestCount];
        delete this._items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this.lowestCount];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this._items = {};
        this.count = 0;
        this.lowestCount = {};
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this._items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this._items[i]}`;
        }
        return objString;
    }
}

module.exports = Queue;
