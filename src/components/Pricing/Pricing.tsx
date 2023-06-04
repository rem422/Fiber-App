import Button from "../Button/Button"
import PageImg from '../../assets/Page Image.png'
import styled from "styled-components"

const Pricing = () => {
  return (
    <PricingSection id="pricing">
        <div className="container">
            <div className="pricing_wrapper">
                <div className="pricing_info">
                    <h2 className="pricing_title">Diversify your portfolio.</h2>
                    <p className="pricing_text">Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.</p>
                    <Button className="secondary" text="Start Free Trial" />
                </div>
                <div className="pricing_img">
                    <img src={PageImg} alt="img" />
                </div>
            </div>
        </div>
    </PricingSection>
  )
}

const PricingSection = styled.section `
    .pricing_wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        grid-gap: 0rem;
        background-color: var(--btnColor);
        padding: 2rem;
        border-radius: 15px;
    }

    .pricing_wrapper .pricing_info .pricing_title{
        color: white;
        font-size: 2.5rem;
        margin-bottom: 1.2rem;
    }

    .pricing_wrapper .pricing_info .pricing_text{
        color: white;
        max-width: 400px;
        margin-bottom: 1.5rem;
    }

    .pricing_wrapper .pricing_img{
        position: relative;
        top: 38px;
    }

@media only screen and (max-width:960px) {
    .pricing_wrapper {
        grid-template-columns: 100%;
        grid-gap: 0rem;
        padding: 2rem;
    }
}

@media only screen and (max-width:500px) {
    .pricing_wrapper .pricing_info .pricing_title{
        font-size: 2rem;
    }
}
`

export default Pricing