import React from "react"
import Links from "../components/links.js"
import ProfileImage from "../components/profileImage.js"
import WordCarousel from "../components/wordCarousel.js"
import indexStyles from './index.module.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.test = 0;
    this.i = 0;
    this.colorsList = ['rgb(0,122,255)', 'rgb(255, 149, 0)', 'rgb(255, 204, 0)', 'rgb(90, 200, 250)', 'rgb(175, 82, 222)', 'rgb(52, 199, 89)']
    this.state = {
      highlightColor: 'rgb(0,122,255)',
    }

    this.rotateColor = this.rotateColor.bind(this);
  }
  componentDidMount() {
    setInterval(this.rotateColor, 3000);
  }
  rotateColor() {
    this.i = this.i+1;
    this.setState({ highlightColor: this.colorsList[this.i % this.colorsList.length] });
  }
  render() {
    return (
      <div className={indexStyles.container}>
        {this.state.highlightColor}
        <div className={indexStyles.box} style={{backgroundColor: this.state.highlightColor}}></div>

        {/* Profile Image Container */}
        <div className={indexStyles.profileImageContainer}>
          <ProfileImage />
        </div>

        {/* Main Content Container */}
        <div className={indexStyles.contentContainer}>

          {/* First Line */}
          <div className={indexStyles.contentLineContainer}>
            <div className={indexStyles.contentLine}><span className={'highlight'}>Jack Ding</span> is a</div>
            <div className={indexStyles.carouselContainer}>
              <WordCarousel
                words={['Software Engineer.', 'Code Connoisseur.', 'Technology Templar.', 'Binary Bandit.', 'Programming Pirate.', 'Algorithm Antihero.', 'Design Darth Vadar.', 'HPC Heavyweight.']}
                slideFrom='above'
                fontColor='red'
              />
            </div>
          </div>

          {/* Second Line */}
          <div className={indexStyles.contentLineContainer}>
            <div>Previously at <span className={'highlight'}>Lyft</span>, <span className={'highlight'}>Rangle.IO</span>, and <span className={'highlight'}>IBM Cloud</span>.</div>
          </div>

          {/* Third Line */}
          <div className={indexStyles.contentLineContainer}>
            <div className={indexStyles.contentLine}>Loves</div>
            <div className={indexStyles.carouselContainer}>
              <WordCarousel
                words={['Coffee.', 'Taming Lions.', 'Critiquing Impressionist Art.', 'Knocking Down Drywall.', 'Freshly Cut Lawns.', 'Building Gingerbread Houses.', 'Growing Tomatoes.', 'Finding Lost Treasure.', 'Long Walks On The Beach.']}
                slideFrom='below'
                fontColor='blue'
              />
            </div>
          </div>

        </div>

        {/* Links Container */}
        <div className={indexStyles.linksContainer}>
          <Links />
        </div>

      </div>
    );
  }
}

export default Index;