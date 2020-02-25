import React, {Component} from 'react'

import MatchTimer from './MatchTimer'

import Preselect from './Preselect'



class MainTimerArea extends Component {
    constructor(props) {
      super(props);
      this.state = {
        screenMode: this.props.screenMode
      };
    }
  
    componentDidMount() {
      setInterval(() => this.props.tick(), 1000);
      setInterval(() => this.props.endMatch(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      // destructure props
  
      let {
        screenMode,
        timeRemaining,
        startTestMatch,
        centralButton,
        centralButtonIcon,
        startTimer,
        matchResult
      } = this.props;
  
      if (screenMode == "preselect") {
        return <Preselect startTestMatch={startTestMatch} />;
      } else {
        return (
          <div>
            <div className="control">
              <MatchTimer
                timeRemaining={timeRemaining}
                centralButton={centralButton}
                centralButtonIcon={centralButtonIcon}
                screenMode={screenMode}
                startTimer={startTimer}
                matchResult={matchResult}
              />
            </div>
          </div>
        );
      }
    }
  }
  
  

  export default MainTimerArea;