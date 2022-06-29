"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCache = void 0;
const react_1 = require("react");
const useCache = () => {
    const [state, setState] = (0, react_1.useState)(0);
    /* cache.writeQuery({
        data: data,
        query: ME
    })

    const me = cache.readQuery({
        query: ME
    })

    console.log(me) */
    return { setState, state };
};
exports.useCache = useCache;
/*     const { data, loading, error } = useQuery<UserSchema>(ME);
   

    const [ obj, setUser ] = useState<(undefined); */ 
