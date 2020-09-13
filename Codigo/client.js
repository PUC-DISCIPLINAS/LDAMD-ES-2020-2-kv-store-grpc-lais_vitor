const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("kvs.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const kvsPackage = grpcObject.kvsPackage;

const comando = process.argv[2];
const valor = process.argv[3];

const client = new kvsPackage.Todo("localhost:40000",
    grpc.credentials.createInsecure())


if (comando.startsWith("listarTodos")) {
    const call = client.getAllKeysStream();
    call.on("data", item => {
        console.log("Itens no servidor " + JSON.stringify(item))
    })

    call.on("end", e => console.log("acao finalizada!"))
}

if (comando.startsWith("listarUm")) {
    const call = client.getKey(valor);
    console.log(call);
}

if (comando.startsWith("adicionar")) {
    console.log(valor)
    client.put({
        "key": -1,
        "value": valor
    }, (err, response) => {
        console.log("Item recebido " + JSON.stringify(response))
    })
}
