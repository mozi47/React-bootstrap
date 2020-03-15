import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import { reviews } from '../../data';
import styled from "styled-components";
import Reviews from "../Reviews";

export class Detail extends Component {
    render() {
        
        return (
            <InfoConsumer>
                {data=>{
                    const{
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        title,
                        description,
                        maps,
                        img
                    }=data.detailInfo;
                    return (
                        <React.Fragment>
                            <HeaderDetail className="container-fluid text-center">
                                        <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                        <h4 className="display-4">{headerSubTitle}</h4>
                                        <p className="lead">{headerText}</p>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <i className="fab fa-facebook-f"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-reddit"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-google-plus-g"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-github"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                    </div>
                                </div>
                                </HeaderDetail>
                                <div className="container">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a href="#place" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#map" className="nav-link" role="tab" data-toggle="tab">Map</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content mb-5">
                                        <div id="place" className="tab-pane in active text-center mt-5" role="tabpanel">
                                            <h2 className="py-2">{title}</h2>
                                            <p className="py-2">{description}</p>
                                            <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                                        </div>
                                        <div id="reviews" className="tab-pane" role="tabpanel">
                                           <Reviews/>
                                        </div>
                                        <div id="map" className="tab-pane py-3" role="tabpanel">
                                            <iframe src={maps} style={{ border:'0', height:'28.125rem', width:'100%'}} frameBorder="0"></iframe>
                                        </div>
                                    </div>
                                </div>
                        </React.Fragment>
                    )
                }}
            </InfoConsumer>
        )
    }
}

export default Detail

const HeaderDetail=styled.header`
    background: linear-gradient(rgba(109,109,109),rgba(255,255,255));
    height:100vh;
    text-transformation:uppercase;
    color: var(--mainWhite);
    h1 {
        padding-top: 6%;
        color: var(--mainDark);
    }

    h4 {
        color: var(--mainDark);
    }

    p{
        padding-left: 10%;
        padding-right: 10%;
        margin-top:2%;
        margin-bottom: 7%;
        color: var(--mainDark);
    }

    i {
        font-size: 1.875rem;
        color: var(--mainDark);
    }

    i:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }

    .nav-item {
        height: 18.75rem;
    }

    @media (max-width: 760px) {
        h1,
        h4 {
        color: var(--mainWhite);
        }
    }
`