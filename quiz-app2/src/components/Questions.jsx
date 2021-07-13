import React, { Component } from 'react'
import './Questions.css'

export default class Questions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             questionNumber: 0,
             display: ""
        }
    }
    previous=()=>{
        console.log("clicking prev")
        this.setState({questionNumber: (this.state.questionNumber-1)>=0?(this.state.questionNumber-1):(this.state.questionNumber)})
    }
    next=()=>{
        console.log("clicking next")
        this.setState({questionNumber: (this.state.questionNumber+1)>=15?(this.state.questionNumber):(this.state.questionNumber+1)})
    }
    quit=()=>{
        this.setState({display: "none"})
    }
    displayQuestion(){
        return(
            <div className={this.state.display+" question-box"} key={this.props.value[this.state.questionNumber].id}>
                <h1 className="heading">Question</h1>
                <div className="questions">
                    <p><span>{this.props.value[this.state.questionNumber].id}</span> of 15</p>
                    <p>{this.props.value[this.state.questionNumber].question}</p>
                </div>
                <div className="choices">
                    <button className="choice">{this.props.value[this.state.questionNumber].optionA}</button>
                    <button className="choice">{this.props.value[this.state.questionNumber].optionB}</button>
                    <button className="choice">{this.props.value[this.state.questionNumber].optionC}</button>
                    <button className="choice">{this.props.value[this.state.questionNumber].optionD}</button>
                </div>
                <div className="changes">
                    <button className="blue" onClick={this.previous}>Previous</button>
                    <button className="green" onClick={this.next}>Next</button>
                    <button className="red" onClick={this.quit}>Quit</button>
                </div>
            </div>
        )
        // return this.props.value.map((value)=>
        // <div className="question-box" key={value.id}>
        //     <h1 className="heading">Question</h1>
        //     <div className="questions">
        //         <p><span>{value.id}</span> of 15</p>
        //         <p>{value.question}</p>
        //     </div>
        //     <div className="choices">
        //         <button className="choice">{value.optionA}</button>
        //         <button className="choice">{value.optionB}</button>
        //         <button className="choice">{value.optionC}</button>
        //         <button className="choice">{value.optionD}</button>
        //     </div>
        //     <div className="changes">
        //         <button className="blue" onClick={this.previous}>Previous</button>
        //         <button className="green" onClick={this.next}>Next</button>
        //         <button className="red">Quit</button>
        //     </div>
        // </div>
        // )
    }
    render() {
        return (
            <>
            {this.displayQuestion()}
            </>
        )
    }
}
