import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class NavigationItem extends Component {
  render() {
    const { to, className, children } = this.props;

    return (
      <NavLink to={to} className={className} activeClassName="active">
        <NavigationLabel>{children}</NavigationLabel>
      </NavLink>
    );
  }
}

const NavigationLabel = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
`;

export default styled(NavigationItem)`
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  &:after {
    transition: 200ms clip-path;
    will-change: clip-path;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: white;
    clip-path: polygon(0% 0%, calc(50% - 15px) 0%, 50% 0%, calc(50% + 15px) 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 0;
  }

  &.active:after,
  &:hover:after {
    clip-path: polygon(0% 0%, calc(50% - 15px) 0%, 50% 15px, calc(50% + 15px) 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  &:before {
    transition: 200ms border-radius, 200ms transform;
    will-change: border-radius, transform;
    width: 5px;
    height: 5px;
    background-color: red;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    z-index: 1;
    border-radius: 2.5px;
  }

  &.active:before,
  &:hover:before {
    border-radius: 0;
    transform: translate(-50%, -50%) rotate(-45deg) scale(1.2);
  }

  ${NavigationLabel} {
    transition: 200ms transform, 200ms opacity;
    will-change: transform, opacity;
    transform-origin: 0 100%;
    padding-left: 8px;
    padding-bottom: 1px;
    transform: translateY(-20px) rotate(-45deg);
    opacity: 0;
    pointer-events: none;
  }

  &:hover ${NavigationLabel} {
    transform: translateY(0) rotate(-45deg);
    opacity: 1;
  }
`;