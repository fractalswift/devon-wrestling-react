import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Statistic, Button } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div className="screenheader">Header</div>
      <MatchScreen />
    </div>
  );
}

export default App;

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
      matchResult: 'DRAW'
    };
  }

  //states = mode :preselect/ready

  //timeRemaning
  //scores for left and right

  togglePreselect = () => {
    if (this.state.screenMode == "preselect") {
      this.setState({ screenMode: "active" });
    } else {
      this.setState({ screenMode: "preselect" });
    }
  };

  startTestMatch = () => {
    if (this.state.screenMode == "preselect") {
      this.setState({ screenMode: "active" });
      this.setState({ timeRemaining: 4 });
      console.log("selected test match...");
    } else {
      this.setState({ screenMode: "preselect" });
    }
  };

  startTimer = () => {
    switch (this.state.screenMode) {
      case "active":
        this.setState({ screenMode: "inprogress" });
        this.setState({ centralButton: "Pause", centralButtonIcon: 'pause' });
        break;

      case "inprogress":
        this.setState({ screenMode: "paused" });
        this.setState({ centralButton: "Resume", centralButtonIcon: 'play' });
        break;

      case "paused":
        this.setState({ screenMode: "inprogress" });
        this.setState({ centralButton: "Pause", centralButtonIcon: 'pause' });
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
          centralButtonIcon:"play",
          matchResult: 'DRAW'
        })
    }

    // Start the timer - will need to change parent timeRemaining state
    // or let tick do that, and instead just change parent
    // timerMode
  };

  endMatch = () => {
    if (this.state.timeRemaining < 1) {
      console.log("Match is over!");
      this.setState({ screenMode: "matchended" });
      this.setState({ centralButton: "Reset", centralButtonIcon: 'refresh' });

      if(this.state.rightTotalScore > this.state.leftTotalScore){

        this.setState({matchResult: 'RED WINS'})
      } else if(this.state.rightTotalScore < this.state.leftTotalScore){

        this.setState({matchResult: 'BLUE WINS'})
    }
  }};

  tick = () => {
    console.log("tick invoked");
    if (this.state.screenMode == "inprogress") {
      console.log("match in progress");
      
      // count the scores
      switch(this.state.scoringMode) {

        case 'left side':
          this.setState({leftSideScore : this.state.leftSideScore + 1})
          break;
        case 'right side':
          this.setState({rightSideScore : this.state.rightSideScore + 1})
          break;
        case 'left mount':
          this.setState({leftMountScore : this.state.leftMountScore + 1})
          break;
          case 'right mount':
          this.setState({rightMountScore : this.state.rightMountScore + 1})
          break;
        case 'left back':
          this.setState({leftBackScore : this.state.leftBackScore + 1})
          break;
        case 'right back':
          this.setState({rightBackScore : this.state.rightBackScore + 1})
          break;

      }
        // add the scores to display total
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
    if(this.state.screenMode == 'inprogress'){
    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "left side" });
    } else if (this.state.scoringMode == "left side") {
      this.setState({ scoringMode: "waiting" });
    }
  }};
  scoreLeftMount = () => {
    if(this.state.screenMode == 'inprogress'){

    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "left mount" });
    } else if (this.state.scoringMode == "left mount") {
      this.setState({ scoringMode: "waiting" });
    }
  }};
  scoreLeftBack = () => {
    if(this.state.screenMode == 'inprogress'){

    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "left back" });
    } else if (this.state.scoringMode == "left back") {
      this.setState({ scoringMode: "waiting" });
    }
  }};


  scoreRightSide = () => {
    if(this.state.screenMode == 'inprogress'){

    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "right side" });
    } else if (this.state.scoringMode == "right side") {
      this.setState({ scoringMode: "waiting" });
    }
  }};

  scoreRightMount = () => {
    if(this.state.screenMode == 'inprogress'){

    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "right mount" });
    } else if (this.state.scoringMode == "right mount") {
      this.setState({ scoringMode: "waiting" });
    }
  }};
  scoreRightBack = () => {
    if(this.state.screenMode == 'inprogress'){

    if (this.state.scoringMode == "waiting") {
      this.setState({ scoringMode: "right back" });
    } else if (this.state.scoringMode == "right back") {
      this.setState({ scoringMode: "waiting" });
    }
  }};

 

  render() {
    return (
      <div class="matchscreen">
        <Scores
          title={"Left Scores"}
          side='left'
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
          side='right'
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

      //timeRemaining: this.props.matchLength
    };
  }
  // State = Mode: matchSelect/MatchPlay as props from Matchscren state

  // STate = Timeremaining: get from Matchcreen parent

  // Method: Change time remaining OR ready/match finished on matchscreen parent
  //( it needs to do it on parent as scores need to know whether to keep goin
  // and they can only receive that from mutual parent)

  // Preselect screen method for changing parent state

  componentDidMount() {
    setInterval(() => this.props.tick(), 1000);
    setInterval(() => this.props.endMatch(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  goToReadyScreen = timeToSet => {
    // Change matchscreen.stte to active and change timeRemaning based
    //on input
  };

  pauseTimer = () => {
    console.log("timer paused");
    // Pause timer
  };

  render() {
    let screenMode = this.props.screenMode;

    let timeRemaining = this.props.timeRemaining;

    const togglePreselect = this.props.togglePreselect;

    const startTestMatch = this.props.startTestMatch;

    console.log(screenMode);

    if (screenMode == "preselect") {
      return (
        <Preselect
          togglePreselect={togglePreselect}
          startTestMatch={startTestMatch}
        />
      );
    } else {
      return (
        <div>
          <div class="control">
            <MatchTimer
              timeRemaining={timeRemaining}
              centralButton={this.props.centralButton}
              centralButtonIcon={this.props.centralButtonIcon}
              screenMode={this.props.screenMode}
              startTimer={this.props.startTimer}
              matchResult={this.props.matchResult}
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
      <div class="control">
        <p>Preselect layout</p>
        <button onClick={props.togglePreselect}>Go to active</button>
        <br />

        <button onClick={props.startTestMatch}>Test match</button>
        <br />
        <button>5 minute match</button>
        <br />
        <button>6 minute match</button>
        <br />
      </div>
    </div>
  );
}

function MatchTimer(props) {

if(props.screenMode == 'matchended') {

  return (
    <div>
    <div>THE MATCH IS OVER!!</div>
    <div>{props.timeRemaining}</div>
    <Button 
    onClick={props.startTimer}
    content= {props.centralButton}
    icon={props.centralButtonIcon}
    />

    <div>The result is {props.matchResult}</div>
    
    </div>
  )

} else {


  return (
    <div>
      <div>STATUS: {props.screenMode}</div>
      <div>{props.timeRemaining}</div>
      <Button 
    onClick={props.startTimer}
    content= {props.centralButton}
    icon={props.centralButtonIcon}
    />
    </div>
  );
}
} 

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenMode: this.props.screenMode
      //timeRemaining: this.props.matchLength
    };
  }
  // State: inactive or active, receive as props from Matchtimer state

  // Method: Change all leftscore states on Matchtimer parent

  render() {
    // destructure the props
    const {
      title,
      buttonColor,
      sideScore,
      scoreSide,
      mountScore,
      scoreMount,
      backScore,
      scoreBack,
      totalScore,
      scoringMode,
      side,
      screenMode
    } = this.props;

    let buttonStateSide = "ui basic button";
    let buttonStateMount = "ui basic button";
    let buttonStateBack = "ui basic button";

   

    // set the button states


    if (scoringMode == `${side} side`) {
      buttonStateSide = "ui active button";
      buttonStateMount = "ui basic button";
      buttonStateBack = "ui basic button";
    } else if (scoringMode == `${side} mount`) {
      buttonStateSide = "ui basic button";
      buttonStateMount = "ui active button";
      buttonStateBack = "ui basic button";
    } else if (scoringMode == `${side} back`) {
      buttonStateSide = "ui basic button";
      buttonStateMount = "ui basic button";
      buttonStateBack = "ui active button";
    } else if (scoringMode == 'waiting') {
      buttonStateSide = "ui basic button";
      buttonStateMount = "ui basic button";
      buttonStateBack = "ui basic button";
    }
    




 
    return (
      <div class="control">
        <div>{title}</div>

        <div>{sideScore}</div>
        <Button
          content="Score Side"
          onClick={scoreSide}
          color={buttonColor}
          className={buttonStateSide}
        />

        <div>{mountScore}</div>
        <Button
          content="Score Mount"
          onClick={scoreMount}
          color={buttonColor}
          className={buttonStateMount}
        />

        <div>{backScore}</div>
        <Button
          content="Score Back"
          onClick={scoreBack}
          color={buttonColor}
          className={buttonStateBack}
        />

        <div>TOTAL</div>
        <div>{totalScore}</div>

      </div> // end control
    );
  }
}
