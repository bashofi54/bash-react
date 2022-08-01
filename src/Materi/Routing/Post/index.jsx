import { useHistory, useParams } from "react-router-dom";

const Post = () => {
    const history = useHistory();
    const {id} = useParams()
    return (
        <div className="main">
            <h4> Post ke-{id} </h4>
            <p> deskripsi </p>
            <button onClick={() => history.push('/')}>Kembali Home</button>
        </div>
    )
}

export default Post;