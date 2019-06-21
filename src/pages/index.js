import React from "react"
import Links from "../components/links.js"
import ProfileImage from "../components/profileImage.js"
import WordCarousel from "../components/wordCarousel.js"

export default () => (<div>
  <ProfileImage/>

  <div><span className={'highlight'}>Jack Ding</span> is a 
    <WordCarousel
      words={['Software Engineer.', 'Code Connoisseur.', 'Technology Templar.', 'Binary Bandit.', 'Programming Pirate.', 'Algorithm Antihero.', 'Design Darth Vadar.', 'HPC Heavyweight.']}
      
    />
  </div>
  <div>Previously at <span className={'highlight'}>Lyft</span>, <span className={'highlight'}>Rangle.IO</span>, and <span className={'highlight'}>IBM Cloud</span>.</div>
  <div>Loves
    <WordCarousel
      words={['Coffee.', 'Taming Lions.', 'Critiquing Impressionist Art.', 'Knocking Down Drywall.', 'Freshly Cut Lawns.', 'Building Gingerbread Houses.', 'Growing Tomatoes.']}
    />
  </div>

  <Links/>
</div>);
