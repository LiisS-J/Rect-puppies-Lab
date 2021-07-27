import * as usersService from "../../utilities/users-service";

function PuppyHistory() {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }
  return (
    <>
      <h1>Puppy History</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}

export default PuppyHistory;
