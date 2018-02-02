import React from 'react';
import Question from './Question.jsx';
import $ from "jquery";
import moment from "moment";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			quizStarted:false,
		}
		this.onStartClick = this.onStartClick.bind(this)
		this.startQuiz = this.startQuiz.bind(this)
   }
   render() {
	   	if(this.state.quizStarted){
	   		return <Question data={this.state.data} startTime={moment().format('x')} startQuiz={this.startQuiz}/>
	   	}
      	return (
         	<div>
            	<button onClick={this.onStartClick}>Start Quiz!</button>
         	</div>
      	);
   }
   onStartClick(){
   		this.setState({quizStarted: true})
   }
   componentWillMount(){
   		this.getData()
   }	
   startQuiz(){
   		this.getData(true)
   }
   getData(start){
   		$.getJSON('https://opentdb.com/api.php?amount=10',function(res){
   			if(res.response_code == 0){
   				var obj = {}
   				if(start){
   					obj.quizStarted = true;
   				}
   				obj.data = res.results;
   				this.setState(obj)
   			}
   		}.bind(this))
   }
}
export default App;