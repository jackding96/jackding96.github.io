import React from "react"
import linksStyles from "./links.module.css"


export default () => (<div>
  <div className={linksStyles.container}>
    <ul>
      <li>
        <a>Email</a>
      </li>
      <li>
        <a href='https://github.com/jackding96' target="_blank">GitHub</a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/jack-ding-63236bb4/' target="_blank">LinkedIn</a>
      </li>
    </ul>
  </div>
</div>);