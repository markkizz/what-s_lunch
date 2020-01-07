import { createSelector } from "reselect";

const selectStateSearch = state => state.search.searchData;

export const selectSearchData = createSelector(selectStateSearch, data => data);
