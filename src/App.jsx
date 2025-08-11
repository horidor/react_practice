/* eslint-disable jsx-a11y/accessible-emoji */
import { React, useState } from 'react';
import './App.scss';

import { Controls } from './components/Controls';
import { Table } from './components/Table';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map(product => {
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

const headers = ['ID', 'Product', 'Category', 'User'];

function prepareProducts(
  apiProducts,
  { selectedCategories, selectedUser, searchQuery },
) {
  return apiProducts.filter(product => {
    const hasCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.id);

    const isUser = selectedUser === '' || product.user.id === selectedUser;

    const hasSearchQuery =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return hasCategory && isUser && hasSearchQuery;
  });
}

export const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMethod, setSortMethod] = useState({});

  const visibleProducts = prepareProducts(products, {
    selectedCategories,
    selectedUser,
    searchQuery,
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <Controls
          users={usersFromServer}
          categories={categoriesFromServer}
          selectedUser={selectedUser}
          selectedCategories={selectedCategories}
          searchQuery={searchQuery}
          onSearchQuery={value => setSearchQuery(value)}
          clearCategories={() => setSelectedCategories([])}
          onUserChange={userId => setSelectedUser(userId)}
          onCategorySelect={categoryId => {
            if (!selectedCategories.includes(categoryId)) {
              setSelectedCategories(prev => [...prev, categoryId]);
            } else {
              setSelectedCategories(prev => {
                const spliceIndex = prev.findIndex(c => c.id === categoryId);
                const newPrev = [...prev];

                newPrev.splice(spliceIndex, 1);

                return newPrev;
              });
            }
          }}
        />

        <Table
          products={visibleProducts}
          headers={headers}
          sortMethod={sortMethod}
          onSortSelect={sortColumn => {
            if (sortMethod === null && !(sortColumn in sortMethod)) {
              setSortMethod({ sortColumn: 1 });

              return;
            }

            if (sortMethod[sortColumn] === 1) {
              setSortMethod({ sortColumn: -1 });

              return;
            }

            if (sortMethod[sortColumn] === -1) {
              setSortMethod({});
            }
          }}
        />
      </div>
    </div>
  );
};
