import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    }
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
  }

  handleAddingNewTap(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  render() {
    return (
      <div >
        <Nav />
        <Switch>
          <Route exact path='/' render={()=><TapList tapList={this.state.masterTapList} />} />
          <Route path='/newtap' render={()=><NewTapForm onNewTapCreation={this.handleAddingNewTap} />} />
        </Switch>

      </div>
    );
  }
}

export default App;
