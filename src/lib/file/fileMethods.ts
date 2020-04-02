import fse, { lstat } from "fs-extra";
import path from "path";
import TextFile from "./TextFile";
import { getRelativePath } from "./utils";
//renamecomponent

export async function copyFolder(folderPath: string, newFolderPath: string) {
    await fse.copy(folderPath, newFolderPath);
}

export async function recursiveGetAllFiles(folderPath: string): Promise<string[]> {
    const files: string[] = [];
    const filesAndFolders = await fse.readdir(folderPath);
    for(const fileOrFolderName of filesAndFolders) {
        const fileOrFolderPath = path.join(folderPath, fileOrFolderName);
        if((await fse.lstat(fileOrFolderPath)).isDirectory()) {
            files.push(...await recursiveGetAllFiles(fileOrFolderPath));
        }
        else
        {
            files.push(fileOrFolderPath);
        }
    }
    return files;
}

export async function readFile(filePath: string): Promise<TextFile> {
    const fileName = path.basename(filePath);
    try {
        const data = await fse.readFile(filePath, "utf-8");
        return new TextFile(fileName, data);
    }
    catch(e) {
        throw new Error(`Cannot read file ${fileName} \n ${e}`);
    }
}

export async function deleteFile(filePath: string) {
    await fse.remove(filePath);
}

export async function emptyFolder(folderPath: string) {
    await fse.emptyDir(folderPath);
}

export async function saveFile(folderPath: string, file: TextFile) {
    const newFilePath = path.join(folderPath, file.name);
    await fse.writeFile(newFilePath, file.data);
}

export function getFolderPath(filePath: string): string {
    return path.dirname(filePath);
}

export function getFolderNameByPath(folderPath: string): string {
    return path.basename(folderPath);
}

export function joinPath(...args: string[]) {
    return path.join(...args);
}
