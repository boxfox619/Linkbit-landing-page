import styled from 'styled-components';
export const HeaderContainer = styled.header`
padding: 12px 10%;
display: flex;
position: fixed;
width: 80%;
background: white;
z-index: 99;
`

export const Logo = styled.img`
height: 36px;
padding-right: 10px;
cursor: pointer;
`

export const RightMenu = styled.div`
position: absolute;
padding: 12px 0;
top: 0;
right: 15px;
height: calc(100% - 24px);
align-items: center;
display: flex;
& > * {
    margin-right: 40px;
}
`

export const LightMenu = styled.div`
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
text-align: left;
color: #000000;
cursor: pointer;
`

export const HeavyMenu = styled(LightMenu)`
font-weight: bold;
`

