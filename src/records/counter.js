import { Record } from "immutable";


const properties = {
  counter: 0
};

export default class CounterRecord extends Record(properties) {
}
