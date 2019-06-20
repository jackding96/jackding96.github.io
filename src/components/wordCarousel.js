import React from "react"
import wordCarouselStyles from "./wordCarousel.module.css"

class WordCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPos: wordCarouselStyles.current,
      firstText: 'Software Developer.',
      secondPos: wordCarouselStyles.after,
      secondText: 'Code Connoisseur.',
    };

    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {
    setInterval(this.changeTitle, 3000);
  }
  changeTitle() {
    this.setState({secondPos: this.state.secondPos == wordCarouselStyles.current ? wordCarouselStyles.after : wordCarouselStyles.current})
    this.setState({firstPos: this.state.firstPos == wordCarouselStyles.current ? wordCarouselStyles.after : wordCarouselStyles.current})
  }
  render() {
    return (
      <div className={wordCarouselStyles.test}>
        <span className={`${wordCarouselStyles.title} ${this.state.secondPos}`}>{this.state.secondText}</span>
        <span className={`${wordCarouselStyles.title} ${this.state.firstPos}`}>{this.state.firstText}</span>
      </div>
      
    );
  }
}

export default WordCarousel;