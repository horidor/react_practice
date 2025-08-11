import cn from 'classnames';

export const TableHeaders = ({ headers, sortMethod, onSortSelect }) => {
  const isEmpty = Object.keys(sortMethod).length === 0;

  return (
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>
            <span className="is-flex is-flex-wrap-nowrap">
              {header}
              <a href="#/" onClick={() => onSortSelect(header)}>
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={cn('fas', {
                      'fa-sort': isEmpty || !(header in sortMethod),
                      'fa-sort-up':
                        header in sortMethod && sortMethod[header] === 1,
                      'fa-sort-down':
                        header in sortMethod && sortMethod[header] === -1,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};
