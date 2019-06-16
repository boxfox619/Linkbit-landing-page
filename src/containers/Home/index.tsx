import React from 'react';
import { mainLinkbitImg, lightbulbIcon, atomIcon, securtyIcon, appleIcon, playstoreIcon, linkbitStory1, linkbitStory2, linkbitStory3 } from 'assets';
import { Title } from 'components/Label';
import { Container, StoryGroup, Section, MainImg, InfoSection, InfoMarginCard, CardTitle, Content, DownloadButton, SubTitle, StoryContent, StorySection, StoryTitle, StoryTextGroup, FooterSection } from './styles';
import { PRIMARY_COLOR } from 'util/const';
import LocaleStore from 'store/LocaleStore';
import { inject, observer } from 'mobx-react';

interface Props {
    localeStore?: LocaleStore
}

const Home: React.FC<Props> = inject('localeStore')(observer(({localeStore}) => {
    const i18n = (localeStore as LocaleStore).i18n
    return (
        <Container>
            <Section>
                <MainImg src={mainLinkbitImg} />
            </Section>
            <Section style={{ backgroundColor: PRIMARY_COLOR }}>
                <Title style={{ color: 'white' }}>Features</Title>
                <InfoSection>
                    <InfoMarginCard>
                        <img src={lightbulbIcon} alt="easy" />
                        <div>
                            <CardTitle>{i18n.feature_title_1}</CardTitle>
                            <Content>{i18n.feature_content_1}</Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={atomIcon} alt="custom address" />
                        <div>
                            <CardTitle>{i18n.feature_title_2}</CardTitle>
                            <Content>{i18n.feature_content_2}</Content>
                        </div>
                    </InfoMarginCard>
                    <InfoMarginCard>
                        <img src={securtyIcon} alt="securty" />
                        <div>
                            <CardTitle>{i18n.feature_title_3}</CardTitle>
                            <Content>{i18n.feature_content_3}</Content>
                        </div>
                    </InfoMarginCard>
                </InfoSection>
            </Section>
            <Section>
                <StorySection>
                    <Title style={{ marginBottom: '0px' }}>{i18n.story_title}</Title>
                    <SubTitle>{i18n.story_sub_title}</SubTitle>
                    <StoryGroup>
                        <img src={linkbitStory1} alt="complex address" />
                        <StoryTextGroup>
                            <StoryTitle>{i18n.story_content_title_1}</StoryTitle>
                            <StoryContent>{i18n.story_content_1}</StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                    <StoryGroup>
                        <img src={linkbitStory2} alt="multiple wallet" />
                        <StoryTextGroup>
                            <StoryTitle>{i18n.story_content_title_2}</StoryTitle>
                            <StoryContent>{i18n.story_content_2}</StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                    <StoryGroup>
                        <img src={linkbitStory3} alt="cross withdraw" />
                        <StoryTextGroup>
                            <StoryTitle>{i18n.story_content_title_3}</StoryTitle>
                            <StoryContent>{i18n.story_content_3}</StoryContent>
                        </StoryTextGroup>
                    </StoryGroup>
                </StorySection>
            </Section>
            <Section style={{ backgroundColor: PRIMARY_COLOR, padding: '100px 0'}}>
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
            <FooterSection>
                <div style={{flex: 1}}>
                    <Title>LINKBIT</Title>
                    © 2019 Linkbit Organization.
                    All rights reserved.
                </div>
                <div>
                    <Title>CONTACT US</Title>
                    <a href="https://www.facebook.com/linkbitkorea">https://www.facebook.com/linkbitkorea</a><br/>
                    <a href="https://twitter.com/Linkbit1">https://twitter.com/Linkbit1</a>
                </div>
            </FooterSection>
        </Container>
    )
}));

export default Home;