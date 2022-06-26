
import React, { useEffect, useState } from 'react'

import { $$updatePlayerQueue, $$updateRooms, useSocket } from '../../hooks/useSocket'

export default function PlayerQueue() {

    const socket = useSocket();

    useEffect(() => {
        socket.on($$updatePlayerQueue, () => {
        })
    }, [])

    const players = ["a", "d", "c"]

  return (
    <div>
        { players.sort(( a, b ) => b > a ? -1 : 1 ).map(( player, index ) => {
            return <div key={index}>
                { player }
            </div>
        }) }
    </div>
  )
}
