import React from 'react';
import { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { HeaderContainer, Logo, LightMenu, RightMenu } from './styles';
import { linkbitIcon } from 'assets';
import LocaleStore from 'store/LocaleStore';
import { inject, observer } from 'mobx-react';

interface OwnProps {
    localeStore?: LocaleStore
}

type Props = OwnProps & RouteComponentProps;

const Header: React.FC<Props> = inject('localeStore')(observer(({ localeStore, history }) => {
    const home = useCallback(() => history.push(`/`), [history]);
    const locale = localeStore as LocaleStore;
    const setLocale = useCallback(() => locale.toggleLocale(), [locale]);
    return (
        <HeaderContainer>
            <Logo src={linkbitIcon} onClick={home} />
            <RightMenu>
                <LightMenu onClick={setLocale}>{locale.localeName}</LightMenu>
            </RightMenu>
        </HeaderContainer>
    )
}));

export default withRouter(Header);