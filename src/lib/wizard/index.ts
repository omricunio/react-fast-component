import { QueryType } from "config/interfaces";
import { askComponentOptions } from "./inquirer";
import { selectComponentType } from "lib/component/componentTypeSelector";
import { CliProgram } from "lib/cli/interfaces";
import chalk from "chalk";
import figlet from "figlet";

async function startWizard() {
    console.log(chalk.green(figlet.textSync("Fast Component")));
    const queries: QueryType[] = await askComponentOptions();
    const componentType = selectComponentType(queries);
    componentType?.handler(queries, componentType.folderPath);
}

const startWizardProgram: CliProgram = {
    handler: startWizard,
}

export default startWizardProgram;
