import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextInput = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    return (
        <div>
            <JoditEditor
			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			
			onChange={newContent => setContent(newContent)}
		/>
        </div>
    );
};

export default TextInput;