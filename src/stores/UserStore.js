// import { observable, action, reaction, computed } from 'mobx';
// import { observable, reaction, computed } from 'mobx';
import { observable, reaction } from 'mobx';

class UserStore {
  users = [];
  @observable user = null;
  @observable pickUser = '';

  constructor() {
    reaction(
      () => this.pickUser,
      (pickUser) => {
        if (this.users.length > 0) {
          this.user = this.users.find(u => u.name === pickUser);
        }
      },
    );
  }
}

export default UserStore;
