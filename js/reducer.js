let state; //At the top of the file, we declare but do not assign our state, so it starts off undefined.
 
function changeState(state = { count: 0 }, action) {
    switch (action.type) {
 
      case 'INCREASE_COUNT':
        return { count: state.count + 1 }
 
      default:
        return state;
    }
}

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({type: '@@INIT'})

// We learned that by dispatching an initial action of type '@@INIT' we get two benefits: an initial rendering of the state, and the ability 
// We set our initial state in our reducer by using a default argument for the state parameter.
// Because state is not initially defined, dispatching an action assigns our state to that default value, and then sets state as the default.
