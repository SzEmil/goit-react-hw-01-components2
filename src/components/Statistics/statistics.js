import React from 'react';
import clsx from 'clsx';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const statWidth = 400;
export const Statistics = ({ title, data }) => (
  <section className={clsx(css.statistics)} style={{ width: statWidth + 'px' }}>
    {title !== undefined && <h2 className={clsx(css.title)}>{title}</h2>}
    <ul className={clsx(css.statList)}>
      {data.map(stats => (
        <li
          className={clsx(css.item)}
          key={stats.id}
          style={{
            backgroundColor: getRandomHexColor(),
            width: statWidth / 4 + 'px',
          }}
        >
          <span className={clsx(css.label)}>{stats.label}</span>
          <span className={clsx(css.percentage)}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
