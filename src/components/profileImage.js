import React from "react"
import profileImageStyles from "./profileImage.module.css"

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={profileImageStyles.container}>
        <div className={profileImageStyles.profImg}></div>
      </div>
    );
  }
}

export default ProfileImage;