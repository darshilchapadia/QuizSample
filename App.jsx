import React from 'react';
import Question from './Question.jsx';
import $ from "jquery";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			quizStarted:false,
		}
		this.onStartClick = this.onStartClick.bind(this)
   }
   render() {
	   	if(this.state.quizStarted){
	   		return <Question data={this.state.data}/>
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
   		$.getJSON('https://opentdb.com/api.php?amount=10',function(res){
   			if(res.response_code == 0){
   				this.setState({data:res.results})
   			}
   		}.bind(this))
   }
}
export default App;