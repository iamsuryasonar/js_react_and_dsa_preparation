import { GrLike } from "react-icons/gr";

function Comments({ comments, replyId, handleReply }) {

    return <div
        style={{
            marginLeft: '20px',
        }}>
        {
            comments.map((comment) => {
                return <div key={comment.id} style={{
                    padding: '10px',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>
                        <img style={{
                            width: '40px',
                            borderRadius: '50%'
                        }} src={comment.image} alt={`profile picture of ${comment.name}`}></img>
                        <p style={{
                            fontWeight: 'bold',
                        }}>{comment.name}</p>
                    </div>
                    <p>{comment.comment}</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                        }}>
                            <GrLike />
                            <p>{comment.likes}</p>
                        </div>
                        <button onClick={() => handleReply(comment.id)}>Reply</button>
                    </div>
                    <div style={{
                        width: '100%',
                        padding: '10px',
                    }}>
                        {
                            comment.id === replyId && <input
                                type="text"
                                name=""
                                id=""
                                style={{
                                    width: '100%',
                                }} />
                        }
                    </div>
                    <div>
                        {
                            comment.replies && <Comments comments={comment.replies} replyId={replyId} handleReply={handleReply} />
                        }
                    </div>
                </div>
            })
        }
    </div>
}

export default Comments;
