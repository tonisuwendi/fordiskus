import React from 'react';

import useInput from '../../hooks/useInput';
import Button from '../Button';
import { Textarea } from '../Form';

const WriteComment = () => {
    const [comment, setComment] = useInput();

    return (
        <div className="write-comment section-content">
            <h2 className="section-title" style={{ marginBottom: 10 }}>Tulis Komentar</h2>
            <form>
                <Textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    placeholder="Tanggapi diskusi dengan memberikan komentar..."
                    onChange={setComment}
                />
                <Button label="Kirim Komentar" />
            </form>
        </div>
    );
};

export default WriteComment;
