import React from 'react';
// import data from './data.js';

class Question extends React.Component {
	constructor(props) {
		super();
		this.data = props.data;
		this.state = {
			currentQuestion:1,
			correctAnswer:0,
			questionData: props.data[0],
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
   			return <p>
   				Your Total score is: {this.state.correctAnswer}
   				<button onClick={this.startQuiz}>Start Again</button>
   			</p>
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
   	onPrevClick(){
   		var obj = {}
   		obj.currentQuestion = this.state.currentQuestion - 1
   		obj.questionData = this.data[obj.currentQuestion]
   		this.setState(obj)
   	}
   	onNextClick(){
   		var obj = {}
   		if(this.state.selectedOption == this.state.questionData.correct_answer){
   			obj.correctAnswer = this.state.correctAnswer + 1
   		}
   		obj.currentQuestion = this.state.currentQuestion + 1
   		obj.questionData = this.data[obj.currentQuestion]
   		this.setState(obj)
   	}
   	onSelectOption(e){
   		this.setState({selectedOption:e.target.value})
   	}
   	onFinishQuiz(){
   		this.setState({finished:true})
   		console.log("Finished..!")
   	}
   	startQuiz(){
   		this.setState({
   			currentQuestion:1,
			correctAnswer:0,
			questionData: this.props.data[0],
			finished: false
		})
   	}
}
export default Question;