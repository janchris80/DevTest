import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { logOut } from '../../LogIn/components/UserFunction';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  handelLogout = () => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    logOut();
    history.push('/log_in');
  };


  render() {
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">Roman Johanson</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && <button type="button" className="topbar__back" onClick={this.toggle} />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
            <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Log Out" icon="exit" path="/" onClick={this.handelLogout} />
          </div>
        </Collapse>
      </div>
    );
  }
}
