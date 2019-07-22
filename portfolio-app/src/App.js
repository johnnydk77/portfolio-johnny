import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
// import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { NoMatch } from './Components/NoMatch';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';
import './index.css';



class App extends Component {



  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>

            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/about' component={About} /> */}
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
             
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
