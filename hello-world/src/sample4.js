// 바벨 실습 sample3와 비교
function LikeButton(){
  const [liked, setLiked] = React.useState(false);
  const text = liked? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked)},
    text
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
};

const domContainer = document.getElementById('react-root');
ReactDOM.render(React.createElement(Container), domContainer);

// npm install @babel/core @babel/cli @babel/preset-react
// npx babel --watch src --out-dir . --presets @babel/preset-react