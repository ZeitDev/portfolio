import { RellaxWrapper } from 'react-rellax-wrapper'
import { gitHubLink, linkedInLink } from '../../Content/variable'
import 'react-toastify/dist/ReactToastify.css';
import shape2 from '../../Images/shape2.png'
import './contact.scss'


const ContactSection = () => {
  return (
    <section id='contact' className='contact_section'>
      <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape img_shape_4' src={shape2} alt='shape 3' /></RellaxWrapper>
      <div className='content_col'>
        <RellaxWrapper speed={0} zIndex={0}>
          <div>
            <h1 className='heading'>CONTACT</h1>
            <p className='para'>Feel free to connect with me :)</p>
            <p><br></br></p>
            <p className='para'>Email: contact@leonzeitler.com</p>
          </div>
          <div className='social_icons'>
            <a href="mailto:contact@leonzeitler.com" target="_blank" rel="noreferrer"><i class="fas fa-envelope-square"></i></a>
            <a href={linkedInLink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
          </div>
        </RellaxWrapper>
      </div>
    </section>
  )
}

export default ContactSection