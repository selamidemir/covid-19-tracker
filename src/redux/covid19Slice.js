import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCovid19Data = createAsyncThunk('covid19/getAsyncInfected', async(country) => {
    let urlCountryInforation = '';
    if(country) urlCountryInforation = `/countries/${country}`;
    const res = await axios(`${process.env.REACT_APP_API_END_POINT}${urlCountryInforation}`);
    return res.data;
});

export const covid19Slice = createSlice({
    name: 'covid19',
    initialState: {
        infected: 0,
        recovered: 0,
        active: 'Unknown',
        deaths: 0,
        country: { "name": "Global", "iso2": null, "iso3": null},
        lastUpdated: '',
        graph: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload;
        }
    },
    extraReducers: {
        [getCovid19Data.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCovid19Data.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.infected = action.payload.confirmed.value;
            state.recovered = action.payload.confirmed.value - action.payload.deaths.value;
            state.deaths = action.payload.deaths.value;
            state.lastUpdate = action.payload.lastUpdate;
        }
    }
});

export const selectInfected = state => state.covid19.infected;
export const selectRecovered = state => state.covid19.recovered;
export const selectActive = state => state.covid19.active;
export const selectDeaths = state => state.covid19.deaths;
export const selectCountry = state => state.covid19.country;
export const selectGraphData = state => [
    state.covid19.infected,
    state.covid19.recovered, 
    state.covid19.deaths, 
    0
];
export const selectLastUpdate = state => {
   const d = new Date(state.covid19.lastUpdate);
   return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
}

export const { changeCountry } = covid19Slice.actions;
export default covid19Slice.reducer;