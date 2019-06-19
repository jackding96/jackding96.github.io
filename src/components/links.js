import React from "react"
import linksStyles from "./links.module.css"

export default () => (<div>
  <div className={linksStyles.container}>
    <ul>
      <li>
        <a onClick={emailClickHandler}>Email</a>
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

function emailClickHandler(e) {
  e.target.text = 'Copied!';
  e.target.style.color = '#FFA726'
  copyToClipboard('jackding.yj@gmail.com');
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}