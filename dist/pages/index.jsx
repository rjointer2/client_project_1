"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const userQuery_1 = require("../@apollo_client/querys/userQuery");
const socket = (0, socket_io_client_1.default)('http://localhost:1212');
const Home = () => {
    const { data } = (0, client_1.useQuery)(userQuery_1.me);
    console.log("test", data);
    return (<div>
      Home Page
    </div>);
};
exports.default = Home;
/*

const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [ clis, setClis ] = useState<client>({})
  const [ id, setId ] = useState('')
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);




  useControllerHook( clis, id, socket, setClis );
  useCanvas( canvasRef, setCtx, socket, setId, setClis, ctx, clis, id );

  return <div>

    hello
    <canvas ref={canvasRef} width="640"
      height="480"
      style={{ border: "1px solid black" }}
    ></canvas>
    <br/>
    
  </div>
*/ 
