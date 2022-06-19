"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// react
const react_1 = __importStar(require("react"));
// styles
const react_bootstrap_1 = require("react-bootstrap");
// components
const FindOrCreateRoom_1 = __importDefault(require("../FindOrCreateRoom/FindOrCreateRoom"));
function HomeComponent() {
    const [select, setSelect] = (0, react_1.useState)(true);
    return (<div>
      
      <div>
        <react_bootstrap_1.Button>
          Find Room
        </react_bootstrap_1.Button>
        <react_bootstrap_1.Button active={true}>
          Create Room
        </react_bootstrap_1.Button>
      </div>


      {select ? <FindOrCreateRoom_1.default setSelect={setSelect}/> : null}
    </div>);
}
exports.default = HomeComponent;
/*



  Home
  _________

  Title

  Paragrapgh

  Form to create new room

    Form gives room a name and redirect clients to new page of the room

    New Gane Page

    Game cannot start until there are 2 clients in the game queue

    Chat Component
    Client Component to see the clients connect <- use can select client can


  Find Game

  __________

  get a list of rooms created
  and click on room to redirect to that room



  Game Room
  _____________

  gameroom/y82r29328r87230 <= example

  allow the 2 client enabled to play and the audience to view and chat



  View Ranking
  ___________________


  should allow user to see all users and the rankings they have



  View Wiki

  ____________________

  WHat the game is ex => objective, inspiration
  Controls
  ABilities
  About Developer


  Footer

  __________________

  github, about developer, twitter, email



*/
/*
<Button
                onClick={() => {
                  if(socket === null) return;
                  socket.emit('test', localState.roomName)
    
                }}
              variant="primary"  style={{ display: 'flex', justifyContent: 'center' }} >
                  Send Room Message
              </Button>

              <br/> <br/>
              <Button
                onClick={() => {
                  if(socket === null) return
                 socket?.emit('joinRoom', localState.scoreLimit)
                }}
              variant="primary"  style={{ display: 'flex', justifyContent: 'center' }} >
                  Join Romm
              </Button>
              <br/>
              <br/>

*/ 
