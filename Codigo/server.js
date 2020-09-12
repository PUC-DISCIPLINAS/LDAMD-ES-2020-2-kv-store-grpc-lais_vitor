const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("kvs.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const kvsPackage = grpcObject.kvsPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:40000",
    grpc.ServerCredentials.createInsecure());

server.addService(kvsPackage.Todo.service,
    {
        "put": put,
        "getAllKeys": getAllKeys,
        "getAllKeysStream": getAllKeysStream,
        "getKey": getKey
    });

console.log("Servidor executando no enderaco http://0.0.0.0:40000");

server.start();

const todos = []
function put(call, callback) {
    const Item = {
        "key": todos.length + 1,
        "value": call.request.value
    }
    todos.push(Item)
    callback(null, Item);
}

function getKey(call, callback) {
    let result = todos.find(x => x.Item.key == call);
    if (result) {
        callback(null, result.Item);
    } 
}


function getAllKeysStream(call, callback) {
    todos.forEach(t => call.write(t));
    call.end();
}


function getAllKeys(call, callback) {
    callback(null, { "items": todos })
}

