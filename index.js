'use strict';
const { spawnSync } = require( 'child_process' );

module.exports = (baseDir) => {
	let result = {};

	result.date = getCommandOutput('date');
	result.hostname = getCommandOutput('hostname');
	result.username = getCommandOutput('whoami');

	const useBaseDirOptions = { cwd: baseDir };

	result.gitCommitHash = getCommandOutput(
		"git rev-parse HEAD",
		[], useBaseDirOptions);
	result.gitVersion = getCommandOutput(
		"git log --graph --decorate -1 | sed -e 's/^[ \t]*//' | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\n  /g'",
		[], useBaseDirOptions);
	result.gitDirty = getCommandOutput(
		"git diff --quiet HEAD",
		[], useBaseDirOptions);
	result.gitChanges=getCommandOutput(
		"git status --short | sed -e 's/^[ \t]*//' | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\n  /g' | head -n10",
		[], useBaseDirOptions);
	return result;
};

function getCommandOutput(command, args = [], options)
{
	const spawnedCommand = spawnSync(command, args, options);

	if(spawnedCommand.stderr)
	{
		console.error(spawnedCommand.stderr.toString());
	}

	if(spawnedCommand.stdout)
	{
		return spawnedCommand.stdout.toString();
	}
	return null;
}
