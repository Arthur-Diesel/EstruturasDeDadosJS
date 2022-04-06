class QueueArray {
    constructor(){
        this._items = [];
    }
    enqueue(element){
        this._items.push(element)
    }
    dequeue(){
        const element = this._items[0];
        this._items.shift();
        return element;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[0];
    }
    isEmpty(){
        return this._items.length === 0;
    }
    size(){
        return this._items.length;
    }
    clear(){
        this._items = [];
    }
    toString(){
        return this._items.join(', ');
    }
}

module.exports = QueueArray;