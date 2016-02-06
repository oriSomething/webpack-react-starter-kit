import { COUNTER_INCREMENT } from "../actions-type";
import CounterRecord from "../records/counter";


function getInitialState() {
  return new CounterRecord();
}

export default function counter(state = getInitialState(), action) {
  switch (action.type) {
  case COUNTER_INCREMENT:
    return state.set("counter", state.counter + 1);
  default:
    return state;
  }
}
