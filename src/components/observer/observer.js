import React, { Component } from 'react';

class Observer extends Component {
  constructor() {
    super();
    this.state = { isVisible: false };
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
          console.log(entry);
          this.setState({ isVisible: entry.isIntersecting });
        });
      }, {});
      this.io.observe(this.container);
    });
  }
  componentWillUnmount() {
    if (this.io) {
      this.io.disconnect();
    }
  }
  render() {
    return (
      <div className="menu__item-wrapper" visible={`${this.state.isVisible}`}
        ref={div => {
          this.container = div;
        }}
      >
        {Array.isArray(this.props.children)
          ? this.props.children.map(child => child(this.state.isVisible))
          : this.props.children(this.state.isVisible)}
      </div>
    );
  }
}

  export default Observer;