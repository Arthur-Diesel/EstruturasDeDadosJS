const assert = require('assert');
const Queue = require('../Queue/Queue')

describe('Queue', () => {

    it('Queue Size!', () => {
        const queue = new Queue();
        queue.enqueue('Arthur');
        queue.enqueue('Trojan');
        assert.strictEqual(queue.size(), 2);
    })

    it('Queue Peek!', () => {
        const queue = new Queue();
        queue.enqueue('Arthur');
        queue.dequeue();
        queue.enqueue('Trojan');
        queue.enqueue('Mehl');
        assert.strictEqual(queue.peek(), 'Trojan');
    })

    it('Queue isEmpty ~ True', () => {
        const queue = new Queue();
        assert.strictEqual(queue.isEmpty(), true);
    })

    it('Queue isEmpty ~ False', () => {
        const queue = new Queue();
        queue.enqueue('Arthur');
        assert.strictEqual(queue.isEmpty(), false);
    })

    it('Queue Size!', () => {
        const queue = new Queue();
        queue.enqueue('Arthur');
        assert.strictEqual(queue.size(), 1);
    })

    it('Queue toString!', () => {
        const queue = new Queue();
        queue.enqueue('Arthur');
        queue.enqueue('Diesel');
        assert.strictEqual(queue.toString(), 'Arthur, Diesel')
    })
})