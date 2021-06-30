// let state = { count: 0 };
let state;

// state state argument to {count:0}
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

function render() {
  document.body.textContent = state.count
}

// for page to display 0 when it first loads
dispatch({ type: '@@INIT' })