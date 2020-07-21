import React, { useState } from 'react';
import './sort.scss';

const orderArrows: any = {
  '1': '↑',
  '-1': '↓',
};

/**
 *
 * @param currentRepos - array of repos from GH endpoint
 * @param onSort - function, accepts newly sorted repos
 *
 */
function Sort(props: any) {
  const [currentKey, updateKey] = useState('');
  const [currentOrder, updateOrder] = useState(1);

  function sort(key: any) {
    const order = currentKey === key ? -1 : 1;

    const sortedRepos = [...props.currentRepos].sort((a, b) => {
      if (a[key] < b[key]) return -1 * order;
      if (a[key] > b[key]) return 1 * order;
      return 0;
    });

    if (key !== currentKey) {
      updateKey(key);
    }
    updateOrder(order);
    props.onSort(sortedRepos);
  }

  return (
    <div className="sortContainer">
      <button
        onClick={() => {
          sort('title');
        }}>
        {`Name ${currentKey === 'title' ? orderArrows[currentOrder] : ''}`}
      </button>
      <button
        onClick={() => {
          sort('stars');
        }}>
        {`Stars ${currentKey === 'stars' ? orderArrows[currentOrder] : ''}`}
      </button>
    </div>
  );
}

export default Sort;
