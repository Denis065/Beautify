import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Modal(props) {
  // return(
  //   <div>hey</div>
  // )
  const name1 = props.name
  const text1 = props.text
  const id = props.id

  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function nameChange({ target: { value } }) {
    setName(value)
  }
  function textChange({ target: { value } }) {
    setText(value)
  }
  const isValid = true

  function editReviewFunc(event) {
    event.preventDefault()
    const name = event.target.clientReviewName.value
    const text = event.target.newReviewValue.value
    console.log('REFFFFFFIIII V ADD REVIEW COMPONENT', name, text);
    dispatch( { type: 'EDIT_FETCH_REVIEW', payload: { id: id, name: name, text: text, isValid: isValid } })
    setName('')
    setText('')
    }

  return (
    <div>
       <form onSubmit={editReviewFunc}>
      <input value={name} type="text" onChange={nameChange} placeholder={name1} name='clientReviewName'/>
      <br />
      <textarea value={text} onChange={textChange} placeholder={text1} name='newReviewValue'></textarea>
      <br />
      <button type='submit'>Отправить отзыв</button>
    </form>
    </div>
  );
}

export default Modal;
