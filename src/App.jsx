import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "../src/index.css";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opeacity-0"} bg-[#060A14] text-white`}>
      
      </div>
    
     
    </>
  );
}

export default App;
