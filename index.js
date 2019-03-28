'use strict';
const {spawnSync} = require('child_process');

module.exports = baseDir => {
	const result = {};

	result.date = getCommandOutput('date');
	result.hostname = getCommandOutput('hostname');
	result.username = getCommandOutput('whoami');

	const useBaseDirOptions = {cwd: baseDir};

	result.commit = {};

	result.commit.hash = getCommandOutput(
		'git', ['rev-parse', 'HEAD'],
		useBaseDirOptions);

	result.commit.subject = getCommandOutput(
		'git', ['log', '--pretty=%s', '--max-count', '1'],
		useBaseDirOptions);

	result.commit.body = getCommandOutput(
		'git', ['log', '--pretty=%b', '--max-count', '1'],
		useBaseDirOptions);

	result.commit.author = getCommandOutput(
		'git', ['log', '--pretty=%an', '--max-count', '1'],
		useBaseDirOptions);

	result.commit.date = getCommandOutput(
		'git', ['log', '--pretty=%aD', '--max-count', '1'],
		useBaseDirOptions);

	result.commit.changes = getCommandOutput(
		'git', ['diff', 'HEAD~', '--shortstat'],
		useBaseDirOptions);

	return result;
};

function getCommandOutput(command, args = [], options) {
	const spawnedCommand = spawnSync(command, args, options);

	if (spawnedCommand.error) {
		console.error(`Command errored:`);
		console.error(`  ${command}`);
		console.error(spawnedCommand.error.toString());
	}

	if (spawnedCommand.stdout) {
		return spawnedCommand.stdout.toString().trim();
	}
	return null;
}
