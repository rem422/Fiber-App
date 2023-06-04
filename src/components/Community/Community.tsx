import styled from 'styled-components'
import CommunityCard from './CommunityCard'
import avatar1 from '../../assets/User Avatar.svg'
import avatar2 from '../../assets/User Avatar 2.svg'
import avatar3 from '../../assets/User Avatar 3.svg'

const Community = () => {
  return (
    <CommunitySection id='community'>
        <div className="container">
            <div className="community_cards">
                <CommunityCard 
                    img= {avatar1}
                    userName='Sarah Andrew'
                    userEarnings='$100k in revenue'
                    cardText='Setting up my portfolio with Fiber took not more than 10 minutes. Since then my portfolio has attracted a lot of clients and made me more than $100k.'
                    text= "View Sarah's Portfolio"
                />
                <CommunityCard 
                    img= {avatar2}
                    userName='Mathew Higgis'
                    userEarnings='$20k in revenue'
                    cardText= "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!"
                    text= "View Mathew's Portfolio"
                />
                <CommunityCard 
                    img= {avatar3}
                    userName='Janice Dave'
                    userEarnings='$30k in revenue'
                    cardText='I only started freelancing this year and I have already made more than I ever made in my full-time job. This templates are so amazing.'
                    text= "View Janice's Portfolio"
                />
            </div>
        </div>
    </CommunitySection>
  )
}

const CommunitySection = styled.section`
    .community_cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

@media only screen and (max-width:960px) {
    .community_cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width:768px) {
    .community_cards {
        grid-template-columns: 100%;
    }
}
`

export default Community