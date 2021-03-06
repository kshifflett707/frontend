import auth from "../authenticationReducer";


describe("auth Reducer", () => {
  it("should return a default state", () => {
    const state = {
      userInfo: {
        "createdAt": undefined, 
        "email": "notloggedin@gmail.com", 
        "id": 1, 
        "updatedAt": undefined, 
        "username": "not logged in!"
      },
      signedIn: false,
      error: false
    };
    expect(auth(undefined, { type: "UNEXPECTED" })).toEqual(state);
  });

/*  it("should return signIn: true for 'SIGN_IN_FULFILLED", () => {
    const state = {
      userInfo: {},
      signedIn: false,
      error: false
    };
    expect(
      auth(undefined, {
        type: "SIGN_IN_FULFILLED",
        payload: { data: { a: "1" } }
      })
    ).toEqual({
      ...state,
      signedIn: true,
      userInfo: { a: "1" }
    });
  });*/

/*  it("should return signIn: false for 'SIGN_IN_REJECTED", () => {
    const state = {
      userInfo: {},
      signedIn: false,
      error: false
    };
    expect(
      auth(undefined, {
        type: "SIGN_IN_REJECTED",
        payload: { error: { a: "1" } }
      })
    ).toEqual({
      ...state,
      error: { a: "1" }
    });
  });*/
  it("should return signIn: false for 'SIGN_OUT_REJECTED", () => {
    const state = {
      userInfo: {
        "createdAt": undefined, 
        "email": "notloggedin@gmail.com", 
        "id": 1, 
        "updatedAt": undefined, 
        "username": "not logged in!"
      },
      signedIn: false,
      error: false
    };
    expect(
      auth(undefined, {
        type: "SIGN_OUT_REJECTED",
        payload: { error: { a: "1" } }
      })
    ).toEqual({
      ...state,
      signedIn: true,
      error: { a: "1" }
    });
  });
  it("should return signIn: false for 'SIGN_OUT_FULFILLED", () => {
    const state = {
      userInfo: {},
      signedIn: false,
      error: false
    };
    expect(auth(undefined, { type: "SIGN_OUT_FULFILLED" })).toEqual({
      ...state,
      signedIn: false,
      userInfo: {}
    });
  });
/*  it("should return signIn: false for 'SIGN_UP_REJECTED", () => {
    const state = {
      userInfo: {},
      signedIn: false,
      error: false
    };
    expect(auth(undefined, { type: "SIGN_UP_REJECTED" })).toEqual({
      ...state
    });
  });*/
/*
  it("should return signIn: false for 'SIGN_UP_FULFILLED", () => {
    const state = {
      userInfo: {},
      signedIn: false,
      error: false
    };
    expect(auth(undefined, { type: "SIGN_UP_FULFILLED" })).toEqual({
      ...state
    });
  });*/
});
