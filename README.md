# why?
![why](https://github.com/Ben-Hwang/apjson/blob/master/img/why.png)

# how to use?
```javascript
const Apjson = require("../index");
const jsonFile = new Apjson("example.json");

jsonFile.append({title: "hello, world"});

jsonFile.append({
    title: "test1",
    time: "20:49",
});

jsonFile.close();
```
