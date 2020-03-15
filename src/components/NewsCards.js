import React, { Component } from 'react'
import { InfoConsumer } from './Context'
import { Link } from 'react-router-dom'

class NewsCards extends Component {
    render() {
        const{id,newsText,newsTitle}=this.props.news
        return (
            <InfoConsumer>
            {data=>(
                <div className="container">
                    <div className="card my-3">
                        <div className="card-body">
                            <h4 className="card-title">{newsTitle}</h4>
                            <p className="card-text">{newsText}</p>
                            <Link to="/" className="card-link">Read More >></Link>
                        </div>
                    </div>
                </div>
            )}
            </InfoConsumer>
        )
    }
}

export default NewsCards
