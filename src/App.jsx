import { useState } from 'react'
import './App.css'

// icon
import homeIcon from './assets/icons/home.png'
import searchIcon from './assets/icons/search.png'
import exploreIcon from './assets/icons/explore.png'
import reelsIcon from './assets/icons/reels.png'
import messagesIcon from './assets/icons/messages.png'
import notificationsIcon from './assets/icons/notification.png'
import createIcon from './assets/icons/create.png'
import profileIcon from './assets/icons/profile.png'
import moreIcon from './assets/icons/more.png'
import likeIcon from './assets/icons/like.png'
import commentIcon from './assets/icons/comment.png'
import shareIcon from './assets/icons/share.png'
import heartIcon from './assets/icons/heart.png'

// story images
import userStory1 from './assets/images/userStory1.jpg'
import userStory2 from './assets/images/userStory2.jpg'
import userStory3 from './assets/images/userStory3.jpg'
import userStory4 from './assets/images/userStory4.jpg'
import userStory5 from './assets/images/userStory5.jpg'
import userStory6 from './assets/images/userStory6.jpg'
import userStory7 from './assets/images/userStory7.jpg'
import userStory8 from './assets/images/userStory8.jpg'

// profile images
import userProfile1 from './assets/images/user_profile3.jpg'
import userProfile2 from './assets/images/business2.png'
import userProfile3 from './assets/images/business1.jpg'

// suggested and main prof
import suggestedUser1Image from './assets/images/suggestedUser1.jpg'
import suggestedUser2Image from './assets/images/suggestedUser2.jpg'
import suggestedUser3Image from './assets/images/suggestedUser3.jpg'
import suggestedUser4Image from './assets/images/suggestedUser4.jpg'
import mainUserAccount from './assets/images/mainuserprofile.jpeg'

// IG logo
import instagramLogo from './assets/icons/instagram-logo.png'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Giveon', image: 'src/assets/images/firstpost.jpg', caption: 'bro is fineeee!!! he handsome fr..', profileImage: userProfile1, liked: false, likeCount: 0 },
    { id: 2, user: 'Uniqlo PH', image: 'src/assets/images/uniqlo_post.webp', caption: 'Shop Now at Uniqlo! Use the code aeronispogi for a 10% discount for all items.\nhttps://www.instagram.com/aeronisss/', profileImage: userProfile2, liked: false, likeCount: 0 },
    { id: 3, user: 'Chromehearts', image: 'src/assets/images/ch_post.webp', caption: 'Check out the new releases of accessories of Chromehearts!!\nhttps://www.facebook.com/aeronlatorre/', profileImage: userProfile3, liked: false, likeCount: 0 },
  ])

  const suggestedAccounts = [
    { id: 1, username: 'Suggested User 1', profileImage: suggestedUser1Image },
    { id: 2, username: 'Suggested User 2', profileImage: suggestedUser2Image },
    { id: 3, username: 'Suggested User 3', profileImage: suggestedUser3Image },
    { id: 4, username: 'Suggested User 4', profileImage: suggestedUser4Image },
  ];

  const userStoryNames = [
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
    'User 6',
    'User 7',
    'User 8',
  ];

  const toggleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const newLikedState = !post.liked;
        return {
          ...post,
          liked: newLikedState,
          likeCount: newLikedState ? post.likeCount + 1 : post.likeCount - 1
        };
      }
      return post;
    }));
  };

  const SuggestedAccount = ({ account }) => (
    <li className="suggested-account">
      <img src={account.profileImage} alt={`${account.username}'s profile`} className="suggested-profile-image" />
      <div>
        <span className="bold-text">{account.username}</span>
        <span className="subtext">Suggested for you</span>
      </div>
      <span className="follow-text">Follow</span> 
    </li>
  );

  return (
    <>
      <header className="header">
        <div className="user-stories">
          <div className="story-container">
            {userStoryNames.map((name, index) => (
              <div key={index} className="story-item">
                <div className="story-image-border">
                  <img src={eval(`userStory${index + 1}`)} alt={`User Story ${index + 1}`} className="story-image" />
                </div>
                <p className="story-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div className="container">
        <aside className="sidebar left-sidebar">
          <img src={instagramLogo} alt="Instagram Logo" className="logo" />
          <nav className="nav">
            <a href="#"><img src={homeIcon} alt="Home" /> Home</a>
            <a href="#"><img src={searchIcon} alt="Search" /> Search</a>
            <a href="#"><img src={exploreIcon} alt="Explore" /> Explore</a>
            <a href="#"><img src={reelsIcon} alt="Reels" /> Reels</a>
            <a href="#"><img src={messagesIcon} alt="Messages" /> Messages</a>
            <a href="#"><img src={notificationsIcon} alt="Notifications" /> Notifications</a>
            <a href="#"><img src={createIcon} alt="Create" /> Create</a>
            <a href="#"><img src={profileIcon} alt="Profile" /> Profile</a>
            <a href="#"><img src={moreIcon} alt="More" /> More</a>
          </nav>
        </aside>
        <main className="main-content">
          <div className="feed">
            {posts.map(post => (
              <div className="post" key={post.id}>
                <div className="post-header">
                  <img src={post.profileImage} alt={`${post.user}'s profile`} />
                  <span>{post.user}</span>
                </div>
                <img src={post.image} alt={post.caption} className="post-image" />
                <div className="post-icons">
                  <img 
                    src={post.liked ? heartIcon : likeIcon}
                    alt="Like" 
                    className={`icon ${post.liked ? 'liked' : ''}`} 
                    onClick={() => toggleLike(post.id)} 
                  />
                  <img src={commentIcon} alt="Comment" className="icon" />
                  <img src={shareIcon} alt="Share" className="icon" />
                </div>
                <p className="like-count">{post.likeCount} Likes</p>
                <p className="post-caption">
                  <strong>{post.user}</strong>: {post.caption}
                </p>
                <input 
                  type="text" 
                  className="comment-input" 
                  placeholder="Add a comment..." 
                />
              </div>
            ))}
          </div>
        </main>
        <aside className="sidebar right-sidebar">
          <div className="main-user-section">
            <img src={mainUserAccount} alt="aeronisss's profile" className="suggested-profile-image" />
            <div>
              <span className="bold-text">aeronisss</span>
              <span className="subtext">John Aeron Latorre</span>
            </div>
            <span className="switch-text">Switch</span>
          </div>
          
          <h2 className="suggestions-title">Suggestions For You</h2>
          <ul>
            {suggestedAccounts.map(account => (
              <SuggestedAccount key={account.id} account={account} />
            ))}
          </ul>
          
          <p className="copyright-text">© 2025 INSTAGRAM FROM META</p>
        </aside>
      </div>
      <footer className="footer">
        <p>© 2023 Instagram</p>
      </footer>
    </>
  )
}

export default App
