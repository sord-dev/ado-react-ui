import React from 'react'
import styles from '../styles.module.css'

export function AttachmentsList({ attachments = [] }) {
    return (
        <section>
            <h2>Attachments</h2>
            {attachments.length > 0 ? (
                <div>
                    {attachments.map(attachment => (
                        <a key={attachment.id
                        } href={attachment.url + `?fileName=${attachment.name}`} target="_blank" rel="noopener noreferrer">{attachment.name}</a>
                    ))}
                </div>
            ) : (
                <p>No attachments</p>
            )
            }
        </section>
    )
}

const defaultTicketsData = [
    {
        type: 'ServiceNow',
        id: 'INC12345'
    }
]

export function TicketsList({ tickets = defaultTicketsData }) {
    return (
        <section>
            <h2>Linked Tickets</h2>
            <div>
                {tickets.length > 0 && tickets.map(ticket => (
                    <div className={styles.ticket}>
                        <div>
                            <h4>{ticket.type}</h4>
                            <p>{ticket.id}</p>
                        </div>
                        <button>View</button>
                    </div>
                ))}
            </div>
        </section>
    )
}