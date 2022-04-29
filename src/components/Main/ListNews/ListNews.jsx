import React, { Component, Fragment } from "react";
import axios from "axios";
import env from "react-dotenv";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //hola
      newsList: [], //this.props.defaultList
    };
    // Event binding (Bindear eventos)
    console.log("CONSTRUCTOR");
  }

  async componentDidMount() {
    try {
      const resp = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=BXbXXo29M6eGBrMdb0dnOFsnJtDYWG9l"
      );
      const data = await resp.data;
      //console.log(data.results);
      this.setState({
        newsList: data.results,
      });
      console.log("componentDidMount");
    } catch {
      //console.log("Error: " + e);
    }
  }

  render() {
    console.log(this.state.newsList[0].title)
    return (
      <div>
        {/* {
          this.state.newsList.map((news, i) =>
            <Fragment key={i}> 
              <h2>{news.title}</h2>
              <p>{news.url}</p>
            </Fragment>
          )
        } */}

        {/* <p>{this.state.newsList[0].title}</p> */}

        <p>{JSON.stringify(this.state.newsList[0])}</p>
      </div>
    );
  }
}

export default ListNews;
