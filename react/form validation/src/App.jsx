import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [formInputs, setFormInputs] = useState({
    name: '',
    password: '',
    age: '',
    gender: '',
    hobbies: [],
  });

  const [formErrors, setFormErrors] = useState({});

  const inputRefs = {
    name: useRef(null),
    password: useRef(null),
    age: useRef(null),
    gender: useRef(null),
    hobbies: useRef(null),
  };

  function handleInput(e) {
    const { name, value } = e.target;

    setFormInputs(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function isValidPassword(password) {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return passwordRegex.test(password);
  }

  function handleHobbies(e) {
    const { name, checked } = e.target;

    setFormInputs(prev => {
      let arr = [...prev.hobbies];

      if (checked) {
        arr.push(name);
      } else {
        arr = arr.filter(i => i !== name);
      }

      return {
        ...prev,
        hobbies: arr,
      }
    })
  }

  function validateForm() {

    let errors = {};

    if (!formInputs.name.trim()) {
      errors.name = "Name is required!"
    }

    if (!formInputs.password.trim()) {
      errors.password = "Password is required!"
    } else if (!isValidPassword(formInputs.password.trim())) {
      errors.password = "Password must be at least 8 characters long and must contain one symbol, one number, one uppercase alphabet and one lowercase alphabet"
    }

    if (!formInputs.age.trim()) {
      errors.age = "Age is required!"
    }

    if (!formInputs.gender) {
      errors.gender = "Gender is required!"
    }

    if (formInputs.hobbies.length === 0) {
      errors.hobbies = "Hobbies are required!"
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return false;
    return true;
  }

  function focusFirstErrorField() {
    const fieldOrder = ['name', 'password', 'age', 'gender', 'hobbies'];

    for (let field of fieldOrder) {
      if (formErrors[field]) {
        const ref = inputRefs[field]?.current;
        if (ref) {
          ref.focus();
          break;
        }
      }
    }
  }

  function submitForm(e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log('form submitted')
    } else {
      console.log('validation error');
      focusFirstErrorField();
    }
  }

  return <form onSubmit={submitForm}>
    <div>
      <label htmlFor='name'>name:</label>
      <input ref={inputRefs.name} id='name' type='text' name='name' value={formInputs.name} placeholder='name' onChange={handleInput}></input>
    </div>
    {
      formErrors.name && <p>{formErrors.name}</p>
    }
    <div>
      <label htmlFor='password'>password:</label>
      <input ref={inputRefs.password} id='password' type='password' name='password' value={formInputs.password} placeholder='password' onChange={handleInput}></input>
    </div>
    {
      formErrors.password && <p>{formErrors.password}</p>
    }
    <div>
      <label htmlFor='age'>age:</label>
      <input ref={inputRefs.age} id="age" type='number' name='age' value={formInputs.age} placeholder='age' onChange={handleInput}></input>
    </div>
    {
      formErrors.age && <p>{formErrors.age}</p>
    }
    <div>
      <label htmlFor="gender">Gender</label>
      <select ref={inputRefs.gender} name="gender" id="gender" value={formInputs.gender} onChange={handleInput}>
        <option value="">Select gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
    </div>
    {
      formErrors.gender && <p>{formErrors.gender}</p>
    }
    <div>
      <label>Hobbies:</label>
      <div>
        <label htmlFor="reading">Reading:</label>
        <input ref={inputRefs.hobbies} type="checkbox" id="reading" name='reading' checked={formInputs.hobbies.includes('reading')} onChange={handleHobbies} />
      </div>
      <div>
        <label htmlFor="dancing">Dancing:</label>
        <input type="checkbox" id="dancing" name='dancing' checked={formInputs.hobbies.includes('dancing')} onChange={handleHobbies} />
      </div>
      <div>
        <label htmlFor="cycling">Cycling:</label>
        <input type="checkbox" id="cycling" name='cycling' checked={formInputs.hobbies.includes('cycling')} onChange={handleHobbies} />
      </div>
    </div>
    {
      formErrors.hobbies && <p>{formErrors.hobbies}</p>
    }
    <div>
      <button type='submit'>Submit</button>
    </div>
  </form>
}

export default App;
