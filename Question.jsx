import React from 'react';
import moment from 'moment';
   
class Question extends React.Component {
	constructor(props) {
      console.log("Saved")
		super();
		this.data = props.data;
		this.state = {
			currentQuestion:1,
			correctAnswer:0,
			finished: false
		}
		this.onPrevClick = this.onPrevClick.bind(this)
		this.onNextClick = this.onNextClick.bind(this)
		this.onSelectOption = this.onSelectOption.bind(this)
		this.onFinishQuiz = this.onFinishQuiz.bind(this)
		this.startQuiz = this.startQuiz.bind(this)		
   	}
   	render() {
   		if(this.state.finished){
   			var second = moment().diff(parseInt(this.props.startTime),'seconds');
   			console.log(second)
   			var totalTime = parseInt(second/60) + " Minutes "+ (second%60) + " Seconds"
   			return <div>
   				<p>Your Total score is: {this.state.correctAnswer}</p>
   				<p>Your Total time is: {totalTime}</p>
   				<button onClick={this.startQuiz}>Start Again</button>
   			</div>
   		}
   		var questionData = this.data[this.state.currentQuestion-1]
   		questionData = JSON.parse(JSON.stringify(questionData))
   		questionData.incorrect_answers.push(questionData.correct_answer)
   		var options = questionData.incorrect_answers;
      	return (
         	<div>
         		<div>
         			<button disabled={this.state.currentQuestion == 1 ? true : false} onClick={this.onPrevClick}>Prev</button>
         			<button disabled={this.state.currentQuestion == this.data.length ? true : false} onClick={this.onNextClick}>Next</button>
         		</div>
            	<p>{questionData.question}</p>
            	{options.map(function(option,i) {
            		let key = option.replace(/ /g,'')
            		return	<label key={i}>
			        	<input type="radio" value={option} checked={this.state.selectedOption === option} onChange={this.onSelectOption}/>
			        	{option}
			        </label>
            	}.bind(this))}
            	{this.state.currentQuestion == this.data.length ? 
            		<div>
            			<button disabled={this.state.currentQuestion == 1 ? true : false} onClick={this.onFinishQuiz}>Finish!</button>
            		</div> : null
            	}
         	</div>
      	);
   	}
   	componentWillReceiveProps(nextProps){
   		this.data = nextProps.data;
   		this.state = {
			currentQuestion:1,
			correctAnswer:0,
			finished: false
		}
   	}
   	onPrevClick(){
   		var obj = {}
   		obj.currentQuestion = this.state.currentQuestion - 1
   		this.setState(obj)
   	}
   	onNextClick(){
   		var obj = {}
   		var questionData = this.data[this.state.currentQuestion-1]
   		if(this.state.selectedOption == questionData.correct_answer){
   			obj.correctAnswer = this.state.correctAnswer + 1
   		}
   		obj.currentQuestion = this.state.currentQuestion + 1
   		this.setState(obj)
   	}
   	onSelectOption(e){
   		this.setState({selectedOption:e.target.value})
   	}
   	onFinishQuiz(){
   		var questionData = this.data[this.state.currentQuestion-1]
   		if(this.state.selectedOption == questionData.correct_answer){
   			this.setState({finished:true, correctAnswer: this.state.correctAnswer + 1})
   		}
   		else{
   			this.setState({finished:true})	
   		}
   		console.log("Finished..!")
   	}
   	startQuiz(){
  //  		this.setState({
  //  			currentQuestion:1,
		// 	correctAnswer:0,
		// 	questionData: this.props.data[0],
		// 	finished: false
		// })
		this.props.startQuiz();
   	}
}
export default Question;