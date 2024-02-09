import React from 'react'
import Card from './card'
import CardText from './Details'
import Modals from './Modals'

export const Main = () => {
    return (
        // Card Container
        <div className="flex flex-row">
        {/* Card */}
        <Card/>
        {/* Card Text */}
        <CardText/>
        {/*  */}
        {/* <Modals/> */}
        </div>
    )
}
