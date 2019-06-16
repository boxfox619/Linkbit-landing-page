import React from 'react';
import { mainLinkbitImg, linkbitIcon, lightbulbIcon, atomIcon, securtyIcon, appleIcon, playstoreIcon, linkbitStory1, linkbitStory2, linkbitStory3 } from 'assets';
import { Title } from 'components/Label';
import { Container, StoryGroup, Section, LogoImage, MainImg, InfoSection, InfoMarginCard, CardTitle, Content, DownloadButton, SubTitle, StoryContent, StorySection, StoryTitle, StoryTextGroup } from './styles';
import { PRIMARY_COLOR } from 'util/const';

const Home: React.FC = () => {
    return (
        <Container>
            <Section>
                <LogoImage src={linkbitIcon} />
                <MainImg src={mainLinkbitImg} />
            </Section>
            <Section style={{ backgroundColor: PRIMARY_COLOR }}>
                <Title style={{ color: 'white' }}>Features</Title>
                <InfoSection>
                    <InfoMarginCard>
                        <img src={lightbulbIcon} alt="easy" />
                        <div>
                            <CardTitle>Simple</CardTitle>
                            <Content>
                                ETH as well as various passwords can be managed as a Linkbit.
                                Linkbit Simplifies Complex and Difficult Procedures
                            </Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={atomIcon} alt="custom address" />
                        <div>
                            <CardTitle>Custom Address</CardTitle>
                            <Content>
                                Complex and difficult wallet addresses have made mistakes and many problems.
                                Linkbit solves this problem with Custom Address
                            </Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={securtyIcon} alt="securty" />
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
            <Section>
                <StorySection>
                    <Title style={{ marginBottom: '0px' }}>암호화폐 간편송금 솔루션</Title>
                    <SubTitle>복잡하고 어려운 암호화폐 송금, Linkbit이 혁신합니다</SubTitle>
                    <StoryGroup>
                        <img src={linkbitStory1} alt="complex address" />
                        <StoryTextGroup>
                            <StoryTitle>복잡하고 어려운 지갑 주소를 혁신합니다</StoryTitle>
                            <StoryContent>
                                복잡하고 외우기 어려운 주소는 암호화폐를 어렵게 느끼게 만드는 큰 요소입니다<br/>
                                Linkbit은 지갑 주소를 원하는 주소로 매핑함으로써 이를 해결합니다 <br/>
                                원하는 지갑 주소를 도메인을 구입하는것 처럼 등록하고 사용할 수 있습니다
                            </StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                    <StoryGroup>
                        <img src={linkbitStory2} alt="multiple wallet" />
                        <StoryTextGroup>
                            <StoryTitle>다양한 암호화폐를 한손에 관리합니다</StoryTitle>
                            <StoryContent>
                                암호화폐의 종류는 수백, 수천가지에 달합니다<br/>
                                수 많은 암호화폐를 따로 관리할 필요 없이 Linkbit 하나로 관리할 수 있습니다
                            </StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                    <StoryGroup>
                        <img src={linkbitStory3} alt="cross withdraw" />
                        <StoryTextGroup>
                            <StoryTitle>수많은 암호화폐간의 호환성을 혁신합니다</StoryTitle>
                            <StoryContent>
                                암호화폐는 목적과 사용처에 따라 다양한 종류를 사용해야 합니다<br/>
                                Linkbit은 교차송금을 통해 서로 다른 코인간의 호환성을 높이고 코인간 교환 방법을 혁신합니다<br/>
                            </StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                </StorySection>
            </Section>
            <Section style={{ backgroundColor: PRIMARY_COLOR }}>
                <Title style={{ color: 'white' }}>Download LINKBIT</Title>
                <div style={{ display: 'flex' }}>
                    <DownloadButton>
                        <img src={appleIcon} alt="app store" />
                        APP STORE
                    </DownloadButton>
                    <DownloadButton>
                        <img src={playstoreIcon} alt="play store" />
                        PLAY STORE
                    </DownloadButton>
                </div>
            </Section>
        </Container>
    )
}

export default Home;