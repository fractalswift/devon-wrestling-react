import React from 'react';

import {Statistic, Button, Header} from 'semantic-ui-react'

function MatchTimer(props) {
    // convert the seconds into minutes and seconds
    let minutes = Math.floor(props.timeRemaining / 60);
    let seconds = props.timeRemaining - minutes * 60;
  
    // add a zero before single seconds so timer reads
    // 0:01 in stead of 0:1 etc
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    if (props.screenMode == "matchended") {
      return (
        <div class="maintimer">
          <Statistic color="black">
            <Statistic.Value>
              {minutes}:{seconds}
            </Statistic.Value>
            <Statistic.Label>MATCH OVER</Statistic.Label>
          </Statistic>
  
          <Button
            size="massive"
            onClick={props.startTimer}
            content={props.centralButton}
            icon={props.centralButtonIcon}
          />
  
          <Header as="h1">{props.matchResult}</Header>
        </div>
      );
    } else {
      return (
        <div class="maintimer">
          <Statistic color="black">
            <Statistic.Value>
              {minutes}:{seconds}
            </Statistic.Value>
            <Statistic.Label>Time Remaining</Statistic.Label>
          </Statistic>
  
          <Button
            size="massive"
            onClick={props.startTimer}
            content={props.centralButton}
            icon={props.centralButtonIcon}
          />
        </div>
      );
    }
  }

  export default MatchTimer;