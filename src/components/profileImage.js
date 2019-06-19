import React from "react"
import meImg from "../../public/static/me.jpg"
import memojiImg from "../../public/static/memoji.png"
import profileImageStyles from "./profileImage.module.css"

export default () => (<div>
  <div>
    <img src={meImg} />
    <img src={memojiImg} />
  </div>
</div>);
