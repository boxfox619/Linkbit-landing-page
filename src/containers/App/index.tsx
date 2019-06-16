import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import HomeContainer from '../Home';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const App: React.FC = () => {
  return (
    <Provider>
      <AppContainer>
        <Router>
          <div style={{ flex: 1, marginTop: '60px' }}>
            <Route path={`/*`} component={HomeContainer} />
          </div>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
