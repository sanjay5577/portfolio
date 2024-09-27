import React , {useState}from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "919f9c96-d630-42c0-a5e9-7102a384e91b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message.</p>
            <div className='contact-details'>
              <div className='contact-detail'>
                 <img src={mail_icon} alt=''/> <p>sanjaybms17@gmail.com</p>
              </div>
              <div className='contact-detail'>
              <img src={call_icon} alt=''/> <p>+91 9742551012</p>
              </div>
              <div className='contact-detail'>
              <img src={location_icon} alt=''/> <p>Bengaluru, India</p>
              </div>

            </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
               <label htmlFor='name'>Your Name</label>
               <input type='text' placeholder='Enter your name' name='name'required/>

               <label htmlFor='name'>Your Email</label>
               <input type='email' placeholder='Enter your email' name='email' required/>

               <label htmlFor='name'>Write your message here</label>
               <textarea name='message'  rows={8} placeholder='Enter your message' required></textarea>

               <button  type='submit' className='contact-submit'>Submit now</button>

               <span>{result}</span>
        </form>
        
        </div>
        

    </div>
  )
}

export default Contact