import { OutputOptions } from "../../config/interfaces";
import openFileExplorer from "open-file-explorer";
import { COMPONENT_OUT_FOLDER } from "../../config/components";
import { emptyFolder, copyToRunFolder } from "../../lib/file/fileMethods";
import path from "path";

let OUTPUT_HANDLERS: Record<string, (folderPath: string) => Promise<void>> = {};

OUTPUT_HANDLERS[OutputOptions.OpenOutputFolder] = async () => {
    await new Promise((resolve) => {
        openFileExplorer(path.resolve(__dirname, `$../../../../../${COMPONENT_OUT_FOLDER}`), () => {
            resolve();
        });
    });
};

OUTPUT_HANDLERS[OutputOptions.SaveInsideCurrentFolder] = async (folderPath) => {
    await copyToRunFolder(folderPath);
    await emptyFolder(folderPath);
};

export default OUTPUT_HANDLERS;
