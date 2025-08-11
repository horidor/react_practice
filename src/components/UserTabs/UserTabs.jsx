import cn from 'classnames';

export const UserTabs = ({ users, selectedUsers }) => {
  const isEmpty = selectedUsers.length === 0;

  return (
    <p className="panel-tabs has-text-weight-bold">
      <a
        data-cy="FilterAllUsers"
        href="#/"
        className={cn({
          'is-active': isEmpty,
        })}
      >
        All
      </a>

      {users.map(user => (
        <a data-cy="FilterUser" href="#/" key={user.id}>
          {user.name}
        </a>
      ))}
    </p>
  );
};
