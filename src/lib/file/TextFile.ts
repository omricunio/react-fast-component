export default class TextFile {
    name: string;
    data: string;

    constructor(name: string, data: string) {
        this.name = name;
        this.data = data;
    }

    replaceText(originalText: string, newText: string, changeFileName: boolean = false) {
        this.data = this.data.replace(RegExp(originalText, "g"), newText);
        if (changeFileName) {
            this.name = this.name.replace(RegExp(originalText, "g"), newText);
        }
    }
}
