const test = process.env.TEST || 'tape'

const getTestPatch = ({
	'tape': _ => require('./lib/tape-patched'),
	'ava': _ => require('./lib/ava-patched'),
})[test]

module.exports = getTestPatch()
