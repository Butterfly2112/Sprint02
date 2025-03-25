mocha.setup('bdd');
let assert = chai.assert;

mocha.run();
describe('checkBrackets function', function () {
    it('should return -1 for non-string input: number', function () {
        assert.strictEqual(checkBrackets(123), -1);
    });
    it('should return -1 for non-string input: boolean', function () {
        assert.strictEqual(checkBrackets(true), -1);
    });
    it('should return -1 for non-string input: object', function () {
        assert.strictEqual(checkBrackets({}), -1);
    });
    it('should return -1 for non-string input: array', function () {
        assert.strictEqual(checkBrackets([]), -1);
    });
    it('should return -1 for NaN', function () {
        assert.strictEqual(checkBrackets(NaN), -1);
    });
    it('should return -1 for null input', function () {
        assert.strictEqual(checkBrackets(null), -1);
    });
    it('should return -1 for an empty object', function () {
        assert.strictEqual(checkBrackets({key: 'value'}), -1);
    });
    it('should return -1 for a function as input', function () {
        assert.strictEqual(checkBrackets(function() {}), -1);
    });

    it('should return 2 when the first unmatched closing bracket is at position 2', function () {
        assert.strictEqual(checkBrackets('1)()(())2(()'), 2);
    });
    it('should return 1 for the input "(a)())"', function () {
        assert.strictEqual(checkBrackets('(a)())'), 1);
    });
    it('should return 0 for the balanced brackets "(())"', function () {
        assert.strictEqual(checkBrackets('(())'), 0);
    });
    it('should return 0 for the balanced brackets "()()"', function () {
        assert.strictEqual(checkBrackets('()()'), 0);
    });
    it('should return 1 when the first unmatched opening bracket is at position 1', function () {
        assert.strictEqual(checkBrackets('((())'), 1);
    });
    it('should return 4 when there is an unmatched closing bracket at position 4 in "(())))))"', function () {
        assert.strictEqual(checkBrackets('(())))))'), 4);
    });
    it('should return 1 when there is an unmatched opening bracket at position 1 in "(()()"', function () {
        assert.strictEqual(checkBrackets('(()()'), 1);
    });
    it('should return 4 when there is an unmatched closing bracket at position 4 in "()))(("', function () {
        assert.strictEqual(checkBrackets('()))(('), 4);
    });
    it('should return 0 for the perfectly balanced brackets "((()))"', function () {
        assert.strictEqual(checkBrackets('((()))'), 0);
    });
    it('should return 2 when the unmatched closing bracket is at position 2 in "())("', function () {
        assert.strictEqual(checkBrackets('())('), 2);
    });
    it('should return 0 for the balanced nested brackets "(())(())"', function () {
        assert.strictEqual(checkBrackets('(())(())'), 0);
    });
    it('should return 0 for the input with valid nested and sequential brackets "((()()))"', function () {
        assert.strictEqual(checkBrackets('((()()))'), 0);
    });
    it('should return 1 for an unmatched opening bracket at position 1 in "(()()"', function () {
        assert.strictEqual(checkBrackets('(()()'), 1);
    });
});
