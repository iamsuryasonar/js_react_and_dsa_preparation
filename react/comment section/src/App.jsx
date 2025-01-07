import './style.css';
import Comments from './Comments';
import { comments } from "./comments";
import React, { useState } from 'react'

export default function App() {

  const [replyId, setReplyId] = useState(null);

  function handleReply(id) {
    if (replyId === id) {
      setReplyId(null);
    } else {
      setReplyId(id);
    }
  }

  return (
    <div
      style={{
        backgroundColor: 'cyan',
        minHeight: '100svh',
        padding: '20px'
      }}>
      <Comments comments={comments} replyId={replyId} handleReply={handleReply} />
    </div>
  );
}
