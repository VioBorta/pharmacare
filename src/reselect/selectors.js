import { createSelector } from "reselect";

const selectAuthDomain = state => state.auth;


const makeSelectAuth = createSelector(
  selectAuthDomain,
);

export {
  makeSelectAuth,
};
