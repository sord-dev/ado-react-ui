import React, { useState } from 'react'
import styles from '../styles.module.css'

export function AttachmentsList({ attachments = [] }) {
    return (
        <section>
            <h2>Attachments</h2>
                <div className={styles.attachmentsList}>
                    {attachments?.length ? attachments.map(attachment => <Attachment {...{ attachment }} />) : null}
                </div>
        </section>
    )
}

const Attachment = ({ attachment }) => {
    const attachmentSize = (size) => {
        if (size > 1000000) {
            return `${(size / 1000000).toFixed(2)}mb`
        } else if (size > 1000) {
            return `${(size / 1000).toFixed(2)}kb`
        } else {
            return `${size}b`
        }
    }


    return (
        <div className={styles.attachment} key={`${attachment.name}-key`}>
            <div>
                <h4>{attachment.name}</h4>
                <p>{attachmentSize(attachment.size)}</p>
            </div>

            <a href={attachment.url + `?fileName=${attachment.name}`} target="_blank" rel="noopener noreferrer">
                <button>Download</button>
            </a>
        </div>
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
                    <div key={`${ticket.type}-${ticket.id}`} className={styles.ticket}>
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

export function DetailsGrid({ children }) {
    return (
        <section className={styles['task-details']}>
            {children}
        </section>
    )
}

export function Detail({ label, value }) {
    return (
        <span>
            {label}: <p>{value}</p>
        </span>
    )
}


export const QuickActionGrid = ({ children }) => {
    return (
        <div className={styles["quick-action-grid"]}>
            {children}
        </div>
    );
};

export const QuickAction = ({ action, label, info }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}>
           
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => action()} type='button'>
                    {label}
                </button>

                {info && (<>
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={styles['info-icon']}>
                        <p>?</p>
                    </div>

                    {isHovered && <div className={styles.info}>{info}</div>}
                </>)}
            </div>
        </div>
    );
};