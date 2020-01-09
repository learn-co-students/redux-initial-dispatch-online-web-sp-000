let state
//   1.) we declare (but not assign) state, starting off undefined



//     4.) changeState() is executed, passing thru two local variables:
//      state and action
//      action is defined because we passed { type: '@@INIT' } into dispatch
//      state is currently undefined, so, with that initial dispatch we are really calling:
//      changeState(undefined, { type: '@@INIT' })

//      5.) Because changeState() now has a default argument,
//       the state argument is set to { count: 0 }
//     6.) When changeState() executes, the switch statement executes the default case,
//       returning the value of state.
//       The code changeState(undefined, { type: '@@INIT' }) returns { count: 0 },
function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }



  //    3.) dispatch() calls changeState() reducer

//     6.) In dispatch(), when the changeState() reducer returns,
//        dispatch assigns the return value to state,
//        thus updating our state to the initial value of { count: 0 }.
//        On the next line, render() is called, displaying 0 in our HTML.
function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

//    2.) Dispatch action of @@INIT, calling dispatch() function
//      , passing it through initial action
dispatch({type: '@@INIT'})