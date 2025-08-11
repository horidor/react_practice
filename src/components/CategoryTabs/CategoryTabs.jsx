import cn from 'classnames';

export const CategoryTabs = ({
  categories,
  selectedCategories,
  clearCategories,
  onCategorySelect,
}) => {
  const isEmpty = selectedCategories.length === 0;

  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className={cn('button is-success mr-6', {
          'is-outlined': !isEmpty,
        })}
        onClick={() => clearCategories()}
      >
        All
      </a>

      {categories.map(category => (
        <a
          data-cy="Category"
          className={cn('button mr-2 my-1', {
            'is-info': selectedCategories.includes(category.id),
          })}
          href="#/"
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
        >
          {category.title}
        </a>
      ))}
    </div>
  );
};
