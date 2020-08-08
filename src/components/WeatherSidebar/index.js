import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Forecast from 'src/components/Forecast';
import { fetchForecast } from 'src/actions';
import { getForecastSelector, getCitySelector } from 'src/selectors/forecast';
import './style.scss';

const WeatherSidebar = () => {
  const dispatch = useDispatch();

  const forecast = useSelector(getForecastSelector);
  const city = useSelector(getCitySelector);
  useEffect(() => {
    dispatch(fetchForecast());
  }, []);


  return (
    <div className="weather-sidebar">
      {city && (
        <div className="weather-sidebar__city">
          {city.name} <span className="weather-sidebar__city__country"> | {city.country}</span>
        </div>
      )}
      {forecast.length !== 0 && (
        forecast.map(item => (
          <Forecast key={item.dt} item={item} />
        ))
      )}
    </div>
  );
}

export default WeatherSidebar;
