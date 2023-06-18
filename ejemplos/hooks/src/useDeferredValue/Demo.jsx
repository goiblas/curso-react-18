import { useState, useDeferredValue } from "react";
import SlowComponent from "./../_shared/SlowComponent";

export default function Demo() {
    const [postId, setPostId] = useState("");
    const deferredPostId = useDeferredValue(postId);

    return (
        <div>
            <input type="number" value={postId} onChange={ev => setPostId(ev.target.value)} />
            
            <div style={{ padding: 20 }}>
                 {postId} - {deferredPostId}
            </div>

            <SlowComponent key={deferredPostId} />
        </div>
    )   
}
