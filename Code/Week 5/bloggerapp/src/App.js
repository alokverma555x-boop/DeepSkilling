import React, { useState } from 'react';

// Sample Data
const books = [{ id: 1, title: "React Guide" }, { id: 2, title: "JS Patterns" }];
const blogs = [{ id: 1, title: "Why React?" }, { id: 2, title: "Hooks 101" }];
const courses = [{ id: 1, title: "Frontend Master" }];

function App() {
  const [view, setView] = useState('books'); // 'books' | 'blogs' | 'courses'

  // Helper to render lists
  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        // KEY is crucial for performance and reconciliation
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>
      <button onClick={() => setView('books')}>Show Books</button>
      <button onClick={() => setView('blogs')}>Show Blogs</button>
      <button onClick={() => setView('courses')}>Show Courses</button>

      <hr />

      {/* 1. Ternary Operator */}
      {view === 'books' ? (
        <div><h2>Books</h2>{renderList(books)}</div>
      ) : null}

      {/* 2. Logical AND (&&) */}
      {view === 'blogs' && (
        <div><h2>Blogs</h2>{renderList(blogs)}</div>
      )}

      {/* 3. Element Variable Approach */}
      {(() => {
        if (view === 'courses') {
          return <div><h2>Courses</h2>{renderList(courses)}</div>;
        }
      })()}
    </div>
  );
}

export default App;