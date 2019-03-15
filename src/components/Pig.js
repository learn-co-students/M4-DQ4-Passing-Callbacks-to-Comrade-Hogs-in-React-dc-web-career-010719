import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {

  constructor(props) {
    super(props)
    this.state = {timedOut: false}
    this.audio = new Audio(this.props.exclaim)
  }


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

  delayPanic = () => {
    console.log('panic')
    setTimeout(() => {
      this.setState({timedOut: true})
      this.audio.play()
      console.log('delayed panic')
    }, 2000)
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.props.environment === 'inhospitable' && this.state.timedOut === false? this.delayPanic() : null}
        {this.state.timedOut === true ? this.panic() : null}
      </div>
    )
  }
}
