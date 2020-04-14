import { OutputOptions } from "../../config/interfaces";
import openFileExplorer from "open-file-explorer";
import { COMPONENT_OUT_FOLDER } from "../../config/components";
import { emptyFolder, copyToRunFolder, checkIfFolderExistsOnRun } from "../../lib/file/fileMethods";
import path from "path";
import chalk from "chalk";

let OUTPUT_HANDLERS: Record<string, (folderPath: string) => Promise<void>> = {};

OUTPUT_HANDLERS[OutputOptions.OpenOutputFolder] = async () => {
    await new Promise((resolve) => {
        openFileExplorer(path.resolve(__dirname, `$../../../../../${COMPONENT_OUT_FOLDER}`), () => {
            resolve();
        });
    });
};

OUTPUT_HANDLERS[OutputOptions.SaveInsideCurrentFolder] = async (folderPath) => {
    if(await checkIfFolderExistsOnRun(folderPath)) {
        throw new Error(chalk.red("Component already exists\nReact Fast Component does not allow Component overwriting"));
    }
    else {
        await copyToRunFolder(folderPath);
        await emptyFolder(folderPath);
    }
};

export default OUTPUT_HANDLERS;
