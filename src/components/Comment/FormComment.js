import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import { Textarea } from '../Form';
import { asyncCreateComment } from '../../states/threadDetail/action';
import { SectionTitle } from '../../styles/globals';

const FormComment = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const { threadDetail, loading } = useSelector((states) => states);

    const handleComment = (event) => {
        event.preventDefault();
        dispatch(asyncCreateComment({
            threadId: threadDetail.id, content: comment, onSuccess: () => setComment(''),
        }));
    };

    return (
        <>
            <SectionTitle style={{ marginBottom: 10 }}>Tulis Komentar</SectionTitle>
            <form onSubmit={handleComment}>
                <Textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    placeholder="Tanggapi diskusi dengan memberikan komentar..."
                    onChange={({ target }) => setComment(target.value)}
                />
                <Button
                    type="submit"
                    label="Kirim Komentar"
                    disabled={!comment}
                    isLoading={loading.button}
                />
            </form>
        </>
    );
};

export default FormComment;
