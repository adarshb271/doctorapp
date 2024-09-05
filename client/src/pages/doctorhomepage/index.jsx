import './doctorhome.css';
import Sidebar from '../../components/docsidebar';
import Doctorslot from '../../pages/doctorSlot';
const Doctorhome = () => {
  return (
    <div className="container">
      <Sidebar />
      <h1>home page</h1>
      <Doctorslot />
    </div>
  );
};
export default Doctorhome;
