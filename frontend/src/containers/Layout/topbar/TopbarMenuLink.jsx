import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class TopbarMenuLinks extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    onClick: PropTypes.func,
  };

  render() {
    const {
      title, icon, path, onClick,
    } = this.props;

    return (
      <Link className="topbar__link" to={path} onClick={onClick}>
        <span className={`topbar__link-icon lnr lnr-${icon}`} />
        <p className="topbar__link-title">{title}</p>
      </Link>
    );
  }
}
