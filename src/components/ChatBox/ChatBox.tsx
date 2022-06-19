

import React, { useEffect, useState } from 'react'

import { ListGroup } from 'react-bootstrap'

import { useSocket } from '../../hooks/useSocket';

import styles from './ChatBox.module.css'

export default function ChatBox() {

    const socket = useSocket()

    const [ messages, setMessages ] = useState<any[]>([]);

    useEffect(() => {
        socket.on('CHAT', ( res: any ) => {
            setMessages( p => [ ...p, res ])
        })
    }, [])

    return (
        <div className={styles.container}>
            <ListGroup className={styles.scrollMessages} >
                { messages.map(( value: any, index: number ) => {
                    return <ListGroup.Item key={index} className="">
                        <div className={styles.wrapText}>
                        { `${Object.keys(value)[0]} said: ${Object.values(value)[0]}` }
                        </div>
                    </ListGroup.Item>
                }) }
            </ListGroup>
        </div>
    )
}
