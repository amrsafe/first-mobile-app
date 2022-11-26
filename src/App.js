import { useState } from 'react';
import Card from './componets/Card';
import Container from './layout/Container'; 

import './App.css';


function App() {

  const [List , useList] = useState ([
  { id:1, name:'amr', age : 25 , country : 'egypt'} ,
  { id :2, name:'ahmed', age:20 , country : 'egypt' },
  {id:3 ,name:'sayed', age:15 , country : 'geza' }
  ]);

  let ListItm = List.map((el) => { 
   return <Card {...el} key = {el.id} />
  });

  return (
   
   <Container type="fixed">
    {ListItm}
   </Container>
  );
}

export default App;
 

