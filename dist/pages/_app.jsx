"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// apollo client 
const client_1 = require("@apollo/client");
const client_2 = __importDefault(require("../@apollo_client/configs/client"));
// styles
require("../styles/index.css");
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
const useSocket_1 = require("../hooks/useSocket");
function MyApp({ Component, pageProps }) {
    return <react_bootstrap_1.SSRProvider>
  <useSocket_1.SocketContext.Provider value={useSocket_1.io}>
    <client_1.ApolloProvider client={client_2.default}>
      <Component {...pageProps}/>
    </client_1.ApolloProvider>
  </useSocket_1.SocketContext.Provider>
    </react_bootstrap_1.SSRProvider>;
}
exports.default = MyApp;
