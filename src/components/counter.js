import React, {Component} from "react";
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(props){
        super(props);
    }

    increementIfOdd=()=>{
        if(this.props.value%2 !== 0){
            this.props.onIncreement()
        }
    }

    increementAsync=()=>{
        setTimeout(this.props.onIncreement,1000)
    }
    render(){
        const {value, onIncreement, onDecreement }= this.props;
        return(
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick= {onIncreement}>
                    +
                    </button>
                    <button onClick={onDecreement}>
                    -
                    </button>
                    <button onClick={this.increementIfOdd}>
                    Increement If Odd
                    </button>
                    <button onClick={this.increementAsync}>
                        Increement async
                    </button>
                </p>
        );
    }
}

export default Counter;