import data from './data';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div>
      <header></header>
      <main>
        <h1>Image Slicer</h1>
        <div className="users">
          {data.users.map((user) => (
            <div className="user" key={user.Route_ID}>
              <Card>
                <img src={user.URL} alt={user.Name} />
                <div className="user-info">
                  <p>{user.Name}</p>
                  <p>{user.Route_ID}</p>
                  <p>{user.Freq}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
