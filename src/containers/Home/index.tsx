import React from 'react';
import styled from 'styled-components';
import { mainLinkbitImg, linkbitIcon, lightbulbIcon, atomIcon, securtyIcon } from 'assets';
import { InfoCard } from 'components/Card';
import { Title } from 'components/Label';

const Container = styled.div`
`
const MainImg = styled.img`
    width: 20%;
    margin-bottom: -13%;
    z-index: -1;
    min-width: 300px;
    @media (max-width: 980px) {
        width: 50%;
        margin-bottom: -23%;
        min-width: 0px;
    }
`
const LogoImage = styled.img`
    width: 40%;
    max-width: 300px
`
const Section = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
const CardTitle = styled.div`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
`
const Content = styled.div`
    font-size: 0.8em;
`
const InfoSection = styled(Section)`
    flex-flow: row;
    @media (max-width: 980px) {
        flex-flow: column;
    }
`
const InfoMarginCard = styled(InfoCard)`
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
const Home: React.FC = () => {
    return (
        <Container>
            <Section>
                <LogoImage src={linkbitIcon} />
                <MainImg src={mainLinkbitImg} />
            </Section>
            <Section style={{ backgroundColor: '#594343', padding: '20px' }}>
                <Title style={{ color: 'white' }}>Features</Title>
                <InfoSection>
                    <InfoMarginCard>
                        <img src={lightbulbIcon} />
                        <div>
                            <CardTitle>Simple</CardTitle>
                            <Content>
                                ETH as well as various passwords can be managed as a Linkbit.
                                Linkbit Simplifies Complex and Difficult Procedures
                            </Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={atomIcon} />
                        <div>
                            <CardTitle>Custom Address</CardTitle>
                            <Content>
                                Complex and difficult wallet addresses have made mistakes and many problems.
                                Linkbit solves this problem with Custom Address
                            </Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={securtyIcon} />
                        <div>
                            <CardTitle>Security</CardTitle>
                            <Content>
                                All private keys and information are encrypted and stored on the device and never sent to the server
                                Additionally, enhances security with FaceID, TouchID
                            </Content>
                        </div>
                    </InfoMarginCard>
                </InfoSection>
            </Section>
        </Container>
    )
}

export default Home;