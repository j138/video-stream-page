import React from 'react';
import { AppBar, RaisedButton, Drawer, MenuItem } from 'material-ui';

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    console.log(this.state.open);
    return this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <header>
        <AppBar title="Video Stream">
          <RaisedButton
            label="Toggle"
            onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </AppBar>
      </header>
    );
  }
}
