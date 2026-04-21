import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
