import test from 'ava';
import gineta from '.';

test('title', t => {
	const err = t.throws(() => {
		gineta(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(gineta('unicorns'), 'unicorns & rainbows');
});
