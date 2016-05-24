import React, { Component, PropTypes } from 'react';

export default class Blink extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  constructor() {
    super();
    this.state = { visible: true };
  }

  componentDidMount() {
    this.timer = setInterval(this._flip.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _flip() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const style = { visibility: this.state.visible ? 'visible' : 'hidden' };
    return (
      <span {...this.props} style={style}>
        {this.props.children}
      </span>
    );
  }
}
