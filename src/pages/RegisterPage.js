import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { InputPassword, InputText } from '../components/Form';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useInput();
    const [email, setEmail] = useInput();
    const [password, setPassword] = useInput();

    const handleRegister = (event) => {
        event.preventDefault();
        dispatch(asyncRegisterUser({
            name, email, password, navigate,
        }));
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Daftar akunmu</h2>
            <p className="auth-subtitle">Buat akun dan mulai diskusi sekarang</p>
            <form className="auth-form" onSubmit={handleRegister}>
                <InputText
                    id="name"
                    name="name"
                    label="Nama"
                    value={name}
                    placeholder="Masukkan nama"
                    onChange={setName}
                />
                <InputText
                    id="email"
                    name="email"
                    label="Email"
                    value={email}
                    placeholder="Masukkan email"
                    onChange={setEmail}
                />
                <InputPassword
                    id="password"
                    name="password"
                    label="Password"
                    value={password}
                    placeholder="Masukkan password"
                    onChange={setPassword}
                />
                <Button
                    full
                    label="DAFTAR"
                    size="large"
                    type="submit"
                    style={{ marginTop: 20, marginBottom: 15 }}
                />
                <p className="paragraph-secondary">
                    Sudah punya akun?
                    {' '}
                    <Link to="/login" className="hover-underline">
                        Login sekarang
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
