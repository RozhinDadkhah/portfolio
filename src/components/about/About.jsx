import React from 'react'
import './About.css'
import award from '../../img/award.png'

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className='a-img' src="https://images.pexels.com/photos/1738636/pexels-photo-1738636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is along established fact
                </p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo soluta ea. Blanditiis nostrum unde, sunt aspernatur qui corporis vel repellendus iusto quibusdam rem. Voluptatum odio fugit voluptates provident quas.</p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design</h4>
                        <p className="a-award-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
