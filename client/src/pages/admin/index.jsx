import './admin.css';
import Navbar from '../../components/admin-navbar';
import Docsignup from '../docsignup';
const Adminhome = () => {
  return (
    <div className="admincontainer">
      <Navbar />
      <h1>adminpage `</h1>
      <Docsignup />
    </div>
  );
};
export default Adminhome;
