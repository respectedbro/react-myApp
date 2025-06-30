import {useState} from 'react';

function GetPost() {
    const posts = {
        1: {id: 1, title: 'Пост 1', text: 'Текст1'},
        2: {id: 2, title: 'Пост 2', text: 'Текст2'},
        3: {id: 3, title: 'Пост 3', text: 'Текст3'}
    };
    const [postId, setPostId] = useState('');
    const [currPost, setCurrPost] = useState(null);

    function getPost() {
        const post = posts[postId];
        if (post) {
            setCurrPost(post);
        } else {
            alert('Такого поста нет');
        }
    }

    return (
        <>
            <input style={{width: '100px'}}
                   type="number"
                   value={postId}
                   onChange={(e) => setPostId(e.target.value)}
                   placeholder={'Введите id поста (1-3)'}
                   min="1"
                   max="3"
            />
            <button onClick={getPost}>Показать пост</button>
            {currPost && (
                <>
                    <h2>{currPost.title}</h2>
                    <p>{currPost.text}</p>
                </>
            )}
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default GetPost;