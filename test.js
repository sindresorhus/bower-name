import test from 'ava';
import fn from './';

test('package name is available', async t => {
	t.true(await fn('asdasfgrgafadsgaf'));
});

test('package name is taken', async t => {
	t.false(await fn('jquery'));
});
