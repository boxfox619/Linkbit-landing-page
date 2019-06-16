import styled from 'styled-components';
import { InfoCard } from 'components/Card';
import { PRIMARY_COLOR } from 'util/const';
import { Title } from 'components/Label';
export const Container = styled.div`
    & * {
        color: ${PRIMARY_COLOR};
    }
`
export const MainImg = styled.img`
    width: 20%;
    z-index: -1;
    min-width: 300px;
    max-width: 400px;
    @media (max-width: 980px) {
        width: 50%;
        min-width: 0px;
    }
`
export const LogoImage = styled.img`
    width: 150px;
    max-width: 300px;
`
export const Section = styled.section`
    display: flex;
    padding: 30px 0;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
export const CardTitle = styled.div`
    color: ${PRIMARY_COLOR};
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
`
export const Content = styled.div`
    font-size: 0.8em;
`
export const InfoSection = styled(Section)`
    flex-flow: row;
    @media (max-width: 980px) {
        flex-flow: column;
    }
`
export const InfoMarginCard = styled(InfoCard)`
    display: flex;
    margin: 20px;
    max-width: 400px;
    height: calc( 100% - 60px );
    align-items: center;
    & > img {
        height: 50px;
        margin-right: 20px;
    }
    @media (max-width: 1400px) {
        width: 265px;
    }
    @media (max-width: 980px) {
        width: 70%;
        max-width: 100%;
    }
`
export const StorySection = styled.div`
    max-width: 1300px;
    width: 90%;
`
export const StoryTitle = styled(Title)`
    @media(max-width: 1400px) {
        font-size: 1.5em;
    }
    @media(max-width: 680px) {
        font-size: 1.3em;
        margin-bottom: 5px;
    }
`
export const StoryContent = styled(Title)`
    font-size: 1.2em;
    white-space: pre-line;
    @media(max-width: 1400px) {
        font-size: 1em;
    }
    @media(max-width: 680px) {
        font-size: 0.6em;
    }
`
export const SubTitle = styled.div`
    font-size: 0.9em;
    margin-bottom: 13px;
`
export const StoryGroup = styled.div`
    position: relative;
    display: flex;
    margin-top: 30px;
    & > img {
        border-radius: 4px;
        height: 300px;
        margin-right: 20px;
        @media(max-width: 1200px) {
            height: 250px;
        }
        @media(max-width: 980px) {
            margin-right: 0;
            margin-bottom: 8px;
        }
    }
    @media(max-width: 980px) {
        flex-flow: column;
    }
`
export const StoryTextGroup = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    flex: 1;
`
export const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    outline: none;
    padding: 10px;
    margin: 5px 15px;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1em;
    transition-duration: 0.3s;
    & > img {
        margin-right: 5px;
    }
    &:hover { 
        background-color: #F1F1F2;
    }
`
export const FooterSection = styled(Section)`
    flex-flow: row;
    background-color: black;
    padding-left: 10%;
    padding-right: 10%;
    align-items: flex-start;
    & * {
        color: #E9EBEE;
    }
    & ${Title} {
        font-size: 1.5em;
        color: white;
    }
    & > * {
        margin: 0 20px;
    }
    @media(max-width: 980px) {
        flex-flow: column;
        & > * {
            margin-bottom: 30px;
        }
    }
`