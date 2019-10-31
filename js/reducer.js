let state

function changeState(state={count: 0}, action) {

		switch (action.type) {
			case "INCREASE_COUNT":
				return {count: state.count + 1};
			default:
				return state;
		}

}

function render() {

		document.body.textContent = state.count

}

function dispatch(action) {

		state = changeState(state, action);
		render();

}

dispatch({type: "@@INIT"})
