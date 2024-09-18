import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar} className="card-img-top" alt={user.name} />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.bio}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Location: {user.location}</li>
        <li className="list-group-item">Joined: {user.joinDate}</li>
      </ul>
    </div>
  );
};

export default Profile;