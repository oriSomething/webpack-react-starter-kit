import { COUNTER_INCREMENT } from "../../actions-type";


export default function counterIncrementAction() {
  return function(dispatch) {
    dispatch({
      type: COUNTER_INCREMENT,
      payload: null
    });
  };
}
