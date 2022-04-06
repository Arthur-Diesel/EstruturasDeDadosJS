class DequeArray {
    constructor() {
        this._items = [];
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
    addFront(element){ 
        this._items.unshift(element);
    }
    addBack(element){
        this._items.push(element);
    }
    removeFront(){
        const element = this._items[0]; 
        this._items.shift();
        return element;
    }
    removeBack() {
        return this._items.pop();
    }
    peekFront(){
        return this._items[this._items.length - 1];
    }
    peekBack(){
        return this._items[0];
    }
    toString(){
        return this._items.join(',');
    }
}

module.exports = DequeArray;