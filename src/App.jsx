/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.scss';
import { useState } from 'react';

import { Controls } from './components/Controls';
import { Table } from './components/Table';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    serverCategory => product.categoryId === serverCategory.id,
  ); // find by product.categoryId
  const user = usersFromServer.find(
    serverUser => category.ownerId === serverUser.id,
  ); // find by category.ownerId

  return {
    ...product,
    category,
    user,
  };
});

export const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <Controls
          users={usersFromServer}
          categories={categoriesFromServer}
          selectedUsers={selectedUsers}
          selectedCategories={selectedCategories}
          searchQuery={searchQuery}
        />

        <Table products={products} />
      </div>
    </div>
  );
};
