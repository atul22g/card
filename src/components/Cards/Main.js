import React from 'react'
import Card from './card'
import CardText from './Details'
import Modal from './Modals/Modal'

export const Main = () => {
    return (
        // Card Container
        <div className="flex flex-row">
        {/* Card */}
        <Card/>
        {/* Card Text */}
        <CardText/>
        {/* Modal */}
        <Modal/>
        </div>
    )
}
