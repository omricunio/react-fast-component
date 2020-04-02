import minimist from "minimist";
import handlers from "./handlers";
import chalk from "chalk";
import figlet from "figlet";

const cli = (argsArr: string[]) => {
    console.log(chalk.green(figlet.textSync("Fast Component")));
    const args = minimist(argsArr.slice(2));
    let cmd = args._[0] || "help";
    if (args.help || args.h) {
        cmd = "help";
    }
    if ((cmd === "js" || cmd === "ts") && !args._[1]) {
        cmd = "help";
    }
    handlers[cmd](args);
};

export default cli;
