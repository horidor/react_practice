import { Product } from '../Product';
import { TableHeaders } from '../TableHeaders';

export const Table = ({ products, headers, sortMethod, onSortSelect }) => {
  const isEmpty = products.length === 0;

  return (
    <div className="box table-container">
      {isEmpty ? (
        <p data-cy="NoMatchingMessage">
          No products matching selected criteria
        </p>
      ) : (
        <table
          data-cy="ProductTable"
          className="table is-striped is-narrow is-fullwidth"
        >
          <TableHeaders
            headers={headers}
            sortMethod={sortMethod}
            onSortSelect={onSortSelect}
          />

          <tbody>
            {products.map(product => (
              <Product product={product} key={product.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
