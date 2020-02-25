import React, {Component} from 'react'

import {Button, Header} from 'semantic-ui-react'


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

  export default Preselect;