# why?
![why](https://raw.githubusercontent.com/Ben-Hwang/apjson/blob/master/img/why.png)

# install
```
npm install apjson
```

# how to use?
```javascript
const Apjson = require("apjson");
const jsonFile = new Apjson("example.json");

jsonFile.append({title: "hello, world"});

jsonFile.append({
    title: "test1",
    time: "20:49",
});

jsonFile.close();
```

## new Apjson(path, [space])
| parameter | type | default |
| -- | -- | -- |
| path | string | null |
| space | number | 2 |


## Apjson.prototype.append(item)
| parameter | type | 
| -- | -- |
| item | object |

append stringified object

## Apjson.prototype.close()
when you are not adding more, close the writable stream.