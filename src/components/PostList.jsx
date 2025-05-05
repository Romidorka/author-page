// src/components/PostList.jsx
import React from 'react';
import PostWidget from './PostWidget';

const PostList = ({ 
  posts, 
  onLike, 
  isAdmin = false 
}) => {
  return (
    <div className="posts-container">
      {posts.map(post => (
        <PostWidget 
          key={post.id} 
          post={post} 
          onLike={onLike}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};

export default PostList;