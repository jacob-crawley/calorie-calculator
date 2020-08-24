import React from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-minimal-pie-chart';

export class Result extends React.Component{
    constructor(props) {
        super(props);
        this.state = {weightType: '', weightValue: ''}
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.measurementType);
        if (props.measurementType == "metric"){
            return {weightType: 'kg', weightValue: 0.5}
        } else {
            return {weightType: 'lbs', weightValue: 1}
        }
        
    }

    render(){
        return(
            <div class="entry-form">
                <form>
                    <h2>{this.props.calories} calories</h2>
                    <p>To maintain your current weight</p>

                    <table class="table">
                        <tr>
                            <th> </th>
                            <th>Gain Weight</th>
                            <th>Lose Weight</th>
                        </tr>
                        <tr>
                            <td>{this.state.weightValue} {this.state.weightType} per week</td>
                            <td>{this.props.calories + 500}</td>
                            <td>{this.props.calories - 500}</td>
                        </tr>
                        <tr>
                            <td>{this.state.weightValue * 2} {this.state.weightType} per week</td>
                            <td>{this.props.calories + 1000}</td>
                            <td>{this.props.calories - 1000}</td>
                        </tr>
                    </table>
                    

                </form>
            </div>
        );
    }
}