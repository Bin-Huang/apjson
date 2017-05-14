const Apjson = require("../index");
json.append({id: "one"});
json.append({id: "two"});
json.append({id: "three"});
json.close();




otherAppend("myFile.json", {id: "one"});
otherAppend("myFile.json", {id: "two"});
otherAppend("myFile.json", {id: "three"});

