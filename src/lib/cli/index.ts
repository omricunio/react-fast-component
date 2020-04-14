import minimist from "minimist";
import programs from "./programs";

async function cli(argsArr: string[]) {
    const args = minimist(argsArr.slice(2));
    let cmd = args._[0] || "help";
    if (args.help || args.h) {
        cmd = "help";
    }

    const program = programs[cmd];
    if(program) {
        const validation: boolean = program.validate ? program.validate!(args) : true;
        if(!validation) {
            cmd = "help";
        }
    }
    else
    {
        cmd = "help";
    }

    try {
        await programs[cmd].handler(args);
    }
    catch(e) {
        console.log(e.message);
    }
    
};

export default cli;
