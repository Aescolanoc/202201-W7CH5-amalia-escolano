import * as action from "./action-creator";
import { sessionReducer } from "./session-reducer";

test("sessionReducer", () => {
  const initialState = [];
  expect(sessionReducer(initialState, action.login()).isLogged).toBe(true);
  expect(sessionReducer(initialState, action.logout()).isLogged).toBe(undefined);
});
