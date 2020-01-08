import React from 'react';
import NewCard from './NewCard';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='listWrapper'>
        <h3 className='listHeader'>{this.props.title}</h3>
        <NewCard />
      </div>  
    
    );
  }
}