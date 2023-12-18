import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyCard from "./components/MyCard";

class App extends React.Component {
  state = {
    person: {
      fullName: "Friedrich Nietzsche",
      bio: `Friedrich Wilhelm Nietzsche was a German philosopher. He initially began his career as a classical philologist before transitioning to philosophy. Despite facing health issues throughout his life, he made significant contributions to philosophical thought with works that explored topics such as morality, existentialism, and the concept of the Übermensch (Overman or Superman).`,
      imgSrc: "https://pantheism.com/wp-content/uploads/2016/05/nietz.jpg",
      profession: "Philosopher (Continental philosophy)",
    },
    show: false,
    mountedTime: 0,
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Set up an interval to update mountedTime every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  // Custom method: toggleShow
  toggleShow = () => {
    // Toggle the value of 'show' in the state
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <>
        {this.state.show && <MyCard person={this.state.person} />}
        <button onClick={this.toggleShow}>toggle me!</button>
        <p>Time since App mount: {this.state.mountedTime} seconds</p>
      </>
    );
  }
}

export default App;
