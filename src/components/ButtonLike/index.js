import React from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'
//import StytedButtonLike from './styled';

export default class ButtonLike extends React.Component {
  state = {
    likes: 0
  };

  async componentDidMount() {
    const {data} = await api.get('Article/GetLikes/1');
    if(!data) return;
    this.setState({ likes: data.like });
  }

  addLike = async () => {
    try {

      console.log('Start: ' + Date.now);
      for (let index = 0; index <= 1000; index++) {
        const {data} = await api.put('Article/Like/1');
        this.setState({
          likes: data.like
        });
        console.log(index);
      }

      console.log('Finish: ' + Date.now);
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    const likes = this.state.likes;
    return (
      <div className="">
        <button className="StytedButtonLike" onClick={this.addLike}>
        <FontAwesomeIcon  color={'#ffffff'} icon={faThumbsUp} />
        <span className="span-text-like">Like ({likes})</span>
        </button>
      </div>
    );
  }
}