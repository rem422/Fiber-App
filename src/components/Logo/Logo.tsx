import { Link } from 'react-scroll'
import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoComponent>
        <Link to='home'>Fiber</Link>
    </LogoComponent>
  )
}

const LogoComponent = styled.div`
    a {
        font-size: 1.5rem;
        font-weight: 700;
    }
`

export default Logo