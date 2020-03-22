import React from 'react';
import './ProfileEntry.css'

const countryFlagMapping = [
  {
    name: 'UK',
    emoji: '🇬🇧'
  },
  {
    name: 'Germany',
    emoji: '🇩🇪'
  },
  {
    name: 'US',
    emoji: '🇺🇸'
  },
  {
    name: 'Ireland',
    emoji: '🇮🇪'
  }
]

function ProfileEntry(props) {
  return (
    <div className="profileEntry">
      <div 
        className="avatar"
        style={{
          background: `url(${props.img} || 'avatar.png')`,
          backgroundSize: 'cover'
        }}
        alt="avatar"
      />
      <div className="entryText">
        <div className="entryTitle">Name:</div>
        <div className="name">
          <b>{props.name}</b>
        </div>
        <div className="entryTitle">Job:</div>
        <div>
          <b>{props.job}</b>
        </div>
        <div className="entryTitle">Country:</div>
        <div>
          <b>
            {
              countryFlagMapping.filter(
                countryFlag => countryFlag.name === props.country)[0].emoji
            }
          </b>
        </div>
      </div>
    </div>
  )
}

export default ProfileEntry
