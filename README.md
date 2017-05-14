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

## new Apjson(path, [space])
**path** `string` 
**space** `number` *default: 2* 

## Apjson.prototype.append(item)
**item** `object`
append stringified object

## Apjson.prototype.close()
when you are not adding more, close the writable stream.