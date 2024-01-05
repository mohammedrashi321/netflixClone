import React from "react";
import Navbar from'./components/navbar/Navbar'
import { Actions,Originals,Horror,Comedy,Romance,Documentaries} from "./urls";
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from "./components/RowPost/RowPost"
function App() {
    return (
      <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost url={Originals} title='Netflix Originals' />
       <RowPost url={Actions} title='Actions' isSmall />
       <RowPost url={Horror} title='Horror' isSmall />
       <RowPost url={Comedy} title='Comedy' isSmall />
       <RowPost url={Romance} title='Romance' isSmall />
       <RowPost url={Documentaries} title='Documentaries' isSmall />

      </div>
    );
  }
  export default App;