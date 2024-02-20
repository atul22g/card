import React, {useEffect} from 'react'
import Card from './card'
import CardText from './Details'
import Modal from './Modals/Modal'

export const Main = () => {
    useEffect(() => {
        document.title = 'Create a  New Card';
    }, [])
    
    return (
        // Card Container
        <div className='absolute w-full h-full card_con'>
        {/* Card */}
        <Card/>
        {/* Card Text */}
        <CardText/>
        {/* Modal */}
        <Modal/>
        </div>
    )
}
