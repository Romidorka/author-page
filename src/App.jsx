import React, { useState, useEffect } from 'react';
import postsData from './data/posts.json';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const user = {
    name: 'Николай Рубцов',
    status: 'Русский лирический поэт',
    avatar: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_450/https://pricoliska.ru/wp-content/uploads/2021/09/nikolaj-rubcov.jpg',
    coverPhoto: 'https://rubtsov-poetry.ru/img/slide62.jpg',
    birthDate: '3 января 1936',
    deathDate: '19 января 1971',
    city: 'Емецк, Архангельская область',
    career: 'Поэт, моряк, рабочий',
    education: 'Литературный институт им. А.М. Горького',
    friends: 87200,
    followers: 154300,
    photos: 126,
    videos: 18,
    albums: 9
  };

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    const post = {
      id: posts.length + 1,
      content: newPost,
      time: 'Только что',
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false
    };
    
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="vk-app">
      {/* Шапка ВК */}
      <header className="vk-header">
        <div className="vk-logo">ВКонтакте</div>
        <div className="vk-search">
          <input type="text" placeholder="Поиск" />
        </div>
        <div className="vk-user">
          <img src={user.avatar} alt={user.name} />
        </div>
      </header>

      {/* Основное содержимое */}
      <div className="vk-container">
        {/* Левая колонка - меню */}
        <aside className="vk-sidebar">
          <div className="vk-menu">
            <div className="menu-item active">Моя страница</div>
            <div className="menu-item">Новости</div>
            <div className="menu-item">Сообщения</div>
            <div className="menu-item">Друзья</div>
            <div className="menu-item">Фотографии</div>
            <div className="menu-item">Музыка</div>
            <div className="menu-item">Видео</div>
            <div className="menu-item">Книги</div>
            <div className="menu-item">Документы</div>
          </div>
        </aside>

        {/* Центральная часть - профиль */}
        <main className="vk-main">
          {/* Шапка профиля */}
          <div className="profile-header">
            <div className="profile-cover">
              <img src={user.coverPhoto} alt="Обложка" />
            </div>
            <div className="profile-info">
              <div className="profile-avatar">
                <img src={user.avatar} alt={user.name} />
              </div>
              <div className="profile-details">
                <h1>{user.name}</h1>
                <div className="profile-status">{user.status}</div>
                
                <div className="profile-stats">
                  <div className="stat">
                    <div className="stat-value">{user.friends}</div>
                    <div className="stat-label">друзей</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">{user.followers}</div>
                    <div className="stat-label">подписчиков</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">{user.photos}</div>
                    <div className="stat-label">фотографий</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">{user.videos}</div>
                    <div className="stat-label">видео</div>
                  </div>
                </div>
              </div>
            </div>
            
            <nav className="profile-nav">
              <div className="nav-item active">Стена</div>
              <div className="nav-item">Информация</div>
              <div className="nav-item">Фотографии</div>
              <div className="nav-item">Видео</div>
              <div className="nav-item">Аудиозаписи</div>
              <div className="nav-item">Книги</div>
              <div className="nav-item">Обсуждения</div>
              <div className="nav-item">Ещё</div>
            </nav>
          </div>

          {/* Основной контент */}
          <div className="profile-content">
            {/* Левая колонка - информация */}
            <div className="left-column">
              <div className="info-block">
                <h3>Основная информация</h3>
                <ul>
                  <li>
                    <span className="info-label">Дата рождения:</span>
                    <span className="info-value">{user.birthDate} (35 лет)</span>
                  </li>
                  <li>
                    <span className="info-label">Дата смерти:</span>
                    <span className="info-value">{user.deathDate}</span>
                  </li>
                  <li>
                    <span className="info-label">Место рождения:</span>
                    <span className="info-value">{user.city}</span>
                  </li>
                  <li>
                    <span className="info-label">Деятельность:</span>
                    <span className="info-value">{user.career}</span>
                  </li>
                  <li>
                    <span className="info-label">Образование:</span>
                    <span className="info-value">{user.education}</span>
                  </li>
                </ul>
              </div>
              
              <div className="info-block">
                <h3>Фотографии ({user.photos})</h3>
                <div className="photo-grid">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="photo-item">
                      <img src={`https://rubtsov-poetry.ru/wp-content/uploads/2020/05/rubtsov-${i+1}.jpg`} alt={`Фото ${i+1}`} />
                    </div>
                  ))}
                </div>
                <button className="show-all">Показать все фотографии</button>
              </div>
              
              <div className="info-block">
                <h3>Альбомы ({user.albums})</h3>
                <div className="albums-grid">
                  <div className="album-item">
                    <img src="https://rubtsov-poetry.ru/wp-content/uploads/2020/05/rubtsov-album1.jpg" alt="Альбом 1" />
                    <span>Личные фото</span>
                  </div>
                  <div className="album-item">
                    <img src="https://rubtsov-poetry.ru/wp-content/uploads/2020/05/rubtsov-album2.jpg" alt="Альбом 2" />
                    <span>Творчество</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Правая колонка - стена */}
            <div className="right-column">
              {/* Создание поста (от имени администратора) */}
              <div className="post-creator">
                <div className="creator-header">
                  <img src="https://sun1-87.userapi.com/s/v1/ig2/r3T4zUx6pJzWj8Y3QZ3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1" alt="Admin" />
                  <textarea 
                    placeholder="Расскажите о поэте..." 
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                </div>
                <div className="creator-actions">
                  <button onClick={handlePostSubmit}>Опубликовать</button>
                </div>
              </div>
              
              {/* Закрепленный пост */}
              {posts.filter(p => p.isPinned).map(post => (
                <div key={post.id} className="post pinned-post">
                  <div className="post-header">
                    <img src="https://sun1-87.userapi.com/s/v1/ig2/r3T4zUx6pJzWj8Y3QZ3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1" alt="Admin" />
                    <div className="post-author">
                      <div className="author-name">Сообщество Николая Рубцова</div>
                      <div className="post-time">{post.time} · <span className="pinned-label">Закреплено</span></div>
                    </div>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.content}</p>
                    {post.photos && (
                      <div className="post-photo">
                        <img src={post.photos[0]} alt="Фото к посту" />
                      </div>
                    )}
                  </div>
                  
                  <div className="post-stats">
                    <span className="likes">{post.likes.toLocaleString()} ❤</span>
                    <span className="comments">{post.comments.toLocaleString()} комментариев</span>
                    <span className="shares">{post.shares.toLocaleString()} репостов</span>
                  </div>
                  
                  <div className="post-actions">
                    <button 
                      className={post.isLiked ? 'liked' : ''}
                      onClick={() => handleLike(post.id)}
                    >
                      Нравится
                    </button>
                    <button>Комментировать</button>
                    <button>Поделиться</button>
                  </div>
                </div>
              ))}
              
              {/* Остальные посты */}
              {posts.filter(p => !p.isPinned).map(post => (
                <div key={post.id} className="post">
                  <div className="post-header">
                    <img src="https://sun1-87.userapi.com/s/v1/ig2/r3T4zUx6pJzWj8Y3QZ3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q3Q.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1" alt="Admin" />
                    <div className="post-author">
                      <div className="author-name">Сообщество Николая Рубцова</div>
                      <div className="post-time">{post.time}</div>
                    </div>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.content}</p>
                    {post.photos && (
                      <div className="post-photo">
                        <img src={post.photos[0]} alt="Фото к посту" />
                      </div>
                    )}
                  </div>
                  
                  <div className="post-stats">
                    <span className="likes">{post.likes.toLocaleString()} ❤</span>
                    <span className="comments">{post.comments.toLocaleString()} комментариев</span>
                    <span className="shares">{post.shares.toLocaleString()} репостов</span>
                  </div>
                  
                  <div className="post-actions">
                    <button 
                      className={post.isLiked ? 'liked' : ''}
                      onClick={() => handleLike(post.id)}
                    >
                      Нравится
                    </button>
                    <button>Комментировать</button>
                    <button>Поделиться</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;