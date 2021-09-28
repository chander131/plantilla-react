import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
	<h1>{children}</h1>
);

Title.defaultProps = {
	children: null,
};

Title.propTypes = {
	children: PropTypes.node
};

export default Title;
