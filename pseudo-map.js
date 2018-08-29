describe('pseudo-map', function() {
  let key_1 = {};
  let key_2 = {};
  let key_3 = function k3(){};

  it('can set new key-value pairs', function() {
    obj.set(key_1, key_2);
    obj.set(key_2, 'key_2');
    obj.set(key_3, obj);
    obj.set(obj, obj);
  });

  it('can read values by key', function() {
    let get_1 = obj.get(key_1);
    assert.deepEqual(get_1, key_2);

    let get_2 = obj.get(key_2);
    assert.strictEqual(get_2, 'key_2');

    let get_3 = obj.get(key_3);
    assert.deepEqual(get_obj, k3);

    let get_obj = obj.get(obj);
    assert.deepEqual(get_obj, obj);
  });

  it('is confusing', function() {
    get_obj = obj.get(obj.get(obj));
    assert.deepEqual(get_obj, obj);
  });

  it('is unhelpful', function() {
    let has = obj.has(key_1);
    assert.strictEqual(has, null);
    let hasnot = obj.has("e");
    assert.strictEqual(hasnot, undefined);

    let undef = obj.has(null);
    assert.strictEqual(undef, undefined);
    let nu = obj.has(undefined);
    assert.strictEqual(nu, null);
  });

  it('will not allow duplicate keys', function() {
    obj.set("r", "r");
    assert.throws(obj.set("r", 0));
  });

  it('is unstoppable', function() {
    assert.throws(obj.remove(key_1));
    assert.throws(obj.delete(key_2));
    assert.throws(obj.erase(key_3));

    let try_clear = obj.clear()
    assert.strictEqual(try_clear instanceof Error, true);
    let try_reset = obj.reset()
    assert.strictEqual(try_reset instanceof Error, true);
    let try_erase_all = obj.erase_all()
    assert.strictEqual(try_erase_all instanceof Error, true);
  });

});
