const Apjson = require("../index");
const jsonFile = new Apjson("example.json");

jsonFile.append({
    title: "test1",
    time: "20:49",
});

jsonFile.append({
    title: "test2",
    time: "2017",
});

(() => {
    jsonFile.append({
        title: "test3",
        time: "20:53",
        name: "ben",
    })
})();

jsonFile.close();