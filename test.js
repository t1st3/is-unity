import test from 'ava';
import isUnity from '.';

test('is-unity', async t => {
	t.is(await isUnity, false);
});
