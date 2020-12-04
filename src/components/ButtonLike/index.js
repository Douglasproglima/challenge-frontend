import React from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
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
    const {data} = await api.put('Article/Like/1');
    this.setState({
      likes: data.like
    });
  };

  render() {
    const likes = this.state.likes;
    if (likes === 0) {
      return (
          <div className="">
            <button className="StytedButtonLike" onClick={this.addLike}>
              <span>Like</span>
              ({likes})
            </button>
          </div>

      );
    }
    if (likes >= 1) {
      return (
          <div className="">
            <button className="StytedButtonLike" onClick={this.addLike}>
              <FontAwesomeIcon  color={'#ff253a'} icon={faHeart} />
              {likes}
            </button>
          </div>
      );
    }
  }
}