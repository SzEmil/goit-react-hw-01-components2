import { Statistics } from './Statistics/statistics';
import data from '../components/Statistics/data.json';

import { Profile } from './Profile/profile';
import user from '../components/Profile/user.json';

import { FriendList } from './FriendList/friendList';
import friends from '../components/FriendList/friends.json';

import { TransactionHistory } from './TransactionsHistory/transationHistory';
import transactions from '../components/TransactionsHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
