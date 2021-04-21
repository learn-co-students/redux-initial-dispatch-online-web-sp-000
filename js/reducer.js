//let our state equal nothing 
let state;

//here we are assigning our initial state as a default arg
function changeState(state = { count: 0 }, action) {
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

//renders initial state 
render();

//if we call dispatch({ type: '@@INIT' }) iin the console we will render initial state. @@INIT is meaningless. 
//then call dispatch({type: "INCREASE_COUNT"}) to get count which is equal to changeState(undefined, { type: `@@INIT`})