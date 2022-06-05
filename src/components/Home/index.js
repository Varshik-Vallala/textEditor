import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Container,
  SubContainer,
  Heading,
  Image,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  ButtonContainer,
  TextArea,
  ListItem,
} from './styledComponents'

class Home extends Component {
  state = {
    bold: false,
    italic: false,
    underLine: false,
    input: '',
  }

  applyBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  applyItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  applyUnderLine = () => {
    this.setState(prevState => ({
      underLine: !prevState.underLine,
    }))
  }

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {bold, italic, underLine, input} = this.state

    // console.log(bold, input)

    return (
      <Container>
        <SubContainer>
          <div>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <ButtonContainer>
              <ListItem>
                <BoldButton
                  data-testid="bold"
                  onClick={this.applyBold}
                  bold={bold}
                >
                  <VscBold />
                </BoldButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.applyItalic}
                  italic={italic}
                >
                  <GoItalic />
                </ItalicButton>
              </ListItem>
              <ListItem>
                <UnderLineButton
                  onClick={this.applyUnderLine}
                  underLine={underLine}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </UnderLineButton>
              </ListItem>
            </ButtonContainer>
            <TextArea
              rows="20"
              cols="50"
              onChange={this.changeInput}
              value={input}
              bold={bold}
              italic={italic}
              underLine={underLine}
            />
          </div>
        </SubContainer>
      </Container>
    )
  }
}

export default Home
