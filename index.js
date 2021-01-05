const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const idGsheet = core.getInput('idGsheet');
    const creds = core.getInput('creds')
    const prBranch = core.getInput('prBranch')
    const cellToWrite = core.getInput('cellToWrite')

    core.info('idGsheet: ', idGsheet);
    core.info('creds: ', creds);
    core.info('prBrach: ', prBranch);
    core.info('cellToWrite: ', cellToWrite);

    core.setOutput('Gsheet completed');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
