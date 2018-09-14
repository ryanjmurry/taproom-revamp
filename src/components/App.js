import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import TapList from './TapList';

class App extends React.Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={TapList} />
          <Route path='/newkeg' component={NewKegForm} />
        </Switch>

      </div>
    );
  }
}

export default App;
