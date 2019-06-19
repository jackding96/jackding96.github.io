import React from "react"
import linksStyles from "./links.module.css"

export default () => (<div>
  <div className={linksStyles.container}>
    <ul>
      <li>
        <a>Email</a>
      </li>
      <li>
        <a>GitHub</a>
      </li>
      <li>
        <a>LinkedIn</a>
      </li>
    </ul>
  </div>
</div>);