'use strict';
const {spawnSync} = require('child_process');

module.exports = baseDir => {
	const result = {};

	result.date = getCommandOutput('date');
	result.hostname = getCommandOutput('hostname');
	result.username = getCommandOutput('whoami');

	const useBaseDirOptions = {cwd: baseDir};

	result.gitCommitHash = getCommandOutput(
		'git', ['rev-parse', 'HEAD'],
		useBaseDirOptions);

	result.gitVersion = getCommandOutput(
		'git', ['log', '--graph', '--decorate', '-1'],
		useBaseDirOptions);

	result.gitDirty = getCommandOutput(
		'git', ['diff', '--quiet', 'HEAD'],
		useBaseDirOptions);

	result.gitChanges = getCommandOutput(
		'git', ['status', '--short'],
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
