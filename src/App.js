import React, { Component } from 'react';

import Layout from './components/Layout/Layout.component';
import BurgerBuilderContainer from './containers/BurgerBuilder/BurgerBuilder.container';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <BurgerBuilderContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
