(this["webpackJsonpdevon-wrestling"]=this["webpackJsonpdevon-wrestling"]||[]).push([[0],{132:function(e,t,a){e.exports=a(259)},137:function(e,t,a){},138:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(30),r=a.n(o);a(137),a(138);var s=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"screenheader"},n.a.createElement("div",null,n.a.createElement("h1",null,"Devon Wrestling Timer"))),n.a.createElement("hr",null))},i=a(15),l=a(20),u=a(21),m=a(22),d=a(23),h=a(24),g=a(267),S=a(265),M=a(266),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={screenMode:a.props.screenMode},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.buttonColor,c=e.sideScore,o=e.scoreSide,r=e.mountScore,s=e.scoreMount,i=e.backScore,l=e.scoreBack,u=e.totalScore,m=e.scoringMode,d=e.side,h=(e.screenMode,"ui basic button"),b="ui basic button",f="ui basic button";return m=="".concat(d," side")?(h="ui active button",b="ui basic button",f="ui basic button"):m=="".concat(d," mount")?(h="ui basic button",b="ui active button",f="ui basic button"):m=="".concat(d," back")?(h="ui basic button",b="ui basic button",f="ui active button"):"waiting"==m&&(h="ui basic button",b="ui basic button",f="ui basic button"),n.a.createElement("div",{class:"control"},n.a.createElement("div",{class:"scoretitle"},n.a.createElement(g.a,{as:"h4",color:a},t)),n.a.createElement("div",{class:"scorebuttons"},n.a.createElement("div",{class:"scorebutton"}," ",n.a.createElement(S.a,{size:"massive",content:"Side ",onClick:o,color:a,className:h})," "),n.a.createElement("div",{class:"scorebutton"}," ",n.a.createElement(S.a,{size:"massive",content:"Mount",onClick:s,color:a,className:b})," "),n.a.createElement("div",{class:"scorebutton"}," ",n.a.createElement(S.a,{size:"massive",content:"Back ",onClick:l,color:a,className:f})," ")),n.a.createElement("div",{class:"scorebox"},n.a.createElement("div",{class:"positionscore"},n.a.createElement(M.a,{size:"tiny",color:a},n.a.createElement(M.a.Value,null,c),n.a.createElement(M.a.Label,null,"Side"))),n.a.createElement("div",{class:"positionscore"},n.a.createElement(M.a,{size:"tiny",color:a},n.a.createElement(M.a.Value,null,r),n.a.createElement(M.a.Label,null,"Mount"))),n.a.createElement("div",{class:"positionscore"},n.a.createElement(M.a,{size:"tiny",color:a},n.a.createElement(M.a.Value,null,i),n.a.createElement(M.a.Label,null,"Back"))),n.a.createElement("div",{class:"totalscore"},n.a.createElement(M.a,{color:a},n.a.createElement(M.a.Value,null,u),n.a.createElement(M.a.Label,null,"Total")))))}}]),t}(c.Component);var f=function(e){var t=Math.floor(e.timeRemaining/60),a=e.timeRemaining-60*t;return a<10&&(a="0".concat(a)),"matchended"==e.screenMode?n.a.createElement("div",{class:"maintimer"},n.a.createElement(M.a,{color:"black"},n.a.createElement(M.a.Value,null,t,":",a),n.a.createElement(M.a.Label,null,"MATCH OVER")),n.a.createElement(S.a,{size:"massive",onClick:e.startTimer,content:e.centralButton,icon:e.centralButtonIcon}),n.a.createElement(g.a,{as:"h1"},e.matchResult)):n.a.createElement("div",{class:"maintimer"},n.a.createElement(M.a,{color:"black"},n.a.createElement(M.a.Value,null,t,":",a),n.a.createElement(M.a.Label,null,"Time Remaining")),n.a.createElement(S.a,{size:"massive",onClick:e.startTimer,content:e.centralButton,icon:e.centralButtonIcon}))},E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).togglePreselect=function(){"preselect"==a.state.screenMode?a.setState({screenMode:"active"}):a.setState({screenMode:"preselect"})},a.startTestMatch=function(e){"preselect"==a.state.screenMode?a.setState({screenMode:"active",timeRemaining:e}):a.setState({screenMode:"preselect"})},a.startTimer=function(){switch(a.state.screenMode){case"active":a.setState({screenMode:"inprogress"}),a.setState({centralButton:"Pause",centralButtonIcon:"pause"});break;case"inprogress":a.setState({screenMode:"paused"}),a.setState({centralButton:"Resume",centralButtonIcon:"play"});break;case"paused":a.setState({screenMode:"inprogress"}),a.setState({centralButton:"Pause",centralButtonIcon:"pause"});break;case"matchended":a.setState({screenMode:"preselect",timeRemaining:111,leftMountScore:0,leftBackScore:0,leftSideScore:0,leftTotalScore:0,rightSideScore:0,rightMountScore:0,rightBackScore:0,rightTotalScore:0,scoringMode:"waiting",centralButton:"Start",centralButtonIcon:"play",matchResult:"DRAW"})}},a.endMatch=function(){a.state.timeRemaining<1&&(console.log("Match is over!"),a.setState({screenMode:"matchended",centralButton:"Reset",centralButtonIcon:"refresh"}),a.state.rightTotalScore>a.state.leftTotalScore?a.setState({matchResult:"RED WINS"}):a.state.rightTotalScore<a.state.leftTotalScore&&a.setState({matchResult:"BLUE WINS"}))},a.tick=function(){if("inprogress"==a.state.screenMode){switch(a.state.scoringMode){case"left side":a.setState({leftSideScore:a.state.leftSideScore+1});break;case"right side":a.setState({rightSideScore:a.state.rightSideScore+1});break;case"left mount":a.setState({leftMountScore:a.state.leftMountScore+1});break;case"right mount":a.setState({rightMountScore:a.state.rightMountScore+1});break;case"left back":a.setState({leftBackScore:a.state.leftBackScore+1});break;case"right back":a.setState({rightBackScore:a.state.rightBackScore+1})}a.setState({timeRemaining:a.state.timeRemaining-1,leftTotalScore:a.state.leftMountScore+a.state.leftBackScore+a.state.leftSideScore,rightTotalScore:a.state.rightMountScore+a.state.rightBackScore+a.state.rightSideScore})}},a.scoreLeftSide=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"left side"}):"left side"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.scoreLeftMount=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"left mount"}):"left mount"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.scoreLeftBack=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"left back"}):"left back"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.scoreRightSide=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"right side"}):"right side"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.scoreRightMount=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"right mount"}):"right mount"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.scoreRightBack=function(){"inprogress"==a.state.screenMode&&("waiting"==a.state.scoringMode?a.setState({scoringMode:"right back"}):"right back"==a.state.scoringMode&&a.setState({scoringMode:"waiting"}))},a.state={screenMode:"preselect",timeRemaining:111,leftMountScore:0,leftBackScore:0,leftSideScore:0,leftTotalScore:0,rightSideScore:0,rightMountScore:0,rightBackScore:0,rightTotalScore:0,scoringMode:"waiting",centralButton:"Start",centralButtonIcon:"play",matchResult:"DRAW"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return n.a.createElement("div",{class:"matchscreen"},n.a.createElement(b,{title:"Left Scores",side:"left",buttonColor:"blue",screenMode:this.state.screenMode,mountScore:this.state.leftMountScore,backScore:this.state.leftBackScore,sideScore:this.state.leftSideScore,scoreMount:this.scoreLeftMount,scoreBack:this.scoreLeftBack,scoreSide:this.scoreLeftSide,totalScore:this.state.leftTotalScore,scoringMode:this.state.scoringMode}),n.a.createElement(k,(e={time:"get from matchscreen.state",screenMode:this.state.screenMode,togglePreselect:this.togglePreselect,startTestMatch:this.startTestMatch,timeRemaining:this.state.timeRemaining,startTimer:this.startTimer},Object(i.a)(e,"screenMode",this.state.screenMode),Object(i.a)(e,"tick",this.tick),Object(i.a)(e,"endMatch",this.endMatch),Object(i.a)(e,"centralButton",this.state.centralButton),Object(i.a)(e,"centralButtonIcon",this.state.centralButtonIcon),Object(i.a)(e,"matchResult",this.state.matchResult),e)),n.a.createElement(b,{title:"Right Scores",side:"right",buttonColor:"red",screenMode:this.state.screenMode,mountScore:this.state.rightMountScore,backScore:this.state.rightBackScore,sideScore:this.state.rightSideScore,scoreMount:this.scoreRightMount,scoreBack:this.scoreRightBack,scoreSide:this.scoreRightSide,totalScore:this.state.rightTotalScore,scoringMode:this.state.scoringMode}))}}]),t}(n.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={screenMode:a.props.screenMode},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.props.tick()}),1e3),setInterval((function(){return e.props.endMatch()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.props,t=e.screenMode,a=e.timeRemaining,c=e.startTestMatch,o=e.centralButton,r=e.centralButtonIcon,s=e.startTimer,i=e.matchResult;return"preselect"==t?n.a.createElement(v,{startTestMatch:c}):n.a.createElement("div",null,n.a.createElement("div",{class:"control"},n.a.createElement(f,{timeRemaining:a,centralButton:o,centralButtonIcon:r,screenMode:t,startTimer:s,matchResult:i})))}}]),t}(c.Component);function v(e){return n.a.createElement("div",null,n.a.createElement("div",{class:"control"},n.a.createElement("div",{class:"preselect"},n.a.createElement(g.a,{as:"h3",color:"black"},"Select Match Length"),n.a.createElement("div",{class:"preselectbuttons"},n.a.createElement(S.a,{content:"3 minute match",onClick:function(){e.startTestMatch(180)}}),n.a.createElement(S.a,{content:"4 minute match",onClick:function(){e.startTestMatch(240)}}),n.a.createElement(S.a,{content:"5 minute match",onClick:function(){e.startTestMatch(300)}}),n.a.createElement(S.a,{content:"6 minute match",onClick:function(){e.startTestMatch(360)}}),n.a.createElement(S.a,{content:"7 minute match",onClick:function(){e.startTestMatch(420)}})))))}var p=E;var B=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.37c5d0d1.chunk.js.map