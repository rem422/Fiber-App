import FeaturesCard from "./FeaturesCard"
import time from '../../assets/time.svg'
import code from '../../assets/code.svg'
import responsive from '../../assets/allSizes.svg'
import styled from "styled-components"

const Features = () => {


  return (
    <FeaturesSection id="features">
        <div className="container">
                <h3 className="features_subtitle">Why Fiber?</h3>
                <h1 className="features_title">A good portfolio means a good employability.</h1>
            <div className="cards_wrapper">
                <FeaturesCard
                    img = {time}
                    title = 'Build in minutes'
                    text = 'With a selection of premade templates, you can build out a portfolio in less than 10 minutes.'
                />
                <FeaturesCard
                    img = {code}
                    title = 'Add custom CSS'
                    text = 'Customize your personal portfolio even more with the ability to add your own custom CSS styles.'
                />
                <FeaturesCard
                    img = {responsive}
                    title = 'Responsive'
                    text = 'All Fiber templates are fully responsive to ensure the experience is seemless across all devices.'
                />
            </div>
        </div>
    </FeaturesSection>
  )
}

const FeaturesSection = styled.section `
    .features_subtitle {
        color: var(--btnColor);
        margin-bottom: 1.3rem;
    }

    .features_title {
        font-size: 2.5rem;
        max-width: 800px;
        margin-bottom: 4rem;
    }

    .cards_wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
    }

@media only screen and (max-width:960px) {
    .cards_wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width:500px) {
    .features_title {
        font-size: 2rem;
    }
    
    .cards_wrapper {
        grid-template-columns: 100%;
    }
}
`

export default Features