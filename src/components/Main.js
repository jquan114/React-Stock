import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stocks from './Stocks';
import StocksData from './StocksData';

function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route
                    path="/stocks/:symbol"
                    render={props => <Stocks stockData={StocksData} {...props} />}
                    />
                <Route
                    path="/stocks"
                    render={props => <Dashboard {...props} stockData={StocksData} />}
                    />
                
            </Switch>
        </main>
    )
}
export default Main;