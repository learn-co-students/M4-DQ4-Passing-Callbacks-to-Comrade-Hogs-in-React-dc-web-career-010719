import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: (this.props.environment === "inhospitable"),
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
  }

  relax = () => {
    this.setState({panicked: false})
  }

  exclaim = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  panic = () => {
    if (this.state.panicked) return
    this.setState({panicked: true})
    setTimeout(this.relax, 3500)
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.panic}>
        {(this.state.panicked) ? this.exclaim() : null}
      </div>
    )
  }
}
