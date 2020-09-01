import React from 'react';
import NaveBar from './components/Navebar/NaveBar';
import Cards from './components/Cards/Cards'
import Chart from './components/Charts/Chart'

import { fatchData } from './Api/Api'
import Footer from './components/footer/Footer'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fatchedData = await fatchData();
    this.setState({ data: fatchedData })
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fatchData(country);
    this.setState({ data: fatchedData, country: country });

  }

  render() {
    const { data, country } = this.state;
    return (
      <div className="conatiner">

        < NaveBar handleCountryChange={this.handleCountryChange} />


        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exict path="/cases">
              <Cards data={data} />
              <Chart data={data} country={country} />
            </Route>

            <Redirect to="/"/>
          
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

