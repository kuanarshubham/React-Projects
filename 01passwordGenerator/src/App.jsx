import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(8);
  const [numeric, setNumeric] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numeric) {str += "0123456789"};
    if(char) {str += "~!@#$%^&*()_+-><,./;':[]}{"};

    for(let i=1; i<=length; i++){
      let x = Math.floor(Math.random() * str.length);
      pass += str[x];
    }

    setPassword(pass);

  }, [length, numeric, char, setPassword]);


  const copyPasswordIp = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  

  useEffect(() => {
    passGenerator();
  }, [length, numeric, char, passGenerator]);

  
  return (
    <>
    <div className= "w-full h-full justify-center align-middle p-5">
      <div className="justify-between">
        <input type="text" value= {password} readOnly className= "bg-slate-50 text-black" ref={passwordRef}/>
        <button onClick={copyPasswordIp}>copy</button>
      </div>

      <div className="gap-3">
        <input type="range" max={100} min={6} onChange={(e) => {setLength(e.target.value)}} />
        <label>Lenght: {length}</label>

        <input type="checkbox" defaultChecked = {numeric} onChange={() => setNumeric(prev => !prev)}/>
        <label>Numbers</label>

        <input type="checkbox" defaultChecked={char} onChange={() => setChar(e => !e)}/>
        <label>Characters</label>
      </div>
    </div>
    </>
  );
}

export default App;
