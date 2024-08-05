import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>GemAI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                <div className="greet">
                    <p><span>Hello, Om!</span></p>
                    <p>How can I help You?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest some beautiful places in Pune for a weekend trek</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>What exactly is Blockchain?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Which is the largest NFT Marketplace?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>C++ code for Singly linked list</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type='text' placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                            Gemini may be inaccurate about its info. Not everytime, but sometimes...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;