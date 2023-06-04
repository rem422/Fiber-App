import styled from "styled-components"

interface Props {
    img : string,
    userName : string,
    userEarnings : string,
    cardText : string
    text : string
}

const CommunityCard = ({img, userName, userEarnings, cardText, text} : Props) => {
  return (
    <Card>
        <div className="card_info">
            <div className="user_info">
                <div className="user_img">
                    <img src={img} alt="avatar" />
                </div>
                <div className="user_details">
                    <h4 className="user_name">{userName}</h4>
                    <p className="user_earning">{userEarnings}</p>
                </div>
            </div>
            <p className="card_text">{cardText}</p>
            <button className="card_btn">{text}</ button>
        </div>
    </Card>
  )
}

const Card = styled.div`
border: 1px solid var(--textColor);
border-radius: 5px;
max-width: 400px;
margin: auto;
padding: 2rem;

    .card_info .user_info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .card_info .user_info .user_img {
        max-width: 50px;
    }

    .card_info .user_info .user_details .user_name {
        color: var(--btnColor);
    }

    .card_info .card_text {
        margin-bottom: 1rem;
    }
    .card_info .card_btn {
        background: transparent;
        border: 1px solid var(--textColor);
        border-radius: 5px;
        width: 100%;
        padding: .8rem 1rem;
        font-size: 1rem;
        font-weight: 700;
        color: var(--btnColor);
        transition: var(--transition);

        &:hover {
            background: var(--btnColor);
            color: var(--white);
            border-color: var(--btnColor);
        }
    }

    @media only screen and (max-width:768px) {
        max-width: 100%;
    }
`

export default CommunityCard