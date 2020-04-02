import path from "path";

export function getRelativePath(pathFromRoot: string): string {
    const rootPath = path.resolve(__dirname, "../../../");
    const fullPath = path.join(rootPath, pathFromRoot);
    return fullPath;
}