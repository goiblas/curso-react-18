import styled from '@emotion/styled'

const Button = styled("button")`
  padding: 32px;
  background-color: ${props => props.theme.primary};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease-in-out;
  border: none;
  &:hover {
    box-shadow: 0 3px 24px rgba(0, 0, 0, 0.5);
  }
`

export default Button;