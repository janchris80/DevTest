import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { logOut } from '../../LogIn/components/UserFunction';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  handelLogout = () => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    logOut();
    history.push('/log_in');
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" onClick={this.handelLogout} />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
