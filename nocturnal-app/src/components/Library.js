import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import MusicPlayer from 'react-responsive-music-player';

var contentful = require('contentful')
var client = contentful.createClient({
  space: '4odwu2gvips4',
  accessToken: 'TwJNF9D-6KM3U0zLCvLhTVUIedxF7vpPWGoJNThM3JE'
})

// client.getEntries()
// .then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//     if(entry.fields.track) {
//       console.log(entry.fields.track)
//       console.log(entry.fields.id)
//     }
//   })
// })



// client.getEntry('4ARveMzJcwS3twzIcXEZTP')
// .then(function (entry) {
//   console.log(entry.fields.track)
// })


const playlist = [
  {
    url: 'https://res.cloudinary.com/dpprahdzh/video/upload/v1590253291/GOD_hn2io6.wav',
    cover: 'path/to/jpg',
    title: 'GOD',
    artist: [
      'Tubby Black'
    ]
  },
  {
    url: 'https://res.cloudinary.com/dpprahdzh/video/upload/v1590253693/NEVER_FELT_THE_LOVE_mujzrp.mp3',
    cover: 'path/to/jpg',
    title: 'Never Felt The Love',
    artist: [
      'Tubby Black'
    ]
  },
  {
    url: 'https://res.cloudinary.com/dpprahdzh/video/upload/v1590253694/LOVE_ME_VOL._2_Minus_Effect_yseeks.mp3',
    cover: 'path/to/jpg',
    title: 'Love Me, Vol.2',
    artist: [
      'Tubby Black'
    ]
  },
  {
    url: 'https://res.cloudinary.com/dpprahdzh/video/upload/v1590253691/LOVELY_LIVES_sqnlkq.mp3',
    cover: 'path/to/jpg',
    title: 'Lovely Lives',
    artist: [
      'Tubby Black'
    ]
  },
  {
    url: 'https://res.cloudinary.com/dpprahdzh/video/upload/v1590253693/END_TO_END_ueb4ek.mp3',
    cover: 'path/to/jpg',
    title: 'End to End',
    artist: [
      'Tubby Black'
    ]
  }
]

const Library = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Fragment>
      <div>
        <MusicPlayer playlist={playlist} />
      </div>
    </Fragment>


  );
};

export default Library;