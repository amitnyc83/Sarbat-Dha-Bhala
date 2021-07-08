import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>What We Do?</span>
                            <h2>We Are On Mission To Help Spread Peace & Prosperity In The World</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row-mission">
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Clean Water</h2>
                                    <p>.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Civil Rights</h2>
                                    <p>We are deeply concerned for the safety and welfare of the Indian Farmers who are fighting the 3 black farm bills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Medical</h2>
                                    <p>Sarbat Dha Bhala is helping hospitals who are facing essential medical supplies shortages to fight Covid-19.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Basic Necessarities</h2>
                                    <p>We provide basic necessarities to individuals to protect the lives of underprivileged.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;