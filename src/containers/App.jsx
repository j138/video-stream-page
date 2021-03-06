import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Helmet from 'react-helmet';
import request from 'superagent';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import Loading from '../components/Loading';

const apiUrl = 'users.json';

@inject('userStore')
@observer
class App extends React.Component {
  propTypes = {
    userStore: PropTypes.shape({
      users: PropTypes.arrayOf(),
      user: PropTypes.shape(),
      pickUser: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const params = this.props.match.params;

    request.get(apiUrl).accept('json').end((err, res) => {
      if (err) {
        throw err;
      }

      const users = res.body;
      this.props.userStore.users = users;
      this.props.userStore.pickUser = params.name || users[0].name;
    });
  }

  componentWillReceiveProps(newProps) {
    const params = newProps.match.params;
    this.props.userStore.pickUser = params.name;
  }

  render() {
    const { user } = this.props.userStore;

    if (user === null) return <Loading />;

    return (
      <div>
        <Helmet title={user.name} />
        <div>
          <Header />
          <VideoSection
            ref={(c) => {
              this.videoSection = c;
            }}
            user={user}
          />
        </div>
      </div>
    );
  }
}
export default App;
