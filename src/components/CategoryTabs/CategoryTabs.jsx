export const CategoryTabs = ({ categories, selectedCategories }) => {
  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className="button is-success mr-6 is-outlined"
      >
        All
      </a>

      {categories.map(category => (
        <a
          data-cy="Category"
          className="button mr-2 my-1"
          href="#/"
          key={category.id}
        >
          {category.title}
        </a>
      ))}
      <a
        data-cy="Category"
        className="button mr-2 my-1 is-info"
        href="#/"
      >
        Category 1
      </a>

      <a
        data-cy="Category"
        className="button mr-2 my-1"
        href="#/"
      >
        Category 2
      </a>

      <a
        data-cy="Category"
        className="button mr-2 my-1 is-info"
        href="#/"
      >
        Category 3
      </a>
      <a
        data-cy="Category"
        className="button mr-2 my-1"
        href="#/"
      >
        Category 4
      </a>
    </div>
  );
};
