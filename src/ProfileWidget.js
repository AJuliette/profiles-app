import React from 'react';
import ProfileEntry from './ProfileEntry'

function ProfileWidget(props) {
  return props.profiles.map(profileEntry => (
    <ProfileEntry
    name={profileEntry.name}
    job={profileEntry.job}
    country={profileEntry.country}
    img={profileEntry.img}
    />
  ))
}

export default ProfileWidget