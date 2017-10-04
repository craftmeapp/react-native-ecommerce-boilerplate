// @flow

import React from 'react';
import { Text } from 'react-native';


const CategoryItem = ({ item: { title, id } }) => (
  <Text key={id}>
    {title}
  </Text>
);

export default CategoryItem;
