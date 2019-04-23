import React from 'react';

import './styles.css';

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0
    };
  }

  handleClick = val => {
    if (val === 1) {
      if (this.state.cnt < this.props.images.length - 1) {
        this.setState({ cnt: this.state.cnt + val });
      } else if (this.state.cnt === this.props.images.length - 1) {
        this.setState({ cnt: 0 });
      }
    } else if (val === -1) {
      if (this.state.cnt > 0) {
        this.setState({ cnt: this.state.cnt + val });
      } else if (this.state.cnt === 0) {
        this.setState({ cnt: this.props.images.length - 1 });
      }
    }
  };

  activateSlideShow = () => {
    setInterval(this.handleClick, 10000, 1);
  };

  componentDidMount() {
    this.activateSlideShow();
  }

  render() {
    let images = this.props.images;
    return (
      <div className="SlideShow">
        <img
          className="slideShowImg"
          src={images[this.state.cnt]}
          alt="slideshow"
        />
        <span className="bck btn">
          <button
            id="decrement"
            onClick={() => {
              this.handleClick(-1);
            }}
          >
            {'<--'}
          </button>
        </span>
        <span className="fwd btn">
          <button
            id="increment"
            onClick={() => {
              this.handleClick(1);
            }}
          >
            {' '}
            {'-->'}
          </button>
        </span>
      </div>
    );
  }
}
