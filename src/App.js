import "./App.css";
// import Post from "./Post";
import { useState } from "react";
function myfun() {}
function ReplyThread(props) {
  const [show, setShow] = useState(false);
  const { reply } = props;
  return (
    <div
      className="reply-thread"
      onClick={() => {
        setShow(true);
      }}
    >
      {reply.map((text) => {
        return <p>{text}</p>;
      })}
      {show ? <ShowTweet post={reply} /> : null}
    </div>
  );
}
function Reply() {
  const [val, setVal] = useState("");
  const [reply, setReply] = useState([]);
  return (
    <>
      <div className="small-thread">
        <input
          type="text"
          value={val}
          placeholder="Tweet your reply"
          onChange={(event) => {
            setVal(event.target.value);
          }}
        />
        <button
          className={val ? "active" : "nonactive"}
          onClick={() => {
            setReply([...reply, val]);
            setVal("");
          }}
          type="button"
          disabled={!val}
        >
          Reply
        </button>
      </div>
      <ReplyThread reply={reply} />
    </>
  );
}

function NewThread(props) {
  const { data } = props;
  return (
    <div className="new-thread">
      <p>{data}</p>
      <Reply />
    </div>
  );
}
function ShowTweet(props) {
  const { post } = props;
  return (
    <ul>
      {post.map((data, i) => {
        return <NewThread key={i} data={data} />;
      })}
    </ul>
  );
}

function AddTweet() {
  const [val, setVal] = useState("");
  const [post, setPost] = useState([]);
  return (
    <>
      <input
        value={val}
        onChange={(event) => {
          setVal(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPost([...post, val]);
          setVal("");
        }}
      >
        Add tweet
      </button>
      <ShowTweet post={post} />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <AddTweet />
      {/* <Post /> */}
    </div>
  );
}

export default App;
