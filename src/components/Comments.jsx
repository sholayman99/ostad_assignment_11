import { useEffect, useState } from "react";


const Comments = () => {
    const [comments, setCommets] = useState([]);

    useEffect(() => {
      (async () => {
        let res = await fetch("https://jsonplaceholder.org/comments");
        let result = await res.json();
        setCommets(result);
      })();
    }, []);
    return (
        <div style={{padding:"50px"}}>
            <h2>All Comments__</h2>
            {
               comments.slice(0,10).map(c => <ul key={c.id}>
                <li>{c.comment} </li>
               </ul>)
            }
        </div>
    );
};

export default Comments;