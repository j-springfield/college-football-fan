import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFirstName, setLastName, setFavoriteTeam, setEmail } from '../../store/actions/userActions';
import PropTypes from 'prop-types';

const UserForm = ({firstName, lastName, email, favoriteTeam, setFirstName, setLastName, setFavoriteTeam, setEmail}) => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      favoriteTeam: '',
   });
   
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      setFirstName(formData.firstName);
      setLastName(formData.lastName);
      setEmail(formData.email);
      setFavoriteTeam(formData.favoriteTeam);
      console.log('Submitted data: ', { firstName, lastName, favoriteTeam, email });
   };

   console.log(formData);

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="firstName">First Name:</label>
            <input
               type="text"
               id="firstName"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
            />
         </div>
         <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
               type="text"
               id="lastName"
               name="lastName"
               value={formData.lastName}
               onChange={handleChange}
            />
         </div>
         <div>
            <label htmlFor="favoriteTeam">Favorite Team:</label>
            <input
               type="text"
               id="favoriteTeam"
               name="favoriteTeam"
               value={formData.favoriteTeam}
               onChange={handleChange}
            />
         </div>
         <div>
            <label htmlFor="email">Email:</label>
            <input
               type="text"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
};

const mapStateToProps = (state) => {
   console.log('USER FORM: ', state.user);
   return {
      firstName: state.user.firstName,
      lastName: state.user.lastName,
      email: state.user.email,
      favoriteTeam: state.user.favoriteTeam,
   }
};

const mapDispatchToProps = {
   setFirstName,
   setLastName,
   setEmail,
   setFavoriteTeam,
};

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
