
import { useCallback, useEffect, useState } from "react"

const useCanvas = () => {

    useEffect(() => {

        
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        console.log(canvas)
        canvas.style.height = '800px';
        canvas.style.width = '800px';
        canvas.style.background = '#808080';



    }, [])


}


export default useCanvas