import React, { Component } from 'react';

import './style/App.css';
import GetImageForm from './components/GetImageForm';
import GetImageButton from './components/GetImageButton';
import ImageDisplay from './components/ImageDisplay';


let URL = "https://api.nasa.gov/planetary/apod?api_key=NtATcKfbrBQ0Evdb4TsSg9zCjASYQVd3f4dizZdG"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          rover: "Curiosity",
          camera: "FHAZ",
          images: [],
          sol: "",
        }

    }

    handleRover(event) => {
        this.setState({
            rover:event.target.value
        })

    }

    handleCamera(event) =>{
        this.setState({
            camera:event.target.value

        })

    }

    handleSol(event) => {
        this.setState({
            sol:event.target.value
        })
    }

    componentDidMount(){
        fetch(URL)
        .then(r => r.json())
        .then(json => {
            console.log(json);
            this.setState({
             rover:json.rover
            })
        })
    }

  render() {
    return (
      <div >
          <h1> NASA NASA NASA </h1>
              <label htmlFor="rover">Rover</label>
                <select onChange={this.handleRover} id="rover" value={this.state.value}>
                  <option value="Curiosity">Curiosity</option>
                  <option value="Opportunity">Opportunity</option>
                  <option value="Spirit">Spirt</option>
                </select>
                <label htmlFor="camera">Camera Type</label>
                <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                  <option value="fhaz">FHAZ (Front Hazard)</option>
                  <option value="rhaz">RHAZ (Rear Hazard)</option>
                  <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
                <label htmlFor="sol">Martian Sol: 1000-2000</label>
                <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
                <button> Search</button>
          <GetImageForm/>

      </div>
    );
  }
}

export default App;
