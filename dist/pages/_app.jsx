"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// apollo client 
const client_1 = require("@apollo/client");
const client_2 = __importDefault(require("../@apollo_client/configs/client"));
const globalStateHook_1 = require("../hooks/globalStateHook");
// styles
require("../styles/index.css");
require("bootstrap/dist/css/bootstrap.min.css");
function MyApp({ Component, pageProps }) {
    return <client_1.ApolloProvider client={client_2.default}>
    <globalStateHook_1.GlobalState>
      <Component {...pageProps}/>
    </globalStateHook_1.GlobalState>
  </client_1.ApolloProvider>;
}
exports.default = MyApp;
