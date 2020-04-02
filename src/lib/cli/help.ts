import chalk from "chalk";
import { COMMANDS, OPTIONS, OPTION_VALUES } from "config/arguments";

const { javascript, typescript, wizard } = COMMANDS;

const { type, style, destination } = OPTIONS;

const { functional, classComponent } = OPTION_VALUES.type;
const { css, sass, materialjss, styledcomponents } = OPTION_VALUES.styles;
const { currentFolder, openOutputFolder } = OPTION_VALUES.destination;

const menus = {
    main: `
    ${chalk.green("fc [command] [name] <options>")}

        ${chalk.blueBright(javascript.short)} ........ creates a JavaScript component [${javascript.long}]
        ${chalk.blueBright(typescript.short)} ........ creates a TypeScript component [${typescript.long}]
        ${chalk.blueBright(wizard.short)} ........ creates a component using the wizard [${wizard.long}]
        
        ${chalk.blueBright("options:")}

            ${chalk.blueBright(`-${type.short}, --${type.long} `)} ..... component type (${classComponent.long}, ${
        functional.long
    }) [${classComponent.short}, ${functional.short}]
            ${chalk.blueBright(`-${style.short}, --${style.long} `)} ..... component style (${css.long}, ${
        sass.long
    }, ${materialjss.long}, ${styledcomponents.long}) [${css.short}, ${sass.short}, ${materialjss.short}, ${
        styledcomponents.short
    }]
            ${chalk.blueBright(`-${destination.short}, --${destination.long} `)} ..... component type (${
        currentFolder.long
    }, ${openOutputFolder.long}) [${currentFolder.short}, ${openOutputFolder.short}]

        ${chalk.blueBright("examples:")}
        
            ${chalk.blueBright(`fc ${javascript.short} MyComponent`)}
            ${chalk.blueBright(`fc ${javascript.short} MyComponent -${type.short} ${functional.long}`)}
            ${chalk.blueBright(`fc ${javascript.short} MyComponent -${destination.short} ${openOutputFolder.long}`)}
            ${chalk.blueBright(`fc ${javascript.short} MyComponent -${style.short} ${materialjss.short}`)}
    `
};

const help = (args: Record<string, string>) => {
    console.log(menus.main);
};

export default help;
