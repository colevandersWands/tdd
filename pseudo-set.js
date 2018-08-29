describe('pseudo-set', function() {

	it('can add items', function() {
		let ret_add = obj.add('a');
		assert.deepEqual(ret_add, obj);
	});

	it('can check for own values', function() {
		let has_a = obj.has('a');
		assert.strictEqual(has_a, true);
		let has_b = obj.has('b');
		assert.strictEqual(has_b, false);
	});
	
	it('can delete items', function() {
		let del_b = obj.delete('b');
		assert.strictEqual(del_b, false);
		let del_a = obj.delete('a');
		assert.strictEqual(del_a, true);
	});

	it('wont add duplicate items', function() {
		obj.add('a');
		assert.strictEqual(obj.size, 1);
		obj.add('a');
		assert.strictEqual(obj.size, 1);
	});

	it('can clear all items', function() {
		obj.clear();
		assert.strictEqual(obj.size, 0);
		let has_a = obj.has('a');
		assert.strictEqual(has_a, false);
	});
	
	it('is not a Set', function() {
		assert.strictEqual(obj instanceof Set, false); 	
	});
  

});
