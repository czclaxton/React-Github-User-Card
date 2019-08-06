import React from "react";
import "./App.css";
import githubCard from "./githubCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followerData: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://api.github.com/users/czclaxton/followers`)
      .then(response => {
        return response.json();
      })
      .then(githubFollowerData =>
        this.setState({ followerData: githubFollowerData })
      )
      .catch(err => {
        console.log(err);
      });
    fetch(`https://api.github.com/users/czclaxton`)
      .then(response => {
        return response.json();
      })
      .then(githubData => this.setState({ data: githubData }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("follower data: ", this.state.followerData);
    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="card">
          <img width="50px" src={this.state.data.avatar_url} />
          <p>Username: {this.state.data.login}</p>
          <p>
            <h3>Followers</h3>
            <hr />
            {this.state.followerData.map(follower => {
              return <p>{follower.login}</p>;
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
