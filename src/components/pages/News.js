import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import NewsCards from '../NewsCards'

class News extends Component {
    render() {
        return (
            <InfoConsumer>
                { data=>{
                    return data.news.map(news=>{
                        return <NewsCards key={news.id} news={news}/>
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default News