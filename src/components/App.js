import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import Nav from './Nav';
import Splash from './Splash';
import Admin from './Admin';

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
      ],
      siteContentVisible: false
    }
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
    this.handlePintSale = this.handlePintSale.bind(this);
    this.handleGrowlerSale = this.handleGrowlerSale.bind(this);
    this.handleRemovingTap = this.handleRemovingTap.bind(this);
    this.handleUpdatingTap = this.handleUpdatingTap.bind(this);
    this.handleShowSiteContent = this.handleShowSiteContent.bind(this);
  }

  handleShowSiteContent() {
    this.setState({
      siteContentVisible: true
    })
    this.props.history.push('/taplist');
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

  handleRemovingTap(id) {
    let newMasterTapList = this.state.masterTapList.slice();
    let tapListLength = newMasterTapList.length;
    for (let i = 0; i < tapListLength; i++) {
      if (newMasterTapList[i].id === id) {
        newMasterTapList.splice(i, 1);
      }
    }
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  handleUpdatingTap(updatedTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    let tapListLength = newMasterTapList.length;
    for (let i = 0; i < tapListLength; i++) {
      if (newMasterTapList[i].id === updatedTap.id) {
        newMasterTapList[i] = updatedTap;
      }
      this.setState({
        masterTapList: newMasterTapList
      })
    }
  }

  render() {
    let currentView = null;
    if (this.state.siteContentVisible) {
      currentView = <div>
                      <Nav />
                      <Switch>
                      <Route 
                        path='/taplist' 
                        render={()=><TapList 
                          tapList={this.state.masterTapList} 
                          onPintSale={this.handlePintSale}
                          onGrowlerSale={this.handleGrowlerSale}
                          onTapRemoval={this.handleRemovingTap} 
                          onTapUpdate={this.handleUpdatingTap}
                        />} 
                      />
                      <Route 
                        path='/newtap' 
                        render={()=><NewTapForm 
                          onNewTapCreation={this.handleAddingNewTap} 
                        />} 
                      />
                      <Route 
                        path='/admin' 
                        render={()=><Admin
                          tapList={this.state.masterTapList} 
                          onPintSale={this.handlePintSale}
                          onGrowlerSale={this.handleGrowlerSale}
                          onTapRemoval={this.handleRemovingTap} 
                          onTapUpdate={this.handleUpdatingTap} 
                          currentRouterPath={this.props.location.pathname}
                        />}
                      />
                    </Switch>
                    </div>
    } else {
      currentView = <Splash onShowSiteContent={this.handleShowSiteContent}/>
    }

    return (
      <div>
        {currentView}
      </div>
    );
  }
}

export default withRouter(App);

