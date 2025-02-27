import { useState, useEffect } from "react";
import "../styles/CommentSection.css";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      const savedComments = localStorage.getItem('comments');
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (comments.length > 0 && isLoggedIn) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments, isLoggedIn]);

  const addComment = () => {
    if (name.trim() && text.trim()) {
      const newComment = { id: Date.now(), name, text };
      setComments([...comments, newComment]);
      setName("");
      setText("");
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments and Suggestions Section</h2>

      {isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <textarea
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea-field"
          />
          <button onClick={addComment} className="submit-button">
            send
          </button>
        </div>
      ) : (
        <p>You must be logged in to submit a comment.</p>



      )}

      {/* بخش نمایش نظرات حذف شده است */}
    </div>
  );
}
