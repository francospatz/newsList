import React, { Component } from "react";
import CardNew from './CardNew';
import axios from "axios";
import env from "react-dotenv";


class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: []
    };
  }

  async componentDidMount() {
    try {
      const resp = await axios.get(env.REACT_APP_URL);
      const newsData = await resp.data;
      
      if (this.props.data.length > 0) {
        this.setState({
          newsList: [...this.props.data, newsData.results[0], newsData.results[1], newsData.results[2], newsData.results[3], newsData.results[4]]
        })
      } else {
        this.setState({
          newsList: [newsData.results[0], newsData.results[1], newsData.results[2], newsData.results[3], newsData.results[4]]
        })
      }
      
      console.log("componentDidMount");
      
    } catch (e){
      console.log("Error: " + e);
    }
  }

  removeNew = (i) => {
    const remainingNews = this.state.newsList.filter((news,j)=>i!==j);
    this.setState({newsList:remainingNews});
  }

  render() {
    console.log(this.state.newsList)
    return (
      <div>
        {
          this.state.newsList.map((news, i) =>
          <CardNew data={news} key={i} removeNew={()=>this.removeNew(i)}/>
          )
        }
        
      </div>
    );
  }
}

export default ListNews;
