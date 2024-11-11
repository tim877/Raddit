import { useState } from "react";

export default function FetchComment() {
    const [commentsList, setCommentsList] = useState([]);

    const handleFetchRandomComment = async () => {
        try {
            // Fetch comment data
            const commentResponse = await fetch(`https://dummyjson.com/comments?limit=0`);
            const commentData = await commentResponse.json();

            // Select a random comment from the list
            const randomCommentIndex = Math.floor(Math.random() * commentData.comments.length);
            const randomComment = commentData.comments[randomCommentIndex];

            // Fetch user data
            const userResponse = await fetch(`https://dummyjson.com/users?limit=0`);
            const userData = await userResponse.json();

            // Select a random user from the list
            const randomUserIndex = Math.floor(Math.random() * userData.users.length);
            const randomUser = userData.users[randomUserIndex];

            // Create a new comment object with body and username
            const newComment = {
                body: randomComment.body,
                username: randomUser.username,
            };

            // Add the new comment to the list (prepend to keep the latest on top)
            setCommentsList((prevComments) => [newComment, ...prevComments]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <button onClick={handleFetchRandomComment}>Kommentar2</button>

            {/* Display all fetched comments */}
            <div className="comments-container">
                {commentsList.map((comment, index) => (
                    <div key={index} className="comment-data">
                        <h3>{comment.username}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
