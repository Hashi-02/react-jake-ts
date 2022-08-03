import './App.css';
import { UserCard } from './components11/UserCard';
import { useAllUsers } from './Hooks/useAllUsers';

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
