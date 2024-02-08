import React from 'react'
import Card from './card'
import CardText from './CardText'

export const Main = () => {
    return (
        // Card Container
        <div className="flex sm:flex-nowrap flex-wrap">
        {/* Card */}
        <Card/>
        {/* Card Text */}
        <CardText/>
        </div>
    )
}
