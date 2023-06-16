import React from 'react';
import { Blocks } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = () => (
   <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
   />
);

Loader.propTypes = {};

export default Loader;
