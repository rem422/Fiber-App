import styled from "styled-components"
import star from '../../assets/star.svg'
import Checkmark from '../../assets/Checkmark.svg'
import HeroImg from '../../assets/hero-Illustration.png'
import Button from "../Button/Button"


const Hero = () => {

  return (
    <HeroSection id="hero">
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_info">
                    <div className="hero_info-rating">
                        <div className="rating_stars">
                            <div className="star">
                                <img src={star} alt="star" />
                            </div>
                            <div className="star">
                                <img src={star} alt="star" />
                            </div>
                            <div className="star">
                                <img src={star} alt="star" />
                            </div>
                            <div className="star">
                                <img src={star} alt="star" />
                            </div>
                            <div className="star">
                                <img src={star} alt="star" />
                            </div>
                        </div>
                        <p className="rating_info">Rated 4.8/5 (243 Reviews)</p>
                    </div>
                    <h1 className="hero_title">Create your portfolio in minutes.</h1>
                    <p className="hero_text">With Fiber, you can setup your own personal portfolio in minutes with dozen of premade, beautiful templates.</p>
                    <div className="hero_btns">
                        <Button className="primary" text="Start Free Trial" />
                        <Button className="herobtn" text="View Examples" />
                    </div>
                    <div className="hero_trials">
                        <p className="hero_trial">No Credit Card Required</p>
                        <p className="hero_trial">10 Free Templates</p>
                    </div>
                </div>
                <div className="hero_img">
                    <img src={HeroImg} alt="heroImage" />
                </div>
            </div>
        </div>
    </HeroSection>
  )
}

const HeroSection = styled.header `
background: var(--heroBg);

.hero_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.hero_info .hero_info-rating {
    display: flex;
    margin-bottom: 1rem;
}

.hero_info .hero_info-rating .rating_stars {
    padding-right: 1rem;
}

.hero_info .hero_info-rating .rating_stars .star {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 20px;
    margin: 0 .2rem;
}

.hero_info .hero_title {
    font-size: 3rem;
    max-width: 530px;
}

.hero_info .hero_text {
    max-width: 530px;
    margin-bottom: 1.5rem;
}

.hero_info .hero_btns {
    margin-bottom: 1.5rem;

.herobtn {
    margin-left: 1.8rem;
    background: none;
    color: var(--btnColor);
    text-decoration: underline;
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    background: none;
    transition: var(--transition);
    &:hover {
        text-decoration: none;
    }
}
}

.hero_info .hero_trials {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
}

.hero_info .hero_trials .hero_trial {
    margin: 0 1.5rem;
    position: relative;
    /* width: 100%; */
}

.hero_info .hero_trials .hero_trial::before {
    position: absolute;
    content: "";
    top: 0;
    right: 35px;
    width: 100%;
    height: 100%;
    background: url(${Checkmark});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
}

.hero_wrapper .hero_img{
    max-width: 700px;
}

@media only screen and (max-width: 1280px) {
.hero_info .hero_title {
    font-size: 2rem;
}

.hero_info .hero_trials {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0;
}

.hero_info .hero_trials .hero_trial {
    margin: .5rem 1.7rem;
    position: relative;
}
}

@media only screen and (max-width: 960px) {
.hero_wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: column-reverse;
}
}

@media only screen and (max-width: 500px) {
.hero_info .hero_info-rating {
    display: none;
}

.hero_info .hero_title {
    font-size: 1.5rem;
    max-width: 100%;
}

.hero_info .hero_text {
    max-width: 100%;
    margin-bottom: 1.5rem;
}

.hero_info .hero_btns {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

.herobtn {
    margin: 1.4rem 0 0 0;
}
}
}
`

export default Hero