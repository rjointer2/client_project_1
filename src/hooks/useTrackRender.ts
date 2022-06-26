
import { useEffect, useRef } from "react";

const useTrackRender = () => {

    
const ref = useRef(0)

    useEffect(() => {

        ref.current = ref.current + 1
        console.log( ref.current )
    
    }, [])
}

export default useTrackRender