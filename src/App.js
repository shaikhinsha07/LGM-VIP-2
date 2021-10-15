import { useState } from 'react';
import './App.css';

function App() {
  const dealy = time => new Promise(resolve => setTimeout(resolve, time));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUsers() {
    setUsers([]);
    setLoading(true);
    const data = (await (await fetch('https://reqres.in/api/users?page=1')).json()).data;
    await dealy(1000);
    setUsers(data);
    setLoading(false);
  }
  return (
    <div className="app">
      <nav>
        <div className="title"><p>• By Insha Shaikh • </p>• Let's Grow More Internship • </div>
        <button onClick={() => getUsers()} className="btn push">
          Get Users
        </button>
        <h4>___ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ᴛᴀꜱᴋ 2___</h4>
      </nav>
      <div className="users">
        {users.map(user => (
          <div>
            <div className="avatar">
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className="info">
            <div className="id">User ID : {user.id}</div>
              <div className="name">Name : {user.first_name + ' ' + user.last_name}</div>
              <div className="email">Email : {user.email}</div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading">
          <div class="lds-hourglass"></div>
        </div>
      )}
    </div>
  );
}

export default App;