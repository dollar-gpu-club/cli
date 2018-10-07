#!/usr/bin/env node
require('yargs') // eslint-disable-line
  .command(
    'run',
    'Creates a GPU job to execute the given command',
    yargs => {
      yargs.option({
        f: {
          alias: 'file',
          default: 'index.py',
          describe: 'Python file to run',
          type: 'string'
        },
        p: {
          alias: 'price',
          demandOption: true,
          describe: 'Maximum price to pay for spot instances',
          type: 'number'
        }
      })
    },
    argv => {
      console.log(argv)
      run(argv.file, argv.price)
    }
  ).argv

function run(file, price) {
  // TODO: sftp files onto the server
}
