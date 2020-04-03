import { OutputOptions } from "config/interfaces";
import openFileExplorer from "open-file-explorer";
import { COMPONENT_OUT_FOLDER } from "config/components";
import { copyFolder, emptyFolder, joinPath, getFolderNameByPath } from "lib/file/fileMethods";

let OUTPUT_HANDLERS: Record<string, (folderPath: string) => Promise<void>> = {};

OUTPUT_HANDLERS[OutputOptions.OpenOutputFolder] = async () => {
    await new Promise((resolve) => {
        openFileExplorer(COMPONENT_OUT_FOLDER, () => {
            resolve();
        });
    });
};

OUTPUT_HANDLERS[OutputOptions.SaveInsideCurrentFolder] = async (folderPath) => {
    await copyFolder(folderPath, joinPath(process.cwd(), getFolderNameByPath(folderPath)));
    await emptyFolder(folderPath);
};

export default OUTPUT_HANDLERS;
