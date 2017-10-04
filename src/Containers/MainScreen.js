/* @flow */

import React from 'react';
import CategoryList from '../Components/CategoryList';
import CategoryItem from '../Components/CategoryItem';


const data = [
  {
    title: 'Row 1',
    id: 1,
  },
  {
    title: 'Row 2',
    id: 2,
  },
];

const MainScreen = () => (
  <CategoryList
    data={data}
    renderItem={CategoryItem}
  />
);

export default MainScreen;
