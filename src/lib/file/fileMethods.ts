import fse from "fs-extra";
import path from "path";
import TextFile from "./TextFile";
import { getRelativePath } from "./utils";

export async function copyFolder(folderPath: string, newFolderPath: string) {
    folderPath = getRelativePath(folderPath);
    newFolderPath = getRelativePath(newFolderPath);
    await fse.copy(folderPath, newFolderPath);
}

export async function copyToRunFolder(folderPath: string) {
    await fse.copy(getRelativePath(folderPath), joinPath(process.cwd(), getFolderNameByPath(folderPath)));
}

export async function checkIfFolderExistsOnRun(folderPath: string): Promise<boolean> {
    if(await fse.pathExists(joinPath(process.cwd(), getFolderNameByPath(folderPath)))) {
        return true;
    }   
    return false;
}

export async function recursiveGetAllFiles(folderPath: string): Promise<string[]> {
    const files: string[] = [];
    const filesAndFolders = await fse.readdir(getRelativePath(folderPath));
    for (const fileOrFolderName of filesAndFolders) {
        const fileOrFolderPath = path.join(folderPath, fileOrFolderName);
        if ((await fse.lstat(getRelativePath(fileOrFolderPath))).isDirectory()) {
            files.push(...(await recursiveGetAllFiles(fileOrFolderPath)));
        } else {
            files.push(fileOrFolderPath);
        }
    }
    return files;
}

export async function readFile(filePath: string): Promise<TextFile> {
    filePath = getRelativePath(filePath);
    const fileName = path.basename(filePath);
    try {
        const data = await fse.readFile(filePath, "utf-8");
        return new TextFile(fileName, data);
    } catch (e) {
        throw new Error(`Cannot read file ${fileName} \n ${e}`);
    }
}

export async function deleteFile(filePath: string) {
    filePath = getRelativePath(filePath);
    await fse.remove(filePath);
}

export async function emptyFolder(folderPath: string) {
    folderPath = getRelativePath(folderPath);
    await fse.emptyDir(folderPath);
}

export async function saveFile(folderPath: string, file: TextFile) {
    folderPath = getRelativePath(folderPath);
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
