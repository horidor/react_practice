import { UserTabs } from '../UserTabs';
import { CategoryTabs } from '../CategoryTabs';

export const Controls = ({
  users,
  categories,
  selectedUser,
  selectedCategories,
  searchQuery,
  onSearchQuery,
  clearCategories,
  onUserChange,
  onCategorySelect,
}) => {
  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <UserTabs
          users={users}
          selectedUser={selectedUser}
          onUserChange={onUserChange}
        />

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={searchQuery}
              onChange={event => {
                onSearchQuery(event.target.value);
              }}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            <span className="icon is-right">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              {searchQuery === '' || (
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete"
                  onClick={() => onSearchQuery('')}
                />
              )}
            </span>
          </p>
        </div>

        <CategoryTabs
          categories={categories}
          selectedCategories={selectedCategories}
          clearCategories={clearCategories}
          onCategorySelect={onCategorySelect}
        />

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={() => {
              onSearchQuery('');
              onUserChange('');
              clearCategories('');
            }}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
