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
  color: ${props => (props.bold ? '#faff00' : ' #f1f5f9')};
`

export const ItalicButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: ${props => (props.italic ? '#faff00' : ' #f1f5f9')};
`

export const UnderLineButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: ${props => (props.underLine ? '#faff00' : ' #f1f5f9')};
`

export const ButtonContainer = styled.ul`
  background: #25262c;
  border: 1px solid #334155;
  border-radius: 2px;
  list-style-type: none;
  padding: 0;
  display: flex;
`

export const ListItem = styled.li``
export const TextArea = styled.textarea`
  background: #25262c;
  border: 1px solid #334155;
  border-radius: 2px;
  outline: none;
  color: #fff;
  padding: 4px;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
`
