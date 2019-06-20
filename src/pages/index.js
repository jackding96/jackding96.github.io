import React from "react"
import Links from "../components/links.js"
import ProfileImage from "../components/profileImage.js"

export default () => (<div>
  <ProfileImage/>

  <div><span className={'highlight'}>Jack Ding</span> is a Software Developer.</div>
  <div>Previously at <span className={'highlight'}>Lyft</span>, <span className={'highlight'}>Rangle.IO</span>, and <span className={'highlight'}>IBM Cloud</span>.</div>
  <div>Loves Coffee.</div>

  <Links/>
</div>);
