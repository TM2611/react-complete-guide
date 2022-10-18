import './UserList.css'


const UserList = (props) => {
  const userList = props.userList;
  let content = {};
  if (userList === "") {
    content = <div>No Users Added</div>;
  } else {
    content = userList.map((user) => (
      <li className="user-list__item"key={user.id}>{`${user.username} (${user.age} years old)`}</li>
    ));
  }
  return <ul className="user-list">{content}</ul>;
};

export default UserList;
