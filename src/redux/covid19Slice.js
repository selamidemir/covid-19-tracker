import { createSlice } from "@reduxjs/toolkit";

export const covid19Slice = createSlice({
    name: 'covid19',
    initialState: {
        infected: 0,
        recovered: 0,
        active: 0,
        deaths: 0,
        country: { "name": "Global", "iso2": "GL", "iso3": "GLB"},
        lastUpdated: '12-07-2022',
        graph: null,
    },
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload;
        }
    }
});

export const selectInfected = state => state.covid19.infected;
export const selectRecovered = state => state.covid19.recovered;
export const selectActive = state => state.covid19.active;
export const selectDeaths = state => state.covid19.deaths;
export const selectCountry = state => state.covid19.country;
export const selectLastUpdate = state => state.covid19.lastUpdated;

export const { changeCountry } = covid19Slice.actions;
export default covid19Slice.reducer;