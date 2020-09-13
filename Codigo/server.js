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

const todos = [
    {
        id: "1",
        value: "Teste 1",
    },
    {
        id: "2",
        value: "Teste 2",
    }
];

function put(call, callback) {
    const Item = {
        "id": todos.length + 1,
        "value": call.request.value
    }
    todos.push(Item)
    callback(null, Item);
}

function getKey(call, callback) {
    let result = todos.find(
        n => n.id == call.request.id);
    if (result) {
        callback(null, result);
    }
    else {
        callback({ code: grpc.status.NOT_FOUND, details: "Not found!" });
    }
}

function getAllKeysStream(call, callback) {
    todos.forEach(t => call.write(t));
    call.end();
}


function getAllKeys(call, callback) {
    callback(null, { "items": todos })
}

