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
              miyahira-Stream: &nbsp;
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

          {this.props.users.map(v =>
            <MenuItem
              onTouchTap={() => this.selectUser(v)} key={v} value={v} primaryText={v}
            />)}
        </Drawer>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  users: React.PropTypes.array,
  selectUser: React.PropTypes.func,
};

export default Header;
