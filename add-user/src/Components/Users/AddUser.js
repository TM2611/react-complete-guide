
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
