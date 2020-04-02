import { QueryType } from "config/interfaces";
import { askComponentOptions } from "./inquirer";
import { selectComponentType } from "lib/component/componentTypeSelector";

async function startWizard() {
    const queries: QueryType[] = await askComponentOptions();
    const componentType = selectComponentType(queries);
    componentType?.handler(queries, componentType.folderPath);
}

export default startWizard;
