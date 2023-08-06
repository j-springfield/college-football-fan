import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserInfoWrapper } from './UserInfo.styled';

const UserInfo = ({ firstName, lastName, email, favoriteTeam }) => {
 return (
   <>
      <h2>User Data:</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Favorite Team: {favoriteTeam}</p>
   </>
 );
};

const mapStateToProps = (state) => {
   console.log('USER INFO: ', state.user);
   return {
      firstName: state.user.firstName,
      lastName: state.user.lastName,
      email: state.user.email,
      favoriteTeam: state.user.favoriteTeam,
   };
};

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

export default connect(mapStateToProps)(UserInfo);
