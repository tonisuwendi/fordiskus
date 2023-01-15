import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { InputText, Textarea } from '../components/Form';
import { asyncCreateThread } from '../states/threads/action';

const NewPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useInput();
    const [category, setCategory] = useInput();
    const [body, setBody] = useInput();
    const { loading } = useSelector((states) => states);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(asyncCreateThread({
            title, category, body, navigate,
        }));
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Buat diskusi baru</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <InputText
                    id="title"
                    name="title"
                    label="Judul"
                    value={title}
                    placeholder="Masukkan judul"
                    onChange={setTitle}
                />
                <InputText
                    id="category"
                    name="category"
                    label="Kategori"
                    value={category}
                    placeholder="Masukkan kategori"
                    onChange={setCategory}
                />
                <Textarea
                    id="body"
                    name="body"
                    label="Detail Diskusi"
                    value={body}
                    placeholder="Tulis detail diskusi..."
                    onChange={setBody}
                />
                <Button
                    full
                    label="BUAT DISKUSI"
                    size="large"
                    type="submit"
                    disabled={!title || !body}
                    isLoading={loading.button}
                    style={{ marginTop: 20, marginBottom: 15 }}
                />
            </form>
        </div>
    );
};

export default NewPage;
