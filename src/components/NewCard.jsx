import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default class NewCard extends React.Component {
  render() {
    return(
      <Card>
        
        <Typography gutterBottom>
          Word of the Day
        </Typography>
         
      </Card>
    );
  }
}