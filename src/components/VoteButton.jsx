import { useState } from "react";


export default function VoteButton({post}) {
    
    const initialVote = post.reactions.likes;
    const [vote, setVote] = useState(initialVote);

    const handleUpvote = () => {
        setVote((prevVote) => prevVote + 1);
    };

    const handleDownvote = () => {
        setVote((prevVote) => {
        if (prevVote > 0) {
            return prevVote - 1;
        } else {
            return 0;
        }
        });
    };

    return <> 
    
        <button>
          <span onClick={handleUpvote}>+ </span>
          {vote}
          <span onClick={handleDownvote}> -</span>
        </button>
    </>
}