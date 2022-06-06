import SimpleImageSlider from "react-simple-image-slider";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { images } from './src/utils/constants';
import './App.css';

function App() {
  const handle = useFullScreenHandle();

  return (
    <div className="App">
      <h1>Hello world</h1>
      {/*<button*/}
      {/*  tabIndex={-1}*/}
      {/*  style={{*/}
      {/*    cursor: 'pointer',*/}
      {/*    padding: 8,*/}
      {/*    background: 'green',*/}
      {/*    color: 'white',*/}
      {/*    marginBottom: 8,*/}
      {/*    marginTop: 8,*/}
      {/*    borderRadius: 8,*/}
      {/*    border: 'unset'*/}
      {/*  }}*/}
      {/*  onClick={handle.enter}*/}
      {/*>Full ScreenMode</button>*/}
      {/*<FullScreen handle={handle}>*/}
      {/*  <SimpleImageSlider*/}
      {/*    width="100%"*/}
      {/*    height="100%"*/}
      {/*    images={images}*/}
      {/*    loop*/}
      {/*    autoPlay*/}
      {/*   showBullets*/}
      {/*  />*/}
      {/*</FullScreen>*/}
    </div>
  );
}

export default App;
