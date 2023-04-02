import React from 'react';

function UserListComponent() {
  const usuarios = [
    {
      name: 'Alancito el come galletitas',
      email: 'lecabeCualquiercosa.com',
      age: 30,
      
    },
    {
      name: 'fulanito',
      email: 'elReyGalleta.com',
      age: 25,
     
    },
   
  ];

  return (
    <div>
      <h1>Lista de los que se comen la galletita</h1>
      <ul>
        {usuarios.map((usuarios, index) => (
          <li key={index}>
            <h2>{usuarios.name}</h2>
            <p>{usuarios.email}</p>
            <p>{usuarios.age}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListComponent;
