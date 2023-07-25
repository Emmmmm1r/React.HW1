import react  from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0}
  }

  tick() {
    this.setState(state => ({
      second: state.second + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
        <div>
          Секунды: {this.state.seconds}
        </div>
    )
  }
}

export default Timer