import React, { Component } from 'react'
import './Questions.css'

export default class Questions extends Component {
    displayQuestion(){
        return this.props.value.map((value)=>
        <div className="question-box">
            <h1 className="heading">Question</h1>
            <div className="questions">
                <p><span>{value.id}</span> of 15</p>
                <p>{value.question}</p>
            </div>
            <div className="choices">
                <button className="choice">{value.optionA}</button>
                <button className="choice">{value.optionB}</button>
                <button className="choice">{value.optionC}</button>
                <button className="choice">{value.optionD}</button>
            </div>
            <div className="changes">
                <button className="blue">Previous</button>
                <button className="green">Next</button>
                <button className="red">Quit</button>
            </div>
        </div>
        )
    }
    render() {
        return (
            <>
            {this.displayQuestion()}
            </>
        )
    }
}
