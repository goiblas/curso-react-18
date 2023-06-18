import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

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

const Button = styled("button", { shouldForwardProp: prop => prop !== "color" })`
  padding: 32px;
  background-color: ${props => props.color};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`


function App() {

  return (
  <Container as="section" direction="column">
    <Button color='red' data-id="ad">
        Hover to change color.
      </Button>

    <Button color='red'>
        Hover to change color.
      </Button>
  </Container>
  )
}

export default App
