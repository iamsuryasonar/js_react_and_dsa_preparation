/*
User stories-
  The <Document /> component should contain two major elements, textarea and a div acting as the document container.
  On enter press, the text inside of the textarea should be added to the document.
  
  When the text is added inside of the document, the recently added text should have a blue highlight, which should fade away after 2 seconds.
  
  Textarea field should be cleared after the text is submitted / when enter is pressed.
  
  Optimize your component for best performance.
*/


import React, { useEffect, useState } from 'react';

export const Document = () => {
  const [texts, setTexts] = useState([]);
  const [value, setValue] = useState('');
  const [hightlight, setHighlight] = useState('blue');

  function submitHandler() {
    if (value.trim() === '') return;

    setTexts((prev) => [value, ...prev]);
    setValue('');
    setHighlight('blue');
  }

  function onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      submitHandler();
    }
  }

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlight('white');
    }, 2000);
    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <div>
      <textarea
        onChange={onChangeHandler}
        value={value}
        onKeyUp={onKeyUpHandler}
      ></textarea>

      {texts.map((text, index) => {
        return (
          <div key={index} style={index === 0 ? { color: hightlight } : {}}>
            {text}
          </div>
        );
      })}
    </div>
  );
};
