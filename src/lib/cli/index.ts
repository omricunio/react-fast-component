import minimist from "minimist";
import handlers from "./handlers";

const cli = (argsArr: string[]) => {
    const args = minimist(argsArr.slice(2));
    let cmd = args._[0] || 'help';
    if(args.help || args.h) {
        cmd = "help";
    }
    if((cmd === "js" || cmd === "ts") && !args._[1]) {
        cmd = "help";
    }
    //console.log(args);
    handlers[cmd](args);
}

export default cli;