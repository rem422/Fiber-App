import styled from 'styled-components'
import Logo from '../Logo/Logo'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <FooterSection>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_info">
                    <Logo />
                    <p className="footer_info-text">
                        With Fiber, you can setup your own personal portfolio in minutes with dozen of premade, beautiful templates.
                    </p>
                    <p className="developer">Developed by <Link to='/'>Rem Simiyu</Link></p>
                </div>
                <ul className="footer_links">
                    <h4 className="footer_links-title">Sitemap</h4>
                    <li className="footer_link">
                        <Link to='hero'>Homepage</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='features'>Features</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='pricing'>Pricing</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='community'>Community</Link>
                    </li>
                </ul>
                <ul className="footer_links">
                    <h4 className="footer_links-title">Resources</h4>
                    <li className="footer_link">
                        <Link to='/'>Support</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Contact</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>FAQ</Link>
                    </li>
                </ul>
                <ul className="footer_links">
                    <h4 className="footer_links-title">Company</h4>
                    <li className="footer_link">
                        <Link to='/'>About</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Customers</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Blog</Link>
                    </li>
                </ul>
                <ul className="footer_links">
                    <h4 className="footer_links-title">Portfolios</h4>
                    <li className="footer_link">
                        <Link to='community'>Sarah Andrew</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='community'>Mathew Higgis</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='community'>Janice Dave</Link>
                    </li>
                </ul>
            </div>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer `
    background: var(--heroBg);
    padding: 5rem 0;

    .footer_wrapper {
        display: grid;
        grid-template-columns: repeat(5, auto);
        align-items: flex-start;
    }

    .footer_wrapper .footer_info {
        max-width: 400px;
        margin-right: 3rem;
    }

    .footer_wrapper .footer_info .footer_info-text {
        margin-top: 1rem;
    }

    .footer_wrapper .footer_info .developer {
        margin-top: 3rem;

        a {
            color: var(--btnColor);
            font-weight: 700;
            text-decoration: underline;
            transition: var(--transition);
            &:hover {
                text-decoration: none;
            }
        }
    }

    .footer_wrapper .footer_links .footer_link {
        color: var(--textColor);
        margin-top: 1rem;
        transition: var(--transition);
    }

    .footer_wrapper .footer_links .footer_link:hover {
        color: var(--btnColor);
    }

@media only screen and (max-width:1280px) {
    .footer_wrapper {
        grid-template-columns: repeat(4, auto);
        grid-gap: 3rem;
    }
}

@media only screen and (max-width:960px) {
    .footer_wrapper .footer_info {
        max-width: 450px;
        margin-right: 2rem;
    }

    .footer_wrapper {
        grid-template-columns: repeat(3, auto);
        grid-gap: 3rem;
    }
}

@media only screen and (max-width:560px) {
    .footer_wrapper .footer_info {
        max-width: 100%;
        margin-right: 0;
    }

    .footer_wrapper .footer_info .developer {
        margin-top: 1rem;
    }

    .footer_wrapper {
        grid-template-columns: 100%;
        grid-gap: 3rem;
    }
}
`

export default Footer