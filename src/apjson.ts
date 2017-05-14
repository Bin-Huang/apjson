import * as fs from "fs";

export default class Apjson {
    private stream;
    private space: string;
    private closeSign: boolean;
    private first: boolean;

    constructor(path: string, space: number = 2) {
        this.stream = fs.createWriteStream(path);
        this.space = "";
        while (space > 0) {
            space --;
            this.space += " ";
        }
        this.stream.write("[");
        this.closeSign = false;
        this.first = true;
    }
    public append(data) {
        if (! this.closeSign) {
            throw new Error("Apjson WARN: can not append any more, because it has been closed.");
        }
        let newStr = JSON.stringify(data, null, this.space + this.space);
        if (this.first) {
            this.first = false;
            newStr = "\n" + newStr;
        } else {
            newStr = ",\n" + newStr;
        }

        newStr = newStr.replace(/\n/g, "\n" + this.space);

        this.stream.write(newStr, () => {
            if (this.closeSign) {
                this.stream.write("\n]");
                this.stream.close();
            }
        });
    }

    public close() {
        this.closeSign = true;
    }
}
