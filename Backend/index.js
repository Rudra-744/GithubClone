const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controller/init.js");

yargs(hideBin(process.argv))
.command("init","Initialize a new repository",{},initRepo)
.demandCommand(1,"You need at least one command")
.help().argv;
