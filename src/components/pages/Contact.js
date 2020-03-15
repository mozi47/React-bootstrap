import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Contact extends Component {
    render() {
        return (
                <section className="my-5 py-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-7">
                                <div className="well well-sm ">
                                    <h3><strong>Our Location</strong></h3>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="well well-sm ">
                                    <h3><strong>Contact us</strong></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 text-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d26457.061992202747!2d71.49507744570775!3d34.01480330940795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d34.014322299999996!2d71.544804!4m5!1s0x38d916cdc967f91d%3A0xeceac377bd7cfbc1!2sUniversity%20of%20Agriculture%2C%20Peshawar!3m2!1d34.0205773!2d71.4814615!5e0!3m2!1sen!2s!4v1584277917714!5m2!1sen!2s" 
                                style={{width:"100%", height:"315px", frameborder:"0", 
                                        border:'0'}} allowfullscreen="" ></iframe>
                            </div>
                            <div className="col-md-5">
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Enter email" className="form-control"/>
                                    </div>
                                        <textarea placeholder="Message here" cols="30" rows="5" className="form-control"></textarea>
                                        <Link className="btn btn-outline-primary text-uppercase mt-3">
                                            <i className="fa fa-paper-plane-o"></i>&nbsp;Send
                                        </Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Contact
