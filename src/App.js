// import logo from './logo.svg';
import './App.css';
import StocksData from './components/StocksData'
import Header from './components/Header';
import Main from './components/Main';
// import {withRouter} from 'react-router';

function App(props) {
  return (
    <div>
      <h1>Hello</h1>
      <Header />
      <Main stocksData={StocksData} />
    </div>
  );
}

export default App;
