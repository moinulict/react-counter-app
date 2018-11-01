import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css';

class Counter extends Component {

    increment = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return (
            <div className='my-5'>
                <h2 className='text-center'>Simple Counter</h2>
                <div className='row justify-content-md-center my-5'>
                    <div className='col-1'>
                        <button className='btn btn-success' onClick={this.increment}><i className='fa fa-2x fa-plus'></i></button>
                    </div>
                    <div className='col-2 text-center font-30'>{this.props.counter}</div>
                    <div className='col-1'>
                        <button className='btn btn-danger' onClick={this.decrement}><i className='fa fa-2x fa-minus'></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter);