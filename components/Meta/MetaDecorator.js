import React from 'react'
import { Helmet } from 'react-helmet';

function MetaDecorator(props) {

  return (
    
    <Helmet>
      <title>{props.title}</title>
       <meta property="og:image" content={props.image} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description}/>
        <meta name="twitter:card" content={props.imagetw}></meta>
        
        <meta property="og:url"  content={props.url}  />
    </Helmet>

  )
  if (typeof window !== 'undefined') {
     console.log(window.innerWidth)

}
}



export default MetaDecorator;