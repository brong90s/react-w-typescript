import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input type="text" placeholder="Name" className="AddToList-input" value={input.name} name="name" onChange={handleChange} />
      <input type="text" placeholder="Age" className="AddToList-input" value={input.age} name="age" onChange={handleChange} />
      <input type="text" placeholder="Image Url" className="AddToList-input" value={input.img} name="img" onChange={handleChange} />
      <textarea placeholder="Note" className="AddToList-input" value={input.note} name="note" onChange={handleChange} />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
