import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/counter';
import counter from './reducers';

const store = createStore(counter)
const rootE1= document.getElementById('root')

const render=()=> ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncreement={()=> store.dispatch({ type: 'INCREEMENT'})}
    onDecreement={()=> store.dispatch({ type: 'DECREEMENT'})}
    />
, rootE1
)

render()
store.subscribe(render)