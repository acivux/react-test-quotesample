import * as React from 'react';
import Quote from './components/Quote';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import QuoteModel from './models/QuoteModel'
import { ApprovedStatus, OnHoldStatus, WaitingStatus }  from './models/QuoteStatusModel';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {

    let quoteModelA = new QuoteModel(new Date());
    quoteModelA.summary = "Maintenance update 12377";
    quoteModelA.specialInstructions = "testing 123";
    quoteModelA.status = ApprovedStatus;

    let quoteModelB = new QuoteModel(new Date());
    quoteModelB.summary = "MPS2019";
    quoteModelB.specialInstructions = "Do this thing please";
    quoteModelB.status = OnHoldStatus;

    let quoteModelC = new QuoteModel(new Date());
    quoteModelC.summary = "MISCBAKER";
    quoteModelC.specialInstructions = "Informational quote only";
    quoteModelC.status = WaitingStatus;

    return (
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        </div>
      </div>
      <Quote quote={quoteModelA}/>
      <Quote quote={quoteModelB}/>
      <Quote quote={quoteModelC}/>
      </div>
    );
  }
}

export default App;
