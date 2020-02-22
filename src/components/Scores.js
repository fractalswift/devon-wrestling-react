import React, {Component} from 'react';

import {Statistic, Button, Header} from 'semantic-ui-react'

class Scores extends Component {
    constructor(props) {
      super(props);
      this.state = {
        screenMode: this.props.screenMode
      };
    }
  
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
      } else if (scoringMode == "waiting") {
        buttonStateSide = "ui basic button";
        buttonStateMount = "ui basic button";
        buttonStateBack = "ui basic button";
      }
  
      return (
        <div className="control">
          <div className="scoretitle">
            <Header as="h4" color={buttonColor}>
              {title}
            </Header>
          </div>
  
          <div className="scorebuttons">
            <div className="scorebutton">
              {" "}
              <Button
                size="massive"
                content="Side "
                onClick={scoreSide}
                color={buttonColor}
                className={buttonStateSide}
              />{" "}
            </div>
  
            <div className="scorebutton">
              {" "}
              <Button
                size="massive"
                content="Mount"
                onClick={scoreMount}
                color={buttonColor}
                className={buttonStateMount}
              />{" "}
            </div>
  
            <div className="scorebutton">
              {" "}
              <Button
                size="massive"
                content="Back "
                onClick={scoreBack}
                color={buttonColor}
                className={buttonStateBack}
              />{" "}
            </div>
          </div>
  
          <div className="scorebox">
            <div className="positionscore">
              <Statistic size="tiny" color={buttonColor}>
                <Statistic.Value>{sideScore}</Statistic.Value>
                <Statistic.Label>Side</Statistic.Label>
              </Statistic>
            </div>
  
            <div className="positionscore">
              <Statistic size="tiny" color={buttonColor}>
                <Statistic.Value>{mountScore}</Statistic.Value>
                <Statistic.Label>Mount</Statistic.Label>
              </Statistic>
            </div>
  
            <div className="positionscore">
              <Statistic size="tiny" color={buttonColor}>
                <Statistic.Value>{backScore}</Statistic.Value>
                <Statistic.Label>Back</Statistic.Label>
              </Statistic>
            </div>
  
            <div className="totalscore">
              <Statistic color={buttonColor}>
                <Statistic.Value>{totalScore}</Statistic.Value>
                <Statistic.Label>Total</Statistic.Label>
              </Statistic>
            </div>
          </div>
        </div> // end control
      );
    }
  }

export default Scores;