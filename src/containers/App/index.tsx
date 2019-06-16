import React from 'react';
import Header from '../../components/Header';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import HomeContainer from '../Home';
import { PREFIX } from 'util/const';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const App: React.FC = () => {
  return (
    <Provider>
      <AppContainer>
        <Router>
          <Header />
          <div style={{ flex: 1, marginTop: '60px' }}>
            <Route path={`${PREFIX}`} component={HomeContainer} />
          </div>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
