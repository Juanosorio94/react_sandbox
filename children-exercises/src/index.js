import React from 'react';
import {render} from 'react-dom'
import {ErrorBox} from './components/ErrorBox';
import {FirstChildOnly, LastChildOnly, Head, Tail} from './components/childrenPractice';
import {Dialog, Title, Body, Footer} from './components/Dialog';
const Comp = () => {
  return (
    <ErrorBox>
      Something has Gone Wrong.
    </ErrorBox>
  )
}



const childrenTest = [
  <span>uno</span>,
   <span>dos</span>,
   <span>tres</span>,
   <span>cuatro</span>,
   <span>cinco</span>
]

const ChildrenComp =  () => {
  return (
    <div>
      <FirstChildOnly children={childrenTest} />
      <LastChildOnly children={childrenTest} />
      <Head children={childrenTest} number={2} />
      <Tail children={childrenTest} number={2}/>
    </div>
  )
}


const dialogChildren = [
  <Title>The Title</Title>,
  <Body>The Body</Body>,
  <Footer>The footer</Footer>
];



render(<Dialog children={dialogChildren} />,  document.querySelector('#root'));