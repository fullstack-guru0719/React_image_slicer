import { useState } from 'react';
import data from './data';

function App() {
  const [selected, setSelected] = useState();
  const onClick = (routeId) => {
    console.log('routeID:', routeId);
    setSelected(routeId);
  };

  return (
    <div>
      <header></header>
      <main>
        <h1>Image Slicer</h1>
        <div className="users">
          {data.users.map((user) => (
            <div
              className={`user ${selected === user.Route_ID ? 'selected' : ''}`}
              key={user.Route_ID}
              onClick={() => onClick(user.Route_ID)}
            >
              <div className="card">
                <img src={user.URL} alt={user.Name} />
                <div className="user-info">
                  <p>
                    <strong>{user.Name}</strong>
                  </p>
                  <div className="user-detail">
                    <p>Route {user.Route_ID}</p>
                    <p className="user-route">| {user.Freq} Freq</p>
                  </div>
                </div>
                {selected === user.Route_ID ? (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCf-8YnNG8UbVsxsEdNRyD1DQrcQM4SgzxEZtnFw0rVoKnm285FpR_z6WAbayEOdYm4o"
                    className="checkmark"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
