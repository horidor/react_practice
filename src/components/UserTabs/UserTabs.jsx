import cn from 'classnames';

export const UserTabs = ({ users, selectedUser, onUserChange }) => {
  return (
    <p className="panel-tabs has-text-weight-bold">
      <a
        data-cy="FilterAllUsers"
        href="#/"
        className={cn({
          'is-active': selectedUser === '',
        })}
        onClick={() => onUserChange('')}
      >
        All
      </a>

      {users.map(user => (
        <a
          data-cy="FilterUser"
          href="#/"
          key={user.id}
          className={cn({
            'is-active': user.id === selectedUser,
          })}
          onClick={() => onUserChange(user.id)}
        >
          {user.name}
        </a>
      ))}
    </p>
  );
};
