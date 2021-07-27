import { Link } from "react-router-dom";

import * as usersService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/puppies">Puppy History</Link>
      &nbsp; | &nbsp;
      <Link to="/puppies/new">New Puppy</Link>
      &nbsp; | &nbsp;
      <span>
        <b>Welcome, {user.name}</b>
      </span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log out
      </Link>
    </nav>
  );
}

export default NavBar;
