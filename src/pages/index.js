import React from "react"
import Links from "../components/links.js"
import ProfileImage from "../components/profileImage.js"
import WordCarousel from "../components/wordCarousel.js"

export default () => (<div>
  <ProfileImage/>

  {/* First Line */}
  <div>
    <div><span className={'highlight'}>Jack Ding</span> is a</div>
    <WordCarousel
      words={['Software Engineer.', 'Code Connoisseur.', 'Technology Templar.', 'Binary Bandit.', 'Programming Pirate.', 'Algorithm Antihero.', 'Design Darth Vadar.', 'HPC Heavyweight.']}
      slideFrom='above'
    />
  </div>

  {/* Second Line */}
  <div>
    Previously at <span className={'highlight'}>Lyft</span>, <span className={'highlight'}>Rangle.IO</span>, and <span className={'highlight'}>IBM Cloud</span>.
  </div>

  {/* Third Line */}
  <div>
    <div>Loves</div>
    <WordCarousel
      words={['Coffee.', 'Taming Lions.', 'Critiquing Impressionist Art.', 'Knocking Down Drywall.', 'Freshly Cut Lawns.', 'Building Gingerbread Houses.', 'Growing Tomatoes.', 'Finding Lost Treasure.', 'Long Walks On The Beach.']}
      slideFrom='below'
    />
  </div>

  <Links/>
</div>);
