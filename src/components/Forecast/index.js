import React from 'react';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';

import { baseUrl } from 'src/const/forecast';

import './style.scss';

const Forecast = ({ item }) => {
  const warm = item.main.temp >= 25;
  return (
    <div className="forecast" data-tip={`Real feel: ${item.main.feels_like}`}>
      <div className={cx({
        'forecast--warm': warm,
        'forecast--cold': !warm,
      })}>
        <div className="forecast__weather">
          <img
            src={`${baseUrl}/img/wn/${item.weather[0].icon}.png`}
            className="forecast__weather__icon"
            alt={item.weather[0].description}
          />
          <p className="forecast__weather__name">{item.weather[0].main}</p>
        </div>
        <div className="forecast__main">
          <div className="forecast__main__item">
            <p className="forecast__main__item__label">Temperature</p>
            <p className="forecast__main__item__value">{item.main.temp} &#8451;</p>
          </div>
        </div>
        <p className="forecast__date">{item.dt_txt}</p>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default Forecast;
