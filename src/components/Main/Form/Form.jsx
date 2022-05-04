import React, { Component } from "react";
import { Navigate } from 'react-router-dom'



class Form extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  newNewForm = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const section = event.target.section.value;
    const subsection = event.target.subsection.value;
    const short_url = event.target.link.value;
    const multimedia = [{
        url: event.target.img.value,
        caption: event.target.caption.value
      }];
    const byline = event.target.by.value;


    const newNew = {
      title, section, subsection, short_url,
      multimedia, byline
    }; 

    this.props.addNew(newNew);
    this.setState({redirect: true});
  }
  
  
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Navigate to='/list'/>
    }

    return <div>
      <h1>Insert new</h1>
      <form onSubmit={this.newNewForm}>
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" /><br />
        <label htmlFor="section">Section:</label><br />
        <input type="text" id="section" name="section" /><br />
        <label htmlFor="subsection">Subsection:</label><br />
        <input type="text" id="subsection" name="subsection" /><br />
        <label htmlFor="link">Link:</label><br />
        <input type="text" id="link" name="link" /><br />
        <label htmlFor="img">Img:</label><br />
        <input type="text" id="img" name="img" /><br />
        <label htmlFor="caption">Img caption:</label><br />
        <input type="text" id="caption" name="caption" /><br />
        <label htmlFor="by">By:</label><br />
        <input type="text" id="by" name="by" /><br />
        
        <input type="submit" value="Send"/>
      </form>
    </div>;
  }
}

export default Form;
