import { createSelector } from "reselect";

const selectStateUser = state => state.user;

export const selectUser = createSelector(selectStateUser, user => user);
