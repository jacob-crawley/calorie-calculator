import React from 'react';
import ReactDOM from 'react-dom';
import {MetricForm} from './MetricForm';
import {ImperialForm} from './ImperialForm';
import {ActivityLevel} from './ActivityLevel';


export class EntryForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: '' , age: '', weight: '', activity: '', measurement: '',
                    measurementSelected: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            measurement: event.target.value, measurementSelected: true
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
                {this.state.measurement == 'metric' && <MetricForm />}
                {this.state.measurement == 'imperial' && <ImperialForm />}
                {this.state.measurementSelected && <ActivityLevel />}
                {this.state.measurementSelected &&  
                <button type="submit" class="btn btn-primary" id="calculate-btn">Calculate my calories</button>}

                
                    
                
            </form>
          </div>
        );
    }
}