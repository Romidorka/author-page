// src/components/PostWidget.jsx
import React from 'react';

const PostWidget = ({ 
  post, 
  onLike, 
  isAdmin = false 
}) => {
  const {
    id,
    content,
    time,
    likes,
    comments,
    shares,
    isLiked,
    isPinned,
    photos
  } = post;

  return (
    <div className={`post ${isPinned ? 'pinned-post' : ''}`}>
      <div className="post-header">
        <img 
          src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_450/https://pricoliska.ru/wp-content/uploads/2021/09/nikolaj-rubcov.jpg'
          alt="Автор" 
        />
        <div className="post-author">
          <div className="author-name">
            Николай Рубцов
          </div>
          <div className="post-time">
            {time} {isPinned && <span className="pinned-label">Закреплено</span>}
          </div>
        </div>
      </div>
      
      <div className="post-content">
        <p>{content}</p>
        {photos && (
          <div className="post-photo">
            <img src={photos[0]} alt="Фото к посту" />
          </div>
        )}
      </div>
      
      <div className="post-stats">
        <span className="likes">{likes.toLocaleString()} ❤</span>
        <span className="comments">{comments.toLocaleString()} комментариев</span>
        <span className="shares">{shares.toLocaleString()} репостов</span>
      </div>
      
      <div className="post-actions">
        <button 
          className={isLiked ? 'liked' : ''}
          onClick={() => onLike(id)}
        >
          Нравится
        </button>
        <button>Комментировать</button>
        <button>Поделиться</button>
      </div>
    </div>
  );
};

export default PostWidget;