let state; //declaring our state but not define it so reducer can return our initial state

function changeState(state = { count: 0 }, action) { // reducer a default arg. state arg set to 0
  switch (action.type) { //executes the default case returning the value of state
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){ //assigns return value to state , updating our state
    state = changeState(state, action) //calls the change state reducer 
    render() //change state executed passing in local variables state and action
}

function render(){ //displaying 0 in our html 
    document.body.textContent = state.count
}



//dispatch({ type: '@@INIT' })
//console returns 0
//switch will return whatever state was passed into the changesstate function

dispatch({ type: '@@INIT' }) //dispatch an action 
//calls our dispatch function and passes through our initial action 
//calls the change state reducer 

//dispatch({ type: '@@INIT' })
//-> { count: 0 }
//dispatch({type: 'INCREASE_COUNT'})
//-> { count: 1 }