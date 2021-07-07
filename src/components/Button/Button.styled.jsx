import styled from "@emotion/styled/macro";

export const VoteButton = styled.button`
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  background: radial-gradient(#fff, #cacaca);
  border: none;
  border-radius: 5px;

  font-size: 1.4rem;
  
  &:not(:last-child){
    margin-right: 10px;
  }
  &:nth-of-type(1):hover{
    background: radial-gradient(#beffdb, #cacaca);
  }
  &:nth-of-type(2):hover{
    background: radial-gradient(#f3ffbe, #cacaca);
  }
  &:nth-of-type(3):hover{
    background: radial-gradient(#ffbebe, #cacaca);
  }
  &:active{
    transform: scale(0.95);
  }
  
  & svg {
    margin-right: 10px;
    
    &:checked{
      color: green;
    }
  }
  `