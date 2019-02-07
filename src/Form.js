import React, { useState } from "react";
import {
  Input,
  Icon
} from 'react-materialize';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Add Todo"
             s={12}
             m={12}
             l={12}
             xl={12}
             value={value}
             type="text"
             onChange={e => setValue(e.target.value)}
             validate>
          <Icon>create</Icon>
      </Input>
    </form>
  );
};

export default Form;