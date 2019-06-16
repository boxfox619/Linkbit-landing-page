import React from 'react';
import { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { HeaderContainer, Logo, RightMenu, LightMenu, HeavyMenu } from './styles';
import { PREFIX } from 'util/const';
import { linkbitIcon } from 'assets';


type Props = RouteComponentProps;

const Header: React.FC<Props> = ({ history }) => {
    const home = useCallback(() => history.push(`${PREFIX}/home`), [history]);
    const search = useCallback(() => history.push(`${PREFIX}/search`), [history]);
    const status = useCallback(() => history.push(`${PREFIX}/status`), [history]);
    return (
        <HeaderContainer>
            <Logo src={linkbitIcon} onClick={home} />
            <RightMenu>
                <LightMenu onClick={search}>탐색</LightMenu>
                <LightMenu onClick={status}>현황</LightMenu>
                <HeavyMenu>메세지</HeavyMenu>
                <HeavyMenu>알림</HeavyMenu>
                <HeavyMenu>기업서비스</HeavyMenu>
            </RightMenu>
        </HeaderContainer>
    )
};

export default withRouter(Header);