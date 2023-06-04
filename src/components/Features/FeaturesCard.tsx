import styled from "styled-components"

interface Props {
    img : string,
    title : string,
    text : string
}

const FeaturesCard = ({img, title, text}: Props) => {
  return (
    <FeatureCard>
        <div className="card_wrapper">
            <div className="card_icon">
                <img src={img} alt="icon" />
            </div>
            <h3 className="card_title">{title}</h3>
            <p className="card_text">{text}</p>
        </div>
    </FeatureCard>
  )
}

const FeatureCard = styled.div`
    max-width: 330px;
    width: 100%;

    .card_wrapper .card_icon {
        max-width: 35px;
        margin-bottom: 1rem;
    }

    .card_wrapper .card_title {
        margin-bottom: 1rem;
    }


`

export default FeaturesCard