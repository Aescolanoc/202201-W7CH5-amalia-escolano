import * as action from "./action-creator";
import { userReducer } from "./user-reducer";

test("userReducer", () => {
  const initialState = [];

  expect(userReducer(initialState, action.addUser()).name).toBe();
  expect(userReducer(initialState, action.removeUser()).name).toBe();
  expect(userReducer(initialState, action.updateUser()).name).toBe();
});
