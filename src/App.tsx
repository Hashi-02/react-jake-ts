import './App.css';
import { UserCard } from './components11/UserCard';

const user = {
  id: 1,
  name: 'はし',
  email: 'example@nnn.jp',
  address: 'Japan',
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
