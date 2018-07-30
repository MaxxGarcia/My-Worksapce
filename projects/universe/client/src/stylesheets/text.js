import styled, { keyframes } from "styled-components";


const slideIn = keyframes`
    from {
        bottom: -300px; opacity: 0;
    } 
    to {
        bottom: 0; opacity: 1;
    }
`
const fadeIn = keyframes`
    from {opacity: 0} 
    to {opacity: 1}
`

export const Button = styled.button`
    border-radius: 50%;
    font-size: 15px!important;
    padding: 0px 5px;
    border: none;
    cursor: pointer;
    background-color: lightgray;
    color: #ed008c;

    &:hover {
        background-color: white;
        text-decoration: none;
        cursor: pointer;
    }
`
export const UniverseButton = styled.button`
    border-radius: 32px;
    font-size: 17px!important;
    padding: 0px 5px;
    border: none;
    vertical-align: middle;
    tex-decoration: none;
    text-align: center;
    cursor: pointer;
    background-color: lightgray;
    color: #ed008c;

    &:hover {
        background-color: white;
        text-decoration: none;
        cursor: pointer;
    }
`
export const ModalButton = styled.button`
  border-radius: 32px;
  font-size: 17px!important;
  padding: 0px 5px;
  border: none;
  vertical-align: middle;
  tex-decoration: none;
  text-align: center;
  cursor: pointer;
  background-color: lightgray;
  color: #ed008c;
  &:hover {
    background-color: white;
    text-decoration: none;
    cursor: pointer;
}
`

export const VanishingUl = styled.ul`
    display: ${props => props.show ? 'block' : "none"};
    width: 500px;
    border: solid white medium;
    border-right: none
    margin-right: 20px;
    margin-bottom: 10px;
`
export const UniverseName = styled.div`
    color: white;
    text-shadow: -2px 0 black, 0 1px black, 1px 0 black, 0 1px black;
    display: inline;
    font-size: 35px;
`

export const Modal = styled.div`
    display: ${props => props.show ? 'block' : "none"}
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    animation-name: ${fadeIn};
    animation-duration: 0.4s
`

export const ModalContent = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #fefefe;
    width: 100%;
    animation: ${slideIn} 0.4s;
`

export const Close = styled.div`
    color: black;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover {
          color: red;
          text-decoration: none;
          cursor: pointer;
      }
    
    &:focus {
      color: red;
      text-decoration: none;
      cursor: pointer;
    }
`

export const ModalHeader = styled.div`
    padding: 2px 16px;
    background-color: #ed008c;
    color: white;
`

export const ModalBody = styled.div`
padding: 2px 16px;
`

export const ModalFooter = styled.div`
    padding: 2px 16px;
    background-color: #ed008c;
    color: white;
`
export const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 2em
`
export const StyledInput = styled.input`
    font-size: .5em;
    width: 300px
`
export const StyledTextArea = styled.textarea`
    font-size: .5em;
`

export const NavBar = styled.ul`
    font-size: 2em;
    display: flex;
    justify-content: space-between;
    background-color: whitesmoke;
    margin: 0;
    padding: 15px 5px;
    color: #ed008c;
`
export const Description = styled.div`
    font-size: 30px;
`

export const FooterBar = styled.div`
    font-size: 30px;
    text-align: center;
    background-color: whitesmoke;
    color: #ed008c;
    position: fixed;
    bottom: 5px
    right: 5px
    left: 5px
    margin: 0px;
`
export const NodeWrapper = styled.div`
    margin-top: 20px;
    margin-left: 50px;
`
