import chalk from "chalk";
import { COMMANDS, OPTIONS, OPTION_VALUES } from "../../config/arguments";
import { CliProgram } from "./interfaces";
import figlet from "figlet";

const { javascript, typescript, wizard } = COMMANDS;

const { type, style, destination } = OPTIONS;

const { functional, classComponent } = OPTION_VALUES.type;
const { css, sass, materialjss, styledcomponents } = OPTION_VALUES.styles;
const { currentFolder, openOutputFolder } = OPTION_VALUES.destination;

const menus = {
    main: `    
    ${chalk.green("rfc [command] [component-name] <options>")} 👨‍🎨

        ${chalk.yellow(wizard.short)} ........ creates a component using the wizard [${wizard.long}]
        ${chalk.blue(javascript.short)} ........ creates a JavaScript component [${javascript.long}]
        ${chalk.blue(typescript.short)} ........ creates a TypeScript component [${typescript.long}]
        
        ${chalk.blue("options:")}

            ⚙️  ${chalk.blue(`-${type.short}, --${type.long} `)} ..... component type (${classComponent.long}, ${
        functional.long
    }) [${classComponent.short}, ${functional.short}]
            🖌  ${chalk.blue(`-${style.short}, --${style.long} `)} ..... component style (${css.long}, ${
        sass.long
    }, ${materialjss.long}, ${styledcomponents.long})
                [${css.short}, ${sass.short}, ${materialjss.short}, ${styledcomponents.short}]
            💾 ${chalk.blue(`-${destination.short}, --${destination.long} `)} ..... component destination (${
        currentFolder.long
    }, ${openOutputFolder.long}) [${currentFolder.short}, ${openOutputFolder.short}]

        ${chalk.blue("examples:")}

            ${chalk.blue(`rfc ${wizard.short}`)}
            ${chalk.blue(`rfc ${javascript.short} MyComponent`)}
            ${chalk.blue(`rfc ${typescript.short} MyComponent -${type.short} ${functional.long}`)}
            ${chalk.blue(`rfc ${javascript.short} MyComponent -${destination.short} ${openOutputFolder.long}`)}
            ${chalk.blue(`rfc ${typescript.short} MyComponent -${style.short} ${materialjss.short}`)}
    `
};

async function help() {
    console.log(chalk.green(figlet.textSync("Fast Component")));
    console.log(menus.main);
};

const helpProgram: CliProgram = {
    handler: help
};

export default helpProgram;
