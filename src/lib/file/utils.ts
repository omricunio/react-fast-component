import path from "path";

export function getRelativePath(pathFromRoot: string): string {
    const newPath = path.resolve(__dirname, `../../../${pathFromRoot}`);
    return newPath;
}
