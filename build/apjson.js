"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Apjson {
    constructor(path, space = 2) {
        this.stream = fs.createWriteStream(path);
        this.space = "";
        while (space > 0) {
            space--;
            this.space += " ";
        }
        this.stream.write("[");
        this.closeSign = false;
        this.first = true;
    }
    append(data) {
        let newStr = JSON.stringify(data, null, this.space + this.space);
        if (this.first) {
            this.first = false;
            newStr = "\n" + newStr;
        }
        else {
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
    close() {
        this.closeSign = true;
    }
}
exports.default = Apjson;
