"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
// components
const FindOrCreateRoom_1 = __importDefault(require("../components/FindOrCreateRoom/FindOrCreateRoom"));
const Home = () => {
    return (<div>
      <Navbar_1.default />
      <FindOrCreateRoom_1.default />
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
