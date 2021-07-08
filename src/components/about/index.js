import React from 'react'
import img1 from '../../images/SarbatDhaBhala2.jpeg'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>What We Do?</span>
                                <h2>We Are In A Mission To Help The Helpless</h2>
                            </div>
                            <p>Whilst the inspiration for the charity stems from a strong belief in the Sikh principles, our work is by no means restricted to the Sikh community. Sarbat Dha Bhala is a New York-based non-profit charity organisation providing support to people in need who don't have anyone else to turn to.</p>
                            <p>Sarbat Dha Bhala was originally founded by Deep Gujjar, Gagandeep Singh and Amarjit Ghotra who wanted to help the Indian farmers protesting for their rights against the 3 farm bills forced upon them and so Sarbat Dha Bhala was born.</p>
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;