import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { useTheme } from './components/ThemeProvider'
import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'

const Container = styled("div", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "direction"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 400px;
  flex-direction: ${props => props.direction};
`

const Title = styled("h1")`
  font-size: 32px;
  margin-bottom: 25px;
  ${({ theme }) => theme.breakpoint.up('md')} {
    font-size: 48px;
  }
`

const Page = styled("div")`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  ${Button} {
    border-radius: 999px;
  }
`

function App() {
  const { toggleTheme, theme } = useTheme()

  return (
      <Page>
          <GlobalStyles />
          
          <Container as="section" direction="column">
            <Title>Theme</Title>

            <Button onClick={toggleTheme}>
                Toogle
            </Button>
          </Container>
      </Page>
  )
}

export default App
