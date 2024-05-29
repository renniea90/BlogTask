import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [author, setAuthorName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author }
    
    fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)

    }).then (() => {
        navigate('/');
        setTitle('');
        setContent('');
        setAuthorName('');
    })

    }

    return (
        <div className="create">
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label>Content</label>
                <input
                    type="text"
                    required
                    value={body}
                    onChange={(event) => setContent(event.target.value)}
                />

                <label>Name of Author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(event) => setAuthorName(event.target.value)}
                />

                <button>Submit Blog Entry!</button>
        
            </form>
        </div>

    )
}

export default Create