import logo from './logo.svg';
import './App.css';

import { Fragment } from 'react';
//API import
import NewsAPI from "./components/NewsAPI";
import {
  BestStoryQty
} from "./utils/NewsUtils";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container ms id="all">
      <div className="App">
        <header className="App-header">
          <label>Programming frontend test</label>
          <p>
            Components generated to use NewsHacker API information
            <ul>
              <li><code>components/NewsAPI ( MAIN: getting stories )</code></li>
              <li><code>components/StoryItem ( displaying stories )</code></li>
              <li><code>utils/NewsUtils ( managing API information )</code></li>
              <li><code>config/config ( API url information )</code></li>
            </ul> 
          </p>
        </header>
        <Fragment>
          <NewsAPI
              stories={[]}
            />
        </Fragment>
      </div>
    </Container>
  );
}

export default App;
