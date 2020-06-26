import React, { Component, lazy, Suspense } from 'react';
import { Element } from 'react-scroll';
import RelationshipsAndRequirements from './Section_Relationships_and_Requirements/RelationshipsAndRequirements';
import * as API from '../../service/api';
import { successMessage, failMessage } from '../shared/Modal.json';

const LazyAboutMe = lazy(() =>
  import('./Section_About_Me/AboutMe' /* webpackChunkName: "AboutMe" */),
);

const LazyUsers = lazy(() =>
  import('./Section_Users/Users' /* webpackChunkName: "Users" */),
);

const LazyForm = lazy(() =>
  import('./Section_Register/Register' /* webpackChunkName: "Form" */),
);

const LazyModal = lazy(() =>
  import('../shared/Modal' /* webpackChunkName: "Modal" */),
);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      positions: [],
      countUsers: window.innerWidth < 768 ? 3 : 6,
      stepUsers: window.innerWidth < 768 ? 3 : 6,
      totalUsers: 0,
      RegisterSuccess: false,
      RegisterError: false,
      fetchUsersError: '',
      fetchTokenError: '',
      fetchPositionsError: '',
    };
  }

  componentDidMount() {
    const { countUsers } = this.state;
    API.fetchUsers(countUsers)
      .then(response => {
        this.setState({
          users: response.data.users,
          totalUsers: response.data.total_users,
        });
      })
      .catch(error => this.setState({ fetchUsersError: error.message }));
    API.fetchToken()
      .then(res => {
        window.localStorage.setItem('token', JSON.stringify(res.data.token));
      })
      .catch(error => this.setState({ fetchTokenError: error.message }));
    API.fetchPositions()
      .then(res => {
        this.setState({ positions: res.data.positions });
      })
      .catch(error => this.setState({ fetchPositionsError: error.message }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { RegisterSuccess, countUsers } = this.state;
    if (
      RegisterSuccess !== prevState.RegisterSuccess ||
      countUsers !== prevState.countUsers
    ) {
      API.fetchUsers(countUsers).then(response => {
        this.setState({
          users: response.data.users,
          totalUsers: response.data.total_users,
        }).catch(error => this.setState({ fetchUsersError: error.message }));
      });
    }
  }

  handleRegister = data => {
    API.addUser(data)
      .then(res => {
        if (res.data.success) {
          this.setState({ RegisterSuccess: true });
        } else {
          this.setState({ RegisterError: true });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ RegisterError: true });
        }
      });
  };

  onHandleModal = () => {
    this.setState({ RegisterSuccess: false, RegisterError: false });
  };

  handleIncreaseUsers = () => {
    const { stepUsers } = this.state;
    this.setState(prevState => ({
      countUsers: prevState.countUsers + stepUsers,
    }));
  };

  render() {
    const {
      users,
      positions,
      RegisterSuccess,
      RegisterError,
      countUsers,
      totalUsers,
      fetchUsersError,
      fetchTokenError,
      fetchPositionsError,
    } = this.state;
    return (
      <main style={{ marginTop: '60px' }}>
        <Suspense fallback={<h1>...Loading</h1>}>
          <Element name="About me">
            <LazyAboutMe />
          </Element>
          <Element name="Requirements">
            <RelationshipsAndRequirements />
          </Element>
          <Element name="Users">
            <LazyUsers
              users={users}
              handleIncreaseUsers={this.handleIncreaseUsers}
              countUsers={countUsers}
              totalUsers={totalUsers}
              fetchUsersError={fetchUsersError}
            />
          </Element>
          <Element name="Sign up">
            <LazyForm
              positions={positions}
              onRegister={this.handleRegister}
              fetchTokenError={fetchTokenError}
              fetchPositionsError={fetchPositionsError}
            />
          </Element>
          {RegisterSuccess && (
            <LazyModal
              onHandleModal={this.onHandleModal}
              message={successMessage}
            />
          )}
          {RegisterError && (
            <LazyModal
              onHandleModal={this.onHandleModal}
              message={failMessage}
            />
          )}
        </Suspense>
      </main>
    );
  }
}
