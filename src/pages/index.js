import React from "react"
import Links from "../components/links.js"
import ProfileImage from "../components/profileImage.js"
import WordCarousel from "../components/wordCarousel.js"
import indexStyles from './index.module.css'

export default () => (<div className={indexStyles.container}>

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
        />
      </div>
    </div>

  </div>

  {/* Links Container */}
  <div className={indexStyles.linksContainer}>
    <Links/>
  </div>

</div>);
