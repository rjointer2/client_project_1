
import React from 'react'

import useCanvas from '../../hooks/useCanvas'

// styles


export default function Canvas() {

    useCanvas()

    console.log(document)

    return (
        <canvas style={{
            height: '800px',
            width: '800px',
            backgroundColor: '#808080'
        }}/>
    )
}
