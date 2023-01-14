import React from 'react';

import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { InputText, Textarea } from '../components/Form';

const NewPage = () => {
    const [title, setTitle] = useInput();
    const [category, setCategory] = useInput();
    const [body, setBody] = useInput();

    return (
        <div className="auth-container">
            <h2 className="auth-title">Buat diskusi baru</h2>
            <form className="auth-form">
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
                    label="Judul"
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
                    style={{ marginTop: 20, marginBottom: 15 }}
                />
            </form>
        </div>
    );
};

export default NewPage;
