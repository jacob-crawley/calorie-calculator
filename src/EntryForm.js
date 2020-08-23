import React from 'react';
import ReactDOM from 'react-dom';
import {MetricForm} from './MetricForm';
import {ImperialForm} from './ImperialForm';
import {ActivityLevel} from './ActivityLevel';


export class EntryForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { age: '', weight: '', activity: '', height: '', measurement: '',
                    measurementSelected: false};
        this.handleChange = this.handleChange.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
    }

    handleChange(event){
        this.setState({
            measurement: event.target.value, measurementSelected: true
        });
    }

    changeWeight(newWeight){
        this.setState({
            weight: newWeight
        });
    }

    changeAge(newAge){
        this.setState({
            age: newAge
        })
    }

    changeHeight(newHeight){
        this.setState({
            height: newHeight
        })
    }

    changeActivity(newActivity) {
        this.setState({
            activity: newActivity
        });
    }

    render() {
        return (
          <div class="entry-form">
            <form>
                <p>Select unit of measurement:</p>
                <div class="measurement-choice">
                    <input type="radio" id="metric" value="metric" checked={this.state.measurement == "metric"} onChange={this.handleChange}/>
                    <label for="metric">Metric (kg/cm)</label>
                    <input type="radio" id="imperial"  value="imperial" checked={this.state.measurement == "imperial"}onChange={this.handleChange}/>
                    <label for="female">Imperial (lbs/feet+inches)</label>
                </div>
                {this.state.measurement == 'metric' && <MetricForm weightChange={this.changeWeight} ageChange={this.changeAge} heightChange={this.changeHeight}/>}
                {this.state.measurement == 'imperial' && <ImperialForm weightChange={this.changeWeight} ageChange={this.changeAge} heightChange={this.changeHeight}/>}
                {this.state.measurementSelected && <ActivityLevel onChange={this.changeActivity}/>}
                {this.state.measurementSelected &&  
                <button type="submit" class="btn btn-primary" id="calculate-btn">Calculate my calories</button>}
                <p>{this.state.height}</p>
            </form>
          </div>
        );
    }
}