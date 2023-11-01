import {useState,useCallback,useEffect} from "react";

function App() {
  const [password,setpassword]=useState("");
  const [length,setLength]=useState(8);
  const [isNumberAllowed,setNumberAllowed]=useState(false);
  const [isSpecialCharacterAllowed,setSpecialCharacterAllowed]=useState(false);
  const passGen=useCallback($_passwordGenerator,[length,isNumberAllowed,isSpecialCharacterAllowed]);


  useEffect(()=>{
    passGen()
               },[length,isNumberAllowed,isNumberAllowed])

  function $_passwordGenerator() {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(isNumberAllowed){
            str+="0123456789";
        }
        if(isSpecialCharacterAllowed){
            str+="~!@#$%^&*";
        }
        generatedPassword += str[$_randomIndex(str.length)];
    }
    setpassword(generatedPassword);
}


function $_randomIndex(strLen) {
    return Math.floor(Math.random() * strLen);
}

  return (
        <div className="w-screen h-screen bg-black pt-40">
          {/* Container Box */}
            <div className="w-4/6 h-64 mx-auto bg-slate-800 rounded-lg">
              <h1 className="py-8 text-white text-5xl text-center font-bold">Password Generator</h1>
              <div className="w-11/12  h-11 mx-auto flex flex-row rounded-xl overflow-hidden">
                <input
                  type="text"
                  className="w-full h-full pl-5 text-xl text-yellow-500 "
                  value={password}
                  placeholder="Password"
                  read-only
                ></input>
                <button className=" w-24 h-full bg-blue-500 text-white">
                  Copy
                </button>
              </div>

              {/* <---- bottom buttton bar starts ----> */}
              <div className="my-7 flex flex-row justify-evenly items-center text-xl">
                {/* Length Range Box */}
                <div>
                <span className="text-orange-300 mr-7"> Length <p className="inline-block w-2 ">({length})</p> </span>
                  <input
                    type="range"
                    id="lengthSlider"
                    min={6}
                    max={100}
                    onChange={(event)=>{
                      setLength(event.target.value);
                    }}
                  ></input>
                </div>
                {/* Number field Box */}
                <div>
                <span className="text-orange-300">Numbers </span>
                  <input
                    type="checkbox"
                    id="isNumberAllowedChk"
                    onClick={()=>{
                      setNumberAllowed(!isNumberAllowed);
                    }}
                  ></input>
                </div>
                {/* Special Character field Box */}
                <div>
                  <span className="text-orange-300">Special Character </span>
                  <input
                    type="checkbox"
                    id="isSpecialCharacterAllowed"
                    className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
                    onClick={()=>{
                      setSpecialCharacterAllowed(!isSpecialCharacterAllowed);
                    }}
                    ></input>
                </div>
              </div>
              {/* <---- bottom buttton bar ends ----> */}
            </div>
        </div>
  );
}

export default App;
