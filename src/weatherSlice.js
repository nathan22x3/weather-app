const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require('@reduxjs/toolkit');

export const fetchData = createAsyncThunk(
  'weather/fetchData',
  async ({ latitude, longitude }) => {
    const openWeatherApi = process.env.REACT_APP_OPEN_WEATHER_API;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherApi}`
    );
    const data = await res.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    location: null,
    temperatureScale: 'celsius',
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setTemperatureScale: (state, action) => {
      state.temperatureScale = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { reducer, actions } = weatherSlice;

export const { setLocation, setTemperatureScale } = actions;

export const getData = ({ weather }) => weather.data;
export const getLocation = ({ weather }) => weather.location;
export const getTemperatureScale = ({ weather }) => weather.temperatureScale;

export const getForecast = createSelector(getData, (data) =>
  data?.list?.filter(({ dt_txt }) => dt_txt.includes('18:00:00'))
);

export default reducer;
