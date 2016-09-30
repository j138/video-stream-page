import React from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <header>
        <AppBar
          title={`Video Stream: ${this.props.user.name}`}
          onLeftIconButtonTouchTap={() => this.setState({ open: true })}
        >
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={open => this.setState({ open })}
          >
            {this.props.users.map(v =>
              <MenuItem
                onTouchTap={() => this.props.changeUser(v)} key={v} value={v} primaryText={v}
              />)}
          </Drawer>
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  users: React.PropTypes.array,
  changeUser: React.PropTypes.func,
};

export default Header;
