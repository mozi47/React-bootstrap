import React, { Component } from 'react'
import ReviewCards from './ReviewCards'
import {InfoConsumer} from "./Context";

class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
            {data=>{
                return data.reviews.map(person=>{
                    return <ReviewCards key={person.id} person={person}/>
                })
            }}
            </InfoConsumer>
        )
    }
}

export default Reviews
