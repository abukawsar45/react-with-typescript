import React from 'react';
import './App.css';

function App() {
  let name: string;
  let age: string;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];

  // role = [4, '34']

  type person = {
    name: string;
    age?: number;
  };
  let person: person = {
    name: 'aks',
    age: 23,
  };

  let lotsOfPeople: person[];
  // People: person[];
    

  function PrintName(name:string) {
     
    console.log(name)
  }
  PrintName('4546')

  
  return (
    <div className="">
     <h3>asdf787</h3>
    </div>
  );
}

export default App;
