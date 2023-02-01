import React from 'react';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={clsx(css.friendList)}>
    {friends.map(friend => (
      <li className={clsx(css.item)}>
        <span
          className={clsx(css.status, {
            [css.online]: friend.isOnline,
          })}
        ></span>
        <img
          className={clsx(css.avatar)}
          src={friend.avatar}
          alt="User avatar"
          width={48}
        />
        <p className={clsx(css.name)}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
