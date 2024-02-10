import React from 'react'
import Card from './card'
import CardText from './Details'
import Personal from './Modals/Personal'

export const Main = () => {
    return (
        // Card Container
        <div className="flex flex-row">
        {/* Card */}
        <Card/>
        {/* Card Text */}
        <CardText/>
        {/*  */}
        <Personal/>
        </div>
    )
}
