import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url, html_url } }) {
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
			<h3>{login}</h3>
			<a href={html_url} className="btn btn-dark btn-sm">
				More
			</a>
		</div>
	);
}
UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
