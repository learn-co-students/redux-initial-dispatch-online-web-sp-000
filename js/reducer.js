let state;

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
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
//display 0 at load
dispatch({ type: '@@INIT' })

// -> changeState(undefined, {type: '@@INIT'})
  //default arg is used to set up initial state