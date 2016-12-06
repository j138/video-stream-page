import React from 'react';
import { Link } from 'react-router';
import { AppBar, Drawer, MenuItem, Divider } from 'material-ui';
import Radium from 'radium';
import * as styles from './styles';

@Radium
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.user.name === '') return false;
    return true;
  }

  selectUser() {
    this.state = { open: false };
  }

  render() {
    const links = [
      {
        href: 'http://haishin.miyahira.me',
        text: 'haishin.miyahira.me',
      },
      {
        href: 'http://haishin.miyahira.me/index2.html',
        text: '前の前',
      },
    ];

    return (
      <header>
        <AppBar
          title={`${this.props.user.name}@Miyahira Livestream`}
          onLeftIconButtonTouchTap={() => this.setState({ open: true })}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar showMenuIconButton={false} title="Select Livestream" />

          {Object.keys(this.props.users).map(k => (
            <Link key={k} to={k} style={styles.drawerItem}>
              <MenuItem
                onTouchTap={() => this.selectUser()}
                primaryText={this.props.users[k].name}
              />
            </Link>))}

          <Divider />

          {links.map(v => (
            <a key={v.href} href={v.href}>
              <MenuItem primaryText={v.text} />
            </a>))}

        </Drawer>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
  users: React.PropTypes.shape({
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
  }),
};

export default Header;
