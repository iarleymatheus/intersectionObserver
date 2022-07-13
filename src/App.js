import { useRef, useEffect , useState } from 'react';

import './App.css';

function App() {
  
  const myRef = useRef();
  const [myElementIsVisible , setMyElementIsVisible] = useState();
  console.log("myElementIsVisible", myElementIsVisible)
  useEffect(()=>{
  const obeserver = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    setMyElementIsVisible(entry.isIntersecting)
  })
  obeserver.observe(myRef.current)

  },[])

  
  
  return (
    <div className="App">
      <div className='box1'>
        <h1 >Container 1</h1>
      </div>
      <div className='box2'>
        <h1>Container 2</h1>
      </div>
      <div className='box3'>
        <h1>Container 3</h1>
      </div>
      <div ref={myRef} className={`box fade-in-section ${myElementIsVisible} ? 'is-visible' : ''}`}>
        <h1>Container 4</h1>
        <p>{myElementIsVisible ? "Yes" : "No"}</p>
      </div>
      <div ref= {myRef} className='box5 '>
        <h1>{myElementIsVisible ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
