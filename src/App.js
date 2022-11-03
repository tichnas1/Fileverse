import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import WalletData from './components/WalletData';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <WalletData />
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
