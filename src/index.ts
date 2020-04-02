import "module-alias/register";
import chalk from "chalk";
import figlet from "figlet";
import cli from "lib/cli";

console.log(
    chalk.green(
        figlet.textSync("Fast Component")
    )
)
console.log(__dirname);
console.log(process.cwd());

cli(process.argv);