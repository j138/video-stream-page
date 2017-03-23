import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, MenuItem, Divider, IconButton } from 'material-ui';
import Radium from 'radium';
import IconDiscord from '../src/image/discord-logo.svg';
import IconBeer from '../src/image/iconmonstr-beer.svg';
import IconGithub from '../src/image/iconmonstr-github.svg';
import * as styles from './styles';

@Radium class Header extends React.Component {
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

    const { users, user } = this.props;

    return (
      <header>
        <AppBar
          title={`${user.name}@Miyahira Livestream`}
          onLeftIconButtonTouchTap={() => this.setState({ open: true })}
          iconElementRight={
            <div>
              <IconButton
                target="blank"
                href="https://discord.gg/UgnXDAc"
                tooltip="miyahira discord"
                tooltipPosition="bottom-left"
              >
                <img src={IconDiscord} alt="miyahira discord" width="28px" />
              </IconButton>

              <IconButton
                target="blank"
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=N6MDNCK2V2D3C"
                tooltip="beer Me!"
                tooltipPosition="bottom-left"
              >
                <img src={IconBeer} alt="beer me" />
              </IconButton>

              <IconButton
                target="blank"
                href="https://github.com/j138/video-stream-page"
                tooltip="src code"
                tooltipPosition="bottom-left"
              >
                <img src={IconGithub} alt="code is here" />
              </IconButton>
            </div>
          }
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar showMenuIconButton={false} title="Select Livestream" />

          {users.map(u => (
            <Link key={u.name} to={u.name} style={styles.drawerItem}>
              <MenuItem onTouchTap={() => this.selectUser()} primaryText={u.name} />
            </Link>
          ))}

          <Divider />

          {links.map(v => (
            <a key={v.href} href={v.href} style={{ textDecoration: 'none' }}>
              <MenuItem primaryText={v.text} />
            </a>
          ))}

        </Drawer>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
  }).isRequired,
  users: React.PropTypes.shape({
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
  }).isRequired,
};

export default Header;
