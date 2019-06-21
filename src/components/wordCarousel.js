import React from "react"
import wordCarouselStyles from "./wordCarousel.module.css"

class WordCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.dir = this.props.slideFrom == "above" ? wordCarouselStyles.above : wordCarouselStyles.below;
    this.state = {
      firstPos: wordCarouselStyles.current,
      firstText: '',
      secondPos: this.dir,
      secondText: '',
    };
    this.i = 0;
    this.current = 1;

    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {
    this.setState({firstText: this.props.words[this.i]});
    setInterval(this.changeTitle, 3000);
  }
  changeTitle() {
    this.setState({secondPos: this.state.secondPos == wordCarouselStyles.current ? this.dir : wordCarouselStyles.current})
    this.setState({firstPos: this.state.firstPos == wordCarouselStyles.current ? this.dir : wordCarouselStyles.current})
    
    this.i++;
    if (this.current == 1) { // Currently, "first" is the current, "second" is moving in
      this.setState({ secondText : this.props.words[this.i % this.props.words.length] });
    } else { // Currently, "second" is the current, "first" is moving in
      this.setState({ firstText: this.props.words[this.i % this.props.words.length] });
    }
    this.current = this.current*-1;
    
  }
  render() {
    return (
      <div className={wordCarouselStyles.test}>
        <span className={`${wordCarouselStyles.title} ${this.state.secondPos}`}>
          {this.state.secondText}
        </span>
        <span className={`${wordCarouselStyles.title} ${this.state.firstPos}`}>
          {this.state.firstText}
        </span>
      </div>
    );
  }
}

export default WordCarousel;