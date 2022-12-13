import React from 'react'
import { Helmet } from 'react-helmet';

const MetaDecorator = ({title, description, image, imagetw, url}) => {

  return (
    
    <Helmet>
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc"/>
      <meta name="twitter:card" content={imagetw} key="ogimage"/>
      <meta property="og:url"  content={url} key="ogurl"  />
    </Helmet>

  )
//   if (typeof window !== 'undefined') {
//      console.log(window.innerWidth)

// }
}



export default MetaDecorator;