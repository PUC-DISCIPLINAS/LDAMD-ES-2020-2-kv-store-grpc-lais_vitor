# Documentação do Projeto

Usá-se Protocol Buffers, pois é mais leve que Json e é em binário
HTTP2 para que possa ter mais de uma comunicação, fazendo com que mandemos vários dados (Multiplex)
Server Push
Headers são comprimidos

Através do HTTP2(que trafega mais rapidamento as informações),  tenho informações (através dos protocol buffers) e gRPC tem as APIS para fazer com que as informações sejam trafegadas

SERVER STREAMING ->> Cliente e Servidor, com Request e Response, mas o servidor pode mandar várias responses, pois mantém a conexão aberta.

CLIENT STREAMING ->> Cliente pode mandar várias informações na Request, o servidor sabe disso (que vai receber os dados em formato de streaming) e manda a response quando acaba

BI DIRECTIONAL STREAMING -> Ambos mandam request e response simnultaneamente, pode ser assincrono

DIFERENÇAS REST vs gRPC
  REST: Texto, JSON
        Unidirecional
        Alta latência
        Sem contrato (maior chance de erros)
        Desing pré-definido
        
 gRPC: Protocol Buffers (Arquivos binários)
       Bidirecional e Assincrono
       Baixa latência
       Contrato definido (.proto)
       Suporte a streaming
       Geração de código
