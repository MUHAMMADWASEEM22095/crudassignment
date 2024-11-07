import logo from './logo.svg';
import './App.css';
import { Data } from './Data/Db';


function App() {
  const [data,setdata]=usestate([])


  useEffect((Data) => {
    setdata(Data)
  }, [])
  




  return (
    <div className="App">
     
    </div>
  );
}

export default App;
