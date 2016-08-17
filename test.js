import test from 'ava';
import isUnity from './';

test('is-unity', t => {
	return isUnity().then(data => {
		t.false(data);
	});
});
