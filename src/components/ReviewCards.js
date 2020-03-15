import React, { Component } from 'react'
import { InfoConsumer } from './Context'

class ReviewCards extends Component {
    render() {
        const{
            id,
            avatar,
            name,
            comment
        }=this.props.person
        return (
            <div>
                <InfoConsumer>
                    {data=>(
                    <div className="card p-3 my-2">
                        <div className="media">
                                <img src={avatar} alt={name} style={{width:'40px'}} className="img-fluid mr-3"/>
                            <div className="media-body">
                                <h5>{name}</h5>
                                <hr/>
                                <p>{comment}</p>
                            </div>
                        </div>
                    </div>                        
                    )}
                </InfoConsumer>
            </div>
        )
    }
}

export default ReviewCards
