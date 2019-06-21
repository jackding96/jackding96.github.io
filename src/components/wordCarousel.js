import React from "react"
import wordCarouselStyles from "./wordCarousel.module.css"

class WordCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPos: wordCarouselStyles.current,
      firstText: '',
      secondPos: wordCarouselStyles.after,
      secondText: '',
    };
    this.list = props.words
    this.i = 0;
    this.current = 1;

    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {
    this.setState({firstText: this.list[this.i]});
    setInterval(this.changeTitle, 3000);
  }
  changeTitle() {
    this.setState({secondPos: this.state.secondPos == wordCarouselStyles.current ? wordCarouselStyles.after : wordCarouselStyles.current})
    this.setState({firstPos: this.state.firstPos == wordCarouselStyles.current ? wordCarouselStyles.after : wordCarouselStyles.current})
    
    this.i++;
    if (this.current == 1) { // Currently, "first" is the current, "second" is moving in
      this.setState({ secondText : this.list[this.i % this.list.length] });
    } else { // Currently, "second" is the current, "first" is moving in
      this.setState({ firstText: this.list[this.i % this.list.length] });
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