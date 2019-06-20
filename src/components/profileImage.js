import React from "react"
import meImg from "../../public/static/me.jpg"
import memojiImg from "../../public/static/memoji.png"
import profileImageStyles from "./profileImage.module.css"

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setInterval(this.changeImg, 1000);
  }
  componentWillUnmount() {

  }
  changeImg() {
    
  }
  render() {
    return (
      <div>
        <img src={meImg} />
      </div>
    );
  }
}

export default ProfileImage;