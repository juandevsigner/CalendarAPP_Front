import {
  authSlice,
  clearErrorMessage,
  onLogin,
  onLogout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authStates";
import { testUserCredentials } from "../../fixtures/testUser";

describe("Test authSlice", () => {
  it("Should have default state", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  it("Should do Loging", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    console.log(state);
    expect(state).toEqual({
      status: "authenticated",
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  it("Should do Log Out + error message", () => {
    const errorMessage = "Credentials not valid";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: "not-authenticated", //'authenticated', 'not-authenticated'
      user: {},
      errorMessage,
    });
  });
  it("Should cleaning error", () => {
    const errorMessage = "Credentials not valid";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const clearError = authSlice.reducer(state, clearErrorMessage());
    expect(clearError.errorMessage).toBeUndefined();
  });
});
