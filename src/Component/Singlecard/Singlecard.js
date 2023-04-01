import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark}  from '@fortawesome/free-solid-svg-icons'
import './singlecard.css'

const Singlecard = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate}=props.card;
    return (
        <div>
                  <div className="two-content-bars">
        <div className="left-content-bar">
          
      
      
               <div className="container">
        <div className="card">
          <div className="card__header">
            <img src={blogCoverImage} alt="card__image" className="card__image" />
          </div>
      
          <div className="card__footer">
            <div className="user">
              <img src={authorImage} alt="user__image" className="user__image"/>
              <div className="user__info">
                <h5>{authorName}</h5>
                <small>{publishDate}</small>
              </div>
            </div>
            <div>
              <p>{readTime}</p>
              <button><FontAwesomeIcon icon={faBookmark}/> </button>
            </div>
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Technology</span>
            <h4>{blogTitle}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
          </div>
        </div>
      
      </div>
            
      


      
        </div>
        <div className="right-content-bar">
         
        </div>
      </div>
        </div>
    );
};

export default Singlecard;