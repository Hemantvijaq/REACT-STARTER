import { useState } from 'react';
import './App.css';

function App(){
  const[firstName ,setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email,setEmail]= useState("");
  const[contact,setContact]= useState("");
  const[gender,setGender]= useState("");
  const[resume,setResume]= useState("");
  const[url,setUrl]= useState("");
  const[selectedOption,setSelectedOption]= useState("");
  const[about,setAbout]= useState("");
  const[subjects,setSubjects] = useState({
    english:true,
    maths:false,
    physics:false
  });

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.lohg(firstName,lastName,email,contact,gender,subjects,resume,url,about);
  }
  
  const handleSubjectChange =(sub) =>{
    setSubjects((prev) =>({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = (e) =>{
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english:true,
      maths: false,
      physics:false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
    e.target.reset()
  };
  
  return(
    <div className="App">
    <h1>Form in react 10-12-2024</h1>
    <fieldset>
      <form action='#' method='get'>
      <label htmlFor ="firstname">FirstName</label>
      <input
        type='text'
        name='firstname'
        id='firstname'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='ENTER FIRST NAME'
        required
      />
       <label htmlFor="lastName">Last name</label>
      <input
        type='text'
        name='lastname'
        id='lastname'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='ENTER LAST NAME'
        required
        />
       <label htmlFor ="email">ENTER EMAIL</label>
      <input
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='ENTER EMAIL'
        required
        />
        <label htmlFor ="tel">ENTER Contact</label>
      <input
        type='tel'
        name='contact'
        id='Contact'
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder='ENTER Contact number'
        required
        />
        <label htmlFor ="gender">ENTER GENDER*</label>
      <input
        type='radio'
        name='gender'
        id='male'
        value= "male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
        required
        />MALE
        <input
        type='radio'
        name='gender'
        value= 'female'
        checked= {gender==="female"}
        onChange={(e) =>setGender(e.target.value)}
        />FEMALE
        <input
          type='checkbox'
          name='lang'
          id='maths'
          checked={subjects.maths===true}
          onChange= {(e) => handleSubjectChange("maths")}
        />maths
        <input
          type='checkbox'
          name='lang'
          id='physics'
          checked={subjects.physics === true}
          onChange={(e) => handleSubjectChange("physics")}
        />physics
        <input
          type='checkbox'
          name='lang'
          id='english'
          checked={subjects.english === true}
          onChange={(e) => handleSubjectChange("english")}
        />english
         <label htmlFor="file">upload resume</label>
         <input
          type='file'
          name='file'
          id='file'
          onChange={(e)=> setResume(e.target.files[0])}
          placeholder='Enter Upload file'
          required
         />
         <label htmlFor="url">Enter URL</label>
         <input
          type='url'
          name='url'
          id='url'
          onChange={(e) =>setUrl(e.target.value)}
          placeholder='Enter url'
          required
         />
         <label>Select Your Choice</label>
         <select
         name='select'
          id='select'
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
         
        <option value="" disabled selected={selectedOption ===""}>
        select your ans
        </option>
        <optgroup label='Beginners'>
        <option value="1">HTML</option>
        <option value="2">CSS</option>
        <option value="3">Javascript</option>
        </optgroup>
        <optgroup label='Advanced'>
        <option value="4">React</option>
        <option value="5">Node</option>
        <option value="6">Express</option>
        <option value="7">Mongodb</option>
        </optgroup>
         </select>
         <label htmlFor="about">about</label>
         <texgtarea 
         name="about"
         id="about"
         cols="30"
         rows="10"
         onChange={(e) => setAbout(e.target.value)}
         placeholder = "about yourself"
         required
         ></texgtarea>
         <button type='reset' value="reset" onClick={() => handleReset()}>
          Reset
         </button>
         <button type='submit' value='submit' onClick={() => handleReset()}>Submit
         </button>
      </form>
      </fieldset>
    </div>
   
  )

}



export default App;
