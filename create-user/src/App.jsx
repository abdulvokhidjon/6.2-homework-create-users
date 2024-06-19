//Style
import "./App.css";
import { useState } from "react";
//components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import UserList from "./components/userList/UserList.jsx";
import NewUserForm from "./components/newUser/NewUserForm.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  //delete user

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setShowModal(false);
    }
    if (e.key == "Escape") {
      setShowModal(false);
    }
  };

  // add users

  const addUsers = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUsers={addUsers} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Creat User
      </button>
      <Footer />
    </div>
  );
}

export default App;
