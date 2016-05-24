import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import TweenMax from 'gsap';
const { Linear } = window;
export default class Marquee extends Component {

  static propTypes = {
    behavior: PropTypes.oneOf(['scroll', 'slide', 'alternate']),
    bgcolor: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
    height: PropTypes.string,
    hspace: PropTypes.string,
    loop: PropTypes.number,
    scrollamount: PropTypes.number,
    scrolldelay: PropTypes.number,
    truespeed: PropTypes.bool,
    vspace: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    behavior: 'scroll',
    direction: 'left',
    loop: -1,
    scrollamount: 6,
    scrolldelay: 85,
  }

  constructor() {
    super();
    this.state = {
      outerStyle: {},
      innerStyle: {},
    };
  }

  _startMarquee() {
    const child = findDOMNode(this.refs.child);
    const rootEl = findDOMNode(this.refs.inner);
    window.requestAnimationFrame(() => {
      const { loop: repeat } = this.props;
      this.setState({
        outerStyle: {
          height: `${child.offsetHeight}px`,
          width: `${child.offsetWidth}px`,
          position: 'relative',
          overflow: 'hidden',
        },
        innerStyle: {
          display: 'block',
          left: '100%',
          width: '200%',
          position: 'absolute',
          overflow: 'hidden',
        },
      });
      TweenMax.to(rootEl, 5, {
        left: '-100%',
        ease: Linear.easeNone,
        repeat,
      });
    });
  }

  componentDidMount() {
    this._startMarquee();
  }

  render() {
    const { outerStyle, innerStyle } = this.state;
    window._outerStyle = outerStyle;
    window._innerStyle = innerStyle;
    const span = {
      padding: '5px',
      display: 'inline-block',
    };

    // TODO: pass props not in propTypes
    return (
      <div style={outerStyle || {}}>
        <div ref="inner" style={innerStyle || {}}>
          <span ref="child">{this.props.children}</span>
        </div>
      </div>
    );
  }
}
