import React ,{useEffect,useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  useEffect(() => {
    // this effect setups an interval that increments the count every second
    // and clears it when the component unmounts
    const intervalID = setInterval(() => { 
      setCount(prevCount => prevCount + 1);
    }
    , 1000);
    // cleanup function to clear the interval
    return () => clearInterval(intervalID);
  }, []); // empty dependency array means this effect runs once when the component mounts
  return <h2>Counter: {count}</h2>
}
 export default Counter;
