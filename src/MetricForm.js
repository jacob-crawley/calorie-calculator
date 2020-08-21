import React from 'react';
import ReactDOM from 'react-dom';

export class MetricForm extends React.Component{
    render(){
        return (
            <div class="form-inputs">
                <label for="product_name">Weight</label>
                <input id="product_name"  type="text" maxlength="5" placeholder="(kg)" class="form-control"/>
            
                <label for="product_name">Age</label>
                <input id="product_name" type="text" maxlength="5" placeholder="(years)"class="form-control"/>

                <label for="product_name">Height</label>
                <input id="product_name" type="text" maxlength="5"class="form-control"/>
            </div>
        );
    }
}