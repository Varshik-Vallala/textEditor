import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  height: 100vh;
  //   padding: 70px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubContainer = styled.div`
  background-color: #1b1c22;
  font-family: 'Roboto';
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const Image = styled.img`
  height: 250px;
`

export const Heading = styled.h1`
  color: #fff;
`

export const BoldButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: ${props => (props.bold ? '#faff00' : ' #ffffff')};
`

export const ItalicButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: ${props => (props.italic ? '#faff00' : ' #ffffff')};
`

export const UnderLineButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: ${props => (props.underLine ? '#faff00' : ' #ffffff')};
`

export const ButtonContainer = styled.div`
  background: #25262c;
  border: 1px solid #334155;
  border-radius: 2px;
`
export const TextArea = styled.textarea`
  background: #25262c;
  border: 1px solid #334155;
  border-radius: 2px;
  outline: none;
  color: #fff;
  padding: 4px;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : null)};
  font-style: ${props => (props.italic ? 'italic' : null)};
  text-decoration: ${props => (props.underLine ? 'underline' : null)};
`
