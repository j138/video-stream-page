import React from 'react';
import { AppBar, Drawer, MenuItem, Divider } from 'material-ui';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  selectUser() {
    this.state = { open: false };
  }

  render() {
    return (
      <header>
        <AppBar
          title={
            <div>
              Miyahira Stream: &nbsp;
              {this.props.user.name}
            </div>
          }
          onLeftIconButtonTouchTap={() => this.setState({ open: true })}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem primaryText="Select Member" />
          <Divider />

          {Object.keys(this.props.users).map(k =>
            <Link key={k} to={k}>
              <MenuItem
                onTapTouch={this.selectUser()}
                primaryText={this.props.users[k].name}
              />
            </Link>
          )}
          <Divider />
          <a href="http://haishin.miyahira.me">
            <MenuItem primaryText="haishin.miyahira.me" />
          </a>

          <a href="http://haishin.miyahira.me/index2.html">
            <MenuItem primaryText="前の前" />
          </a>
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
