export default class Apjson {
    private stream;
    private space;
    private closeSign;
    private first;
    constructor(path: string, space?: number);
    append(data: any): void;
    close(): void;
}
