import React from 'react';
import { AppBar, Drawer, MenuItem, Divider } from 'material-ui';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  selectUser(v) {
    this.props.selectUser(v);
    this.state = { open: false };
  }

  render() {
    return (
      <header>
        <AppBar
          title={
            <div>
              miyahira Stream: &nbsp;
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
            <MenuItem
              onTouchTap={() => this.selectUser(k)} key={k} value={k}
              primaryText={this.props.users[k].name}
            />)}
        </Drawer>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  users: React.PropTypes.object,
  selectUser: React.PropTypes.func,
};

export default Header;
