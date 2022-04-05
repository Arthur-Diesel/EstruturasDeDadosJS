const assert = require('assert');
const Stack = require('../Stack/Stack')

describe('Stack', () => {

    it('Stack Size!', () => {
        const stack = new Stack();
        stack.push(0);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert.strictEqual(stack.size(), 4);
    })

    it('Stack Peek!', () => {
        const stack = new Stack();
        stack.push(0);
        stack.push(5);
        assert.strictEqual(stack.peek(), 5);
    })

    it('Stack Pop!', () => {
        const stack = new Stack();
        stack.push(0);
        stack.push(10);
        assert.strictEqual(stack.pop(), 10);
    })

    it('Stack isEmpty ~ True', () => {
        const stack = new Stack();
        assert.strictEqual(stack.isEmpty(), true);
    })

    it('Stack isEmpty ~ False', () => {
        const stack = new Stack();
        stack.push(0);
        assert.strictEqual(stack.isEmpty(), false);
    })

})