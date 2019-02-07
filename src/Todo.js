import React from "react";
import {
  CollectionItem,
  Badge,
  Icon
} from 'react-materialize';
import './App.css';

const Todo = ({ text, index, deleteTodo }) => {
  return (
    <CollectionItem>
      {index + 1}.  {text} 
      <Badge className='delete' 
             onClick={() => deleteTodo(index)}>
        <Icon>delete</Icon>
      </Badge>
    </CollectionItem>
  );
};

export default Todo;