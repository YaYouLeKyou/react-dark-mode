import Contenu from './Component/Contenus/Contenu';
import './App.css';
import ThemeContextProvider from './Context/ThemContext';
import BtnToggle from './Component/BtnToggle/BtnToggle.js';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToggle/>
     <Contenu/>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
