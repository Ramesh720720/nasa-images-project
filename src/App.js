import './App.css';
import Navbar from './all componets/Navbar/Navbar';
import './all componets/program js/ProgramJs';
import IOD from './all componets/ImageOfDay/IOD';
import MoreImage_T from './all componets/MoreImages/MoreImage_T';
import './all componets/GetSearchResult/GetSearchResult';
import Darkmode from './all componets/Darkmode/Darkmode';
import Footer from './all componets/footer/Footer';
function App() {
  return (
    <>
    <Darkmode/>
    <Navbar />
    <IOD />
    <MoreImage_T/>
    <Footer/>
    </>
  );
}
export default App;
// background-color: #0f022b;
// color: #20efedcf;
