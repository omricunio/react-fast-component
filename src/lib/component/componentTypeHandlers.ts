import { QueryType, QueryNames } from "config/interfaces";
import {
    copyFolder,
    recursiveGetAllFiles,
    readFile,
    saveFile,
    getFolderPath,
    deleteFile,
    joinPath,
    emptyFolder
} from "lib/file/fileMethods";
import { COMPONENT_NAME, COMPONENT_OUT_FOLDER } from "config/components";
import TextFile from "lib/file/TextFile";
import OUTPUT_HANDLERS from "./outputHandlers";

export async function baseComponentTypeHandler(queries: QueryType[], folderPath: string) {
    const componentNameQuery = queries.find((query) => query.name === QueryNames.componentName);
    const componentName: string = componentNameQuery!.answer!;
    const newFolderPath = joinPath(COMPONENT_OUT_FOLDER, componentName);

    await emptyFolder(COMPONENT_OUT_FOLDER);
    await copyFolder(folderPath, newFolderPath);
    const files: string[] = await recursiveGetAllFiles(newFolderPath);
    for (const filePath of files) {
        const file: TextFile = await readFile(filePath);
        file.replaceText(COMPONENT_NAME, componentName, true);
        await deleteFile(filePath);
        await saveFile(getFolderPath(filePath), file);
    }

    const componentOutputQuery = queries.find((query) => query.name === QueryNames.outputQuery);
    const outputOption = componentOutputQuery!.answer!;
    await OUTPUT_HANDLERS[outputOption](newFolderPath);
}
