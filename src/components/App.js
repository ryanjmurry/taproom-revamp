import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [
        {
          name: 'Lagunitas IPA',
          brewery: 'Lagunitas',
          style: 'Indian Pale Ale',
          abv: '5.0',
          pintPrice: 6,
          growlerPrice: 16,
          description: 'Tasty as shit',
          pintsRemaining: 124,
          id: 'dlsfjsdlkjflksdjflksdjflk'
        }
      ]
    }
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
    this.handlePintSale = this.handlePintSale.bind(this);
    this.handleGrowlerSale = this.handleGrowlerSale.bind(this);
  }

  handleAddingNewTap(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  handlePintSale(id) {
    let newMasterTapList = this.state.masterTapList.slice();
    let tapListLength = newMasterTapList.length;
    for (let i = 0; i < tapListLength; i++) {
      if (newMasterTapList[i].id === id) {
        newMasterTapList[i].pintsRemaining--;
      }
    }
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  handleGrowlerSale(id) {
    let newMasterTapList = this.state.masterTapList.slice();
    let tapListLength = newMasterTapList.length;
    for (let i = 0; i < tapListLength; i++) {
      if (newMasterTapList[i].id === id) {
        newMasterTapList[i].pintsRemaining -= 4;
      }
    }
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  render() {
    console.log(this.state.masterTapList.length)
    return (
      <div >
        <Nav />
        <Switch>
          <Route exact path='/taplist' render={()=>
            <TapList 
              tapList={this.state.masterTapList} 
              onPintSale={this.handlePintSale}
              onGrowlerSale={this.handleGrowlerSale}
            />} 
          />
          <Route path='/newtap' render={()=><NewTapForm onNewTapCreation={this.handleAddingNewTap} />} />
        </Switch>

      </div>
    );
  }
}

export default App;

