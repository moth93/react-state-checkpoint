import React from 'react';

class App extends React.Component {
  //we created the states person, shows and a counter here
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Foulen El Fouleni',
        bio: 'This person has a bio',
        imgSrc: 'https://images.rawpixel.com/image_png_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L21vdGFybzdfaGFwcHlfYWZyaWNhbl9hbWVyaWNhbl90ZWVuX2d1eV9wb2ludGluZ19hdF9kZW50YWxfd2hpdF8wYzVhZWE5Ny0xZjdhLTRiODMtYmI4Zi1kZGNhZGU2NTliMmQucG5n.png',
        profession: 'Web Developer',
      },
      shows: false,
      mountedTime: 0,
    };
   this.intervalId = null;
  }
// In this part of the code we used setInterval to count when
// the component was last mounted and reintials the count once the componant is unmount
  componentDidMount() {
    this.intervalId = setInterval(this.updateMountedTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  updateMountedTime = () => {
    this.setState((prevState) => ({
      mountedTime: prevState.mountedTime + 1,
    }));
  };
 //this function is used to show the profile of the user  
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>click to toggleShow</button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time since last mounted: {this.state.mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;







