import React, { Component } from 'react';
import logo from './fa-icon-ethereum.svg';
import uploadimg from './upload.svg';
import './App.css';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <h1 id="title"><span>Deploy.eth</span></h1>
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <div id="mainContent">
                        <div id="upload-div" className="row">
                            <div className="col-sm-12" id="file-upload">
                                <label htmlFor="input">
                                    <img src={uploadimg}/>
                                </label>
                                <input id="input" type="file" accept=".sol"/>
                            </div>

                        </div>
                        <div id="contract-name" className="row">
                            <div className="col-sm-12">
                                Contract name:
                                <input id="name" type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default App;

