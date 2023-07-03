import logo from './logo.svg';
import './App.css';
import Charactecs from './components/Characters/Charactecs.js';

const firstDiv = <div>HEllo world</div>

const App = () => {
  console.log('console');
  return (
    <>
      <div>
        HEllo world
      </div>
      <Charactecs
        name={'Ihor'}
        nickname={'dev'}
        email={'dcsd@sdvsd'}
        element={firstDiv}
      />
      <Charactecs
        name={'ne Ihor'}
        nickname={'ne dev'}
        email={'nema'}
        element={firstDiv}
      />
    </>
  );
};

export default App;
