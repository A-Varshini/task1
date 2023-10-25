import React, { useState } from 'react';
const WordCounter = () => {
    const [state, setState] = React.useState({
        wordCount: 0, 
        charCount: 0
      });
      
      const handleKeyPress = (e) => {
        const count = e.target.value;
        
        const countWords = (count) => {
          if (count.length === 0) {
            return 0;
          } else {
            count = count.replace(/(^\s*)|(\s*$)/gi,"");
            count = count.replace(/[ ]{2,}/gi," ");
            count = count.replace(/\n /,"\n");
            return count.split(' ').length; 
          }
        }
        
        setState({
          wordCount: countWords(count),
          charCount: count.length
        });
      
    };

    return ( 
        <div className='box'>
           <h1>Responsive Paragraph Word  and Charecter Counter</h1>
              
      <textarea 
       
        onChange={handleKeyPress}
        rows="10"
        cols="30"
        placeholder="Enter here..."
      >    
      </textarea>
      <h2>Word Count: 
        <span className='num'> {state.wordCount}</span> 
      </h2>
      <h2>Character Count:
        <span className='num'> {state.charCount}</span>
      </h2>   
        </div>
     );
}
 
export default WordCounter;