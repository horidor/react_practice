export const Product = ({ product }) => (
  <tr data-cy="Product">
    <td className="has-text-weight-bold" data-cy="ProductId">
      {product.id}
    </td>

    <td data-cy="ProductName">{product.name}</td>
    <td data-cy="ProductCategory">🍺 - Drinks</td>

    <td
      data-cy="ProductUser"
      className="has-text-link"
    >
      Max
    </td>
  </tr>
);
