import styled from 'styled-components';


export const DropdownWrapper = styled.div`
position: relative;
`
export const ToggleButton = styled.button`
display: inline-flex;
justify-content: space-between;
align-items: center;
padding: 13px 20px 13px 16px;
min-height: 50px;
width: 100%;
border-radius: 30px;
border: 1px solid ${({ theme }) => theme.text};
background-color: transparent ;
color: ${({ theme }) => theme.text};
text-transform: capitalize;

@media (min-width: 768px) {
width: 160px;
  }

  @media (min-width: 1280px) {
max-width: 182px;
  }
`
export const ToggleIcon = styled.svg`
  width: 18px;
  height: 9px;
`

export const DropdownOptions = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;

background-color: rgba(255, 255, 255, 0.7);
box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(50px);
z-index: 1000;
border-radius: 5px;
`
export const OptionButton = styled.button`
display: block;
min-height: 44px;
padding-top: 9px;
padding-bottom: 9px;
border: none; 


font-size: 18px;
font-weight: 400;
line-height: 1.5em;
text-align: left;
background-color: transparent;
text-transform: capitalize;
`