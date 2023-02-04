import { useState, useEffect } from "react"; // API DEN VERİ CEKECEĞİMİZ ZAMAN BUNLARI  KULLANIYORUZ
import axios from "axios";
import Advice from "./Advice";
function App() {

  const [click, setClick]=useState(true);
  const [advice, setAdvice] = useState({});
  async function getAdvice() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data);
    
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() =>{
  getAdvice();
  },[click]);


  return (
    <div className="h-full flex items-center justify-center">
    <h1 className="text-3xl font-bold underline">
    <Advice advice = {advice} setClick={setClick}/> 
   
  </h1>
    </div>
  );
}

export default App;
