import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px soild gray'}}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={PhotoTop} />
        <Route path="/photo" component={PhotoBottom} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>여기는 홈페이지입니다.</h2>
}
function PhotoTop({ match }) {
  return <h2>여기는 사진 상단을 감상하세요.</h2>
}
function PhotoBottom({ match }) {
  return <h2>여기는 사진 하단을 감상하세요.</h2>
}

export default App;
