import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

var contentful = require('contentful')
var client = contentful.createClient({
  space: '4odwu2gvips4',
  accessToken: 'TwJNF9D-6KM3U0zLCvLhTVUIedxF7vpPWGoJNThM3JE'
})

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.track) {
      console.log(entry.fields.track)
      console.log(entry.fields.id)
    }
  })
})

const Library = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Fragment>


    </Fragment>


  );
};

export default Library;