

import React, { useEffect, useState } from 'react'

import { ListGroup } from 'react-bootstrap'

import { $$sendChat, useSocket } from '../../hooks/useSocket';

import styles from './ChatBox.module.css'

export default function ChatBox() {

    const socket = useSocket()

    const [ messages, setMessages ] = useState<any[]>([]);

    useEffect(() => {
        socket.on($$sendChat, ( res: any ) => {
            setMessages( p => [ ...p, res ])
        });
    }, [])

    console.log(messages)

    return (
        <div className={styles.container}>
            <ListGroup className={styles.scrollMessages} >
                { messages.map(( message: any, index: number ) => {
                    return <ListGroup.Item key={index} className="">
                        <div className={styles.wrapText}>
                            { `${Object.keys(message)[0]} said: ${Object.values(message)[0]}` }
                        </div>
                    </ListGroup.Item>
                }) }
            </ListGroup>
        </div>
    )
}
