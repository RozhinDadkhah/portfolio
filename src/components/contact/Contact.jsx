import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'

const Contact = () => {

    const formRef = useRef()

    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_xa6yb05',
            'template_k2krgfs',
            formRef.current,
            'user_OCQkYNe8CnPmDzA62DI1x'
        )
            .then((result) => {
                console.log(result.text)
                setDone(true)
            }, (error) => {
                console.log(error.text)
            });

    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +9823568859
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            rozhindadkhah76@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            24 king street,touterie Victoria 856
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-des">
                        <b>What's your story?</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ea in tempora saepe placeat voluptate est, consectetur a cum fuga voluptates temporibus iusto earum? Adipisci animi ea earum neque fugiat!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: theme.state.darkMode && "#333" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: theme.state.darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: theme.state.darkMode && "#333" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: theme.state.darkMode && "#333" }} row='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && alert("Thank you...")}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
