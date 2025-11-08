import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ textList, typingSpeed = 150, pauseTime = 1000 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      let typingTimeout;
  
      const handleTyping = () => {
        const currentString = textList[currentIndex];
        if (!isDeleting) {
          // Typing out the string
          if (displayedText.length < currentString.length) {
            setDisplayedText(currentString.slice(0, displayedText.length + 1));
          } else {
            // Wait for pauseTime before starting to delete
            typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting the string
          if (displayedText.length > 0) {
            setDisplayedText(currentString.slice(0, displayedText.length - 1));
          } else {
            // Move to the next word after deleting
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % textList.length);
          }
        }
      };
  
      typingTimeout = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, currentIndex, textList, typingSpeed, pauseTime]);
  
    return (
      <div style={{ fontFamily: "monospace", fontSize: "32px" }}>
        {"Hello, " + displayedText}
        <span className="blinking-cursor"></span>
      </div>
    );
  };

export default TypingAnimation;