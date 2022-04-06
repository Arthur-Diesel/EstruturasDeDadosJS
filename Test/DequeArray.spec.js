const assert = require('assert');
const Deque = require('../Deque/DequeArray')

describe('DequeArray', () => {
    it('DequeArray!', () => {
        const deque = new Deque();
        assert.strictEqual(deque.isEmpty(), true);
        deque.addBack('John');
        deque.addBack('Jack');
        assert.strictEqual(deque.toString(), 'John,Jack');
        deque.addBack('Camila');
        assert.strictEqual(deque.toString(), 'John,Jack,Camila');
        assert.strictEqual(deque.size(), 3);
        assert.strictEqual(deque.isEmpty(), false);
        deque.removeFront();
        assert.strictEqual(deque.toString(), 'Jack,Camila');
        deque.removeBack();
        assert.strictEqual(deque.toString(), 'Jack');
        deque.addFront('John');
        assert.strictEqual(deque.toString(), 'John,Jack');
    })
})