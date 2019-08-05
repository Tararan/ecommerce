import React, { Component } from 'react';

class Observer extends Component {
  constructor() {
    super();
    this.state = { shouldLoad: false };
    this.io = null;
    this.container = null;
  }

  componentDidMount() {
    ("IntersectionObserver" in window
      ? Promise.resolve()
      : import("react-intersection-observer")
    ).then(() => {
      this.io = new window.IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.state.shouldLoad === false ) {
            this.setState({ shouldLoad: true });
          }
        });
      }, {});
      this.io.observe(this.container);
    });
  }
  componentWillUnmount() {
    if (this.io) {
      this.io.disconnect();
      this.io = new window.IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.io.unobserve(entry.target);
      });
      }, {});
    }
  }
  render() {
    const { shouldLoad } = this.state;
    return (
      <div className="menu__item-wrapper"
        ref={ 
          div => { this.container = div; }
        }
      >
        {Array.isArray(this.props.children)
          ? this.props.children.map(child => child(shouldLoad))
          : this.props.children(shouldLoad)}
      </div>
    );
  }
}

  export default Observer;