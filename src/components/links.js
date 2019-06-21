import React from "react"
import linksStyles from "./links.module.css"

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: '',
      email: '',
    };

    this.emailClickHandler = this.emailClickHandler.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }
  emailClickHandler(e) {
    this.setState({ copied: linksStyles.trigger, email: linksStyles.highlighted});
    this.copyToClipboard('jackding.yj@gmail.com');
  }
  copyToClipboard(text) {
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
  render() {
    return (
      <div className={linksStyles.container}>
        <div className={`${linksStyles.linkContainer} ${linksStyles.emailLinkContainer}`}>
          <a onClick={this.emailClickHandler} className={this.state.email}>
            Email
          </a>
          <span 
            className={`${linksStyles.copied} ${this.state.copied}`}
            onAnimationEnd={() => this.setState({copied:'',email:''})}
          >
            Copied!
          </span>
        </div>
        <div className={linksStyles.linkContainer}>
          <a href='https://github.com/jackding96' target="_blank">GitHub</a>
        </div>
        <div className={linksStyles.linkContainer}>
          <a href='https://www.linkedin.com/in/jack-ding-63236bb4/' target="_blank">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default Links;