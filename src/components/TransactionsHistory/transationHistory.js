import React from 'react';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={clsx(css.transactionHistory)}>
    <thead className={clsx(css.header)}>
      <tr >
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={clsx(css.row)}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
