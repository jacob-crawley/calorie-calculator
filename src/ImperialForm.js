import React from 'react';
import ReactDOM from 'react-dom';

export class ImperialForm extends React.Component{
    render(){
        return (
            <div class="form-inputs">
                <label for="product_name">Weight</label>
                <input id="product_name"  type="text" maxlength="5" class="form-control" placeholder="(lbs)"/>
            
                <label for="product_name">Age</label>
                <input id="product_name" type="number" maxlength="5" class="form-control" placeholder="(years)"/>
            
                
                <label for="product_name">Height - Feet</label>
                <input id="product_name" type="number" maxlength="5" class="form-control"/>
                <label for="product_name">Height - Inches</label>
                <input id="product_name" type="number" maxlength="5" class="form-control"/>
                
            </div>
        );
    }
}
