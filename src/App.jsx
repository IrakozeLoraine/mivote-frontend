import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CreatePoll from './views/CreatePoll';
import EditPoll from './views/EditPoll';
import Login from './views/Login';
import Poll from './views/Poll';
import Signup from './views/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/poll" element={<Poll />} />
      <Route path="/poll/create" element={<CreatePoll />} />
      <Route path="/poll/edit" element={<EditPoll />} />
    </Routes>
  );
}

export default App;
