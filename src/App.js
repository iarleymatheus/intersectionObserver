
import { useInView } from 'react-intersection-observer';

import './App.css';

function App() {
  
  

  const { ref: myRef, inView:visiblebox1} = useInView();
  const { ref: box2, inView: visiblebox2} = useInView();

  
  
  return (
    <div className="App">
      <div ref={myRef} className={`box1 fade-in-section ${visiblebox1  ? 'is-visible' : ''}`}>
        <h1 >Container 1</h1>
        <p>{visiblebox1 ? "Yes" : "No"}</p>
      </div>
      <div ref={box2} className={`box2 fade-in-section ${visiblebox2 ? 'is-visible' : ''}`}>
        <h1>Container 2</h1>
        <p>{visiblebox2 ? "Yes" : "No"}</p>
      </div>
      <div className='box3'>
        <h1>Container 3</h1>
      </div>
      <div className='box4'>
        <h1>Container 4</h1>
        <p> grrfgf</p>
      </div>
      <div className="box5">
        <h1>Container 5</h1>
      </div>
    </div>
  );
}

export default App;
