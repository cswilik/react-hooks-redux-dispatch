function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };

function dispatch(action) {
  state = changeState(state, action);
  render();
}

dispatch({ type: "counter/increment" });
console.log(state)
dispatch({ type: "counter/increment" });
console.log(state)
dispatch({ type: "counter/increment" });
console.log(state)

function render() {
  document.body.textContent = state.count;
}

render()