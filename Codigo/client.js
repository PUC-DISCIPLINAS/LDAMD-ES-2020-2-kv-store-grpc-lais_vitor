const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("kvs.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const kvsPackage = grpcObject.kvsPackage;

const comando = process.argv[2];
const valor = process.argv[3];

const client = new kvsPackage.Todo("localhost:40000",
    grpc.credentials.createInsecure())

