import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const Users = ({
  users,
  handleIncreaseUsers,
  countUsers,
  totalUsers,
  fetchUsersError,
}) => (
  <section className="users-section">
    <div className="users-section__container">
      <div className="users-section__header">
        <h1>Our cheerful users</h1>
        <p>Attention! Sorting users by registration date</p>
      </div>
      <ul className="users-section__list">
        {fetchUsersError && (
          <div style={{ color: 'red' }}>{fetchUsersError}</div>
        )}
        {users.map(user => (
          <li className="users-section__profile-card" key={user.id}>
            <div className="users-section__user-container">
              <img
                className="users-section__user-image"
                src={user.photo}
                alt={user.name}
                data-tip={user.name}
              />
              <h2 className="users-section__user-name" data-tip={user.name}>
                {user.name}
              </h2>
              <p
                className="users-section__user-position"
                data-tip={user.position}
              >
                {user.position}
              </p>
              <p className="users-section__user-email" data-tip={user.email}>
                {user.email}{' '}
              </p>
              <p className="users-section__user-phone" data-tip={user.phone}>
                {user.phone}
              </p>
            </div>
            <ReactTooltip place="bottom" />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="button"
        disabled={countUsers >= totalUsers}
        onClick={() => handleIncreaseUsers()}
      >
        Show more
      </button>
    </div>
  </section>
);

export default Users;

Users.defaultProps = {
  fetchUsersError: '',
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleIncreaseUsers: PropTypes.func.isRequired,
  countUsers: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  fetchUsersError: PropTypes.string,
};
