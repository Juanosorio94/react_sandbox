import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // this code blocks rendering.
  // alert(
  //   'hey'
  // )

  // the following different types of separation within the divs are just 
  // rendered as white space.
  return (
    // <>
    //   <div className="a-single-lines">
    //     Newline
    //     test
    // </div>
    //   <div className="b-empty-newlines">
    //     empty

    //     newlines

    //     hoho
    // </div>
    //   <div className="c-spaces-with-newlines">
    //     &nbsp;Non-breaking
    //     &nbsp;Spaces&nbsp;
    // </div>

    //   <div className="d-inserting-spaces">
    //     line1
    //   {' '}
    //   line2
    // </div>
    // </>
    <TweetComponent />
  );
}

const Message = () => (
  <div className="message">
    Hello World
  </div>
)


const Author = () => (
  <span className="author">
    <span className="name">YourName</span>
    <span className="handle">@yourHandle</span>
  </span>
)

const Avatar = () => (
  <img
    src="https://s.gravatar.com/avatar/fac3374ea00fe6878db5cc052626f33b?s=80"
    alt="logo"
    className="avatar" />
)


const Time = () => <span className="time">3h ago</span>
const TweetComponent = () => (
  <div className="tweet">
    <Avatar />
    <div className="content">
      <Author /><Time />
      <Message />
    </div>
    <div className="test">
      EYYYY
    </div>
    <div> ALo</div>
  </div>
)

export default App;
