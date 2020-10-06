let state;

function changeState(state = { count: 0 }, action){ // Add our default value into the argument to set the state equal to '0'
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

dispatch({ type: '@@INIT' }) // This allows us to start off our application with '0'.
