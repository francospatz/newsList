import React, { Component } from "react";
import {
  Card,
  Button,
  Typography,
} from "@mui/material";

class CardNew extends Component {
  render() {
    //console.log('Single New '+ JSON.stringify(this.props.data))
    const { title, short_url, section, subsection, multimedia, byline } =
      this.props.data;
    return (
      <section className="card-container">
        <Card sx={{ width: 500, margin: 1 }}>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Section:{section}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subsection:{subsection}
          </Typography>
          <img src={multimedia[0].url} alt="" height={300} />
          <a href={short_url} target="_blank" rel="noopener noreferrer">
            <Typography variant="body2" color="text.secondary">
              {short_url}
            </Typography>
          </a>
          <Typography variant="body2" color="text.secondary">
            {multimedia[0].caption}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By: {byline}
          </Typography>
          <Button variant="contained" onClick={this.props.removeNew} sx={{margin: 1}}>
            Delete new
          </Button>
        </Card>
      </section>
    );
  }
}

export default CardNew;
