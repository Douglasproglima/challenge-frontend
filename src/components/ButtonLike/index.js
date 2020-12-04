import React from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
//import StytedButtonLike from './styled';

export default class ButtonLike extends React.Component {
  state = {
    likes: 0
  };

  componentDidMount() {
    const {data} = api.get('Article/GetLikes/1');
    console.log(data);
    if(!data) return;
    this.setState({ likes: data.like });
  }


  addLike = async  () => {
    const {data} = await api.put('Article/Like/1');
    console.log(data);

    this.setState({
      likes: data.like
    });
  };

  render() {
    const likes = this.state.likes;
    //const likes = Article.Like;
    if (likes === 0) {
      return (
          <div className="StytedButtonLike">
            <button className="button" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>

      );
    }
    if (likes == 1) {
      return (
          <div className="StytedButtonLike">
            <button className="button" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
      );
    }
    if (likes > 1) {
      return (
          <div className="StytedButtonLike">
            <button className="button" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} />
              {likes}
            </button>
          </div>
      );
    }
  }
}