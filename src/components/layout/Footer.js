import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foooter className="main-footer">
            <div className="footer-middle py-4 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>Muzakir Shah</li>
                                <li>mozi47.shah@gmail.com</li>
                                <li>03xx-xxxxxxx</li>
                                <li>Peshawar, Pakistan</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem Ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem Ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem Ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                                <li><a href="/">Lorem ipusm</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="container text-center pt-3">
                        Copyright &copy;{new Date().getFullYear()} - All Right Reserved
                    </div>

                </div>
            </div>
        </Foooter>
    )
}

export default Footer;

const Foooter=styled.footer`
    .footer-middle {
        background:var(--mainDark);
    }

    ul li{
        color:var(--mainLightGrey);
    }

    li a{
        text-decoration: none;
        color:var(--mainGrey);
    }

    li a:hover{
        color: var(--mainLightGrey);
    }
`;