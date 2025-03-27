import './footer.scss'
import { NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p><NavLink to="/legalnotice" activeClassName="LegalNotice">Legal Notice</NavLink></p>
            <p><NavLink to="/privacypolicy" activeClassName="PrivacyPolicy">Privacy Policy</NavLink></p>
            <p><br></br></p>
            <p>Designed and built by <a href={"https://www.linkedin.com/in/tanisha-bisht/"} target="_blank" rel="noreferrer">Tanisha Bisht</a>, modified by Léon Zeitler</p>
        </footer>
    )
}

export default Footer