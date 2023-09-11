import React from 'react';

function ThreadItem() {
  return (
    <div className="card card-thread">
      <div className="thread-header">
        <img src="/src/assets/user-avatar.png" alt="user-avatar" className="thread-avatar" />
        <div>
          <p className="thread-username">Farid Kharismawan</p>
          <p className="thread-date">8 September 2023</p>
        </div>
      </div>
      <h5 className="thread-title">Halo! Selamat datang dan silakan perkenalkan diri kamu</h5>
      <p className="thread-text">
        Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya
        ucapkan selamat datang semuanya! Seperti yang sudah disampaikan
        sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu
        dan juga berkenalan dengan teman sekelas lainnya.
      </p>
      <div className="thread-footer">
        <a href="/" className="category-item">#perkenalan</a>
        <div className="thread-action">
          <img src="/src/assets/thumb_up.svg" alt="thumb-up" />
          <span>0</span>
          <img src="/src/assets/thumb_down.svg" alt="thumb-down" />
          <span>0</span>
          <img src="/src/assets/chat_bubble.svg" alt="comment" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default ThreadItem;
