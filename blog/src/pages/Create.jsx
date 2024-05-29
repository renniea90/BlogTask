import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [author, setAuthorName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { title, body, author }
    
    fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)

    })

    setTitle('');
    setContent('');
    setAuthorName('');

    }

    return (
        <div className="create">
            <h1>Add new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                />

                <label>Content</label>
                <input
                    type="text"
                    required
                    value={body}
                />

                <label>Name of Author</label>
                <input
                    type="text"
                    required
                    value={author}
                />

                <button>Submit Blog Entry!</button>
        
            </form>
        </div>

    )
}
export default Create