import React, {Component} from 'react';

import { Button, Header} from 'semantic-ui-react'

import Scores from './Scores'
import MatchTimer from './MatchTimer'


class MatchScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        screenMode: "preselect",
        timeRemaining: 111,
        leftMountScore: 0,
        leftBackScore: 0,
        leftSideScore: 0,
        leftTotalScore: 0,
        rightSideScore: 0,
        rightMountScore: 0,
        rightBackScore: 0,
        rightTotalScore: 0,
        scoringMode: "waiting",
        centralButton: "Start",
        centralButtonIcon: "play",
        matchResult: "DRAW"
      };
    }
  
    // togglePreselect - possible use in later version
  
    togglePreselect = () => {
      if (this.state.screenMode == "preselect") {
        this.setState({ screenMode: "active" });
      } else {
        this.setState({ screenMode: "preselect" });
      }
    };
  
    startTestMatch = matchTime => {
      if (this.state.screenMode == "preselect") {
        this.setState({ screenMode: "active",  timeRemaining: matchTime  });
      } else {
        this.setState({ screenMode: "preselect" });
      }
    };
  
    startTimer = () => {
      switch (this.state.screenMode) {
        case "active":
          this.setState({ screenMode: "inprogress" });
          this.setState({ centralButton: "Pause", centralButtonIcon: "pause" });
          break;
  
        case "inprogress":
          this.setState({ screenMode: "paused" });
          this.setState({ centralButton: "Resume", centralButtonIcon: "play" });
          break;
  
        case "paused":
          this.setState({ screenMode: "inprogress" });
          this.setState({ centralButton: "Pause", centralButtonIcon: "pause" });
          break;
  
        case "matchended":
          this.setState({
            screenMode: "preselect",
            timeRemaining: 111,
            leftMountScore: 0,
            leftBackScore: 0,
            leftSideScore: 0,
            leftTotalScore: 0,
            rightSideScore: 0,
            rightMountScore: 0,
            rightBackScore: 0,
            rightTotalScore: 0,
            scoringMode: "waiting",
            centralButton: "Start",
            centralButtonIcon: "play",
            matchResult: "DRAW"
          });
      }
    };
  
    endMatch = () => {
      if (this.state.timeRemaining < 1) {
        console.log("Match is over!");
        this.setState({
          screenMode: "matchended",
          centralButton: "Reset",
          centralButtonIcon: "refresh"
        });
  
        if (this.state.rightTotalScore > this.state.leftTotalScore) {
          this.setState({ matchResult: "RED WINS" });
        } else if (this.state.rightTotalScore < this.state.leftTotalScore) {
          this.setState({ matchResult: "BLUE WINS" });
        }
      }
    };
  
    tick = () => {
      if (this.state.screenMode == "inprogress") {
        // count the scores
        switch (this.state.scoringMode) {
          case "left side":
            this.setState({ leftSideScore: this.state.leftSideScore + 1 });
            break;
          case "right side":
            this.setState({ rightSideScore: this.state.rightSideScore + 1 });
            break;
          case "left mount":
            this.setState({ leftMountScore: this.state.leftMountScore + 1 });
            break;
          case "right mount":
            this.setState({ rightMountScore: this.state.rightMountScore + 1 });
            break;
          case "left back":
            this.setState({ leftBackScore: this.state.leftBackScore + 1 });
            break;
          case "right back":
            this.setState({ rightBackScore: this.state.rightBackScore + 1 });
            break;
        }
        // add up the scores to display total score
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
  
          leftTotalScore:
            this.state.leftMountScore +
            this.state.leftBackScore +
            this.state.leftSideScore,
  
          rightTotalScore:
            this.state.rightMountScore +
            this.state.rightBackScore +
            this.state.rightSideScore
        });
      }
    };
  
    scoreLeftSide = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "left side" });
        } else if (this.state.scoringMode == "left side") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
    scoreLeftMount = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "left mount" });
        } else if (this.state.scoringMode == "left mount") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
    scoreLeftBack = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "left back" });
        } else if (this.state.scoringMode == "left back") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
  
    scoreRightSide = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "right side" });
        } else if (this.state.scoringMode == "right side") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
  
    scoreRightMount = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "right mount" });
        } else if (this.state.scoringMode == "right mount") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
    scoreRightBack = () => {
      if (this.state.screenMode == "inprogress") {
        if (this.state.scoringMode == "waiting") {
          this.setState({ scoringMode: "right back" });
        } else if (this.state.scoringMode == "right back") {
          this.setState({ scoringMode: "waiting" });
        }
      }
    };
  
    render() {
      return (
        <div className="matchscreen">
          <Scores
            title={"Left Scores"}
            side="left"
            buttonColor="blue"
            screenMode={this.state.screenMode}
            mountScore={this.state.leftMountScore}
            backScore={this.state.leftBackScore}
            sideScore={this.state.leftSideScore}
            scoreMount={this.scoreLeftMount}
            scoreBack={this.scoreLeftBack}
            scoreSide={this.scoreLeftSide}
            totalScore={this.state.leftTotalScore}
            scoringMode={this.state.scoringMode}
          />
  
          <MainTimerArea
            time={"get from matchscreen.state"}
            screenMode={this.state.screenMode}
            togglePreselect={this.togglePreselect}
            startTestMatch={this.startTestMatch}
            timeRemaining={this.state.timeRemaining}
            startTimer={this.startTimer}
            screenMode={this.state.screenMode}
            tick={this.tick}
            endMatch={this.endMatch}
            centralButton={this.state.centralButton}
            centralButtonIcon={this.state.centralButtonIcon}
            matchResult={this.state.matchResult}
          />
  
          <Scores
            title={"Right Scores"}
            side="right"
            buttonColor="red"
            screenMode={this.state.screenMode}
            mountScore={this.state.rightMountScore}
            backScore={this.state.rightBackScore}
            sideScore={this.state.rightSideScore}
            scoreMount={this.scoreRightMount}
            scoreBack={this.scoreRightBack}
            scoreSide={this.scoreRightSide}
            totalScore={this.state.rightTotalScore}
            scoringMode={this.state.scoringMode}
          />
        </div>
      );
    }
  }
  
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
  
  function Preselect(props) {
    return (
      <div>
        <div className="control">
          <div className="preselect">
            <Header as="h3" color="black">
              Select Match Length
            </Header>
  
            <div className="preselectbuttons">
              <Button
                content="3 minute match"
                onClick={() => {
                  props.startTestMatch(180);
                }}
              />
              <Button
                content="4 minute match"
                onClick={() => {
                  props.startTestMatch(240);
                }}
              />
              <Button
                content="5 minute match"
                onClick={() => {
                  props.startTestMatch(300);
                }}
              />
              <Button
                content="6 minute match"
                onClick={() => {
                  props.startTestMatch(360);
                }}
              />
              <Button
                content="7 minute match"
                onClick={() => {
                  props.startTestMatch(420);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
export default MatchScreen;  