import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { InputPassword, InputText } from '../components/Form';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useInput();
    const [password, setPassword] = useInput();
    const { loading } = useSelector((states) => states);

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(asyncSetAuthUser({ email, password }));
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Selamat datang kembali</h2>
            <p className="auth-subtitle">Buat diskusi dan dapatkan jawaban secara cepat</p>
            <form className="auth-form" onSubmit={handleLogin}>
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
                    label="MASUK"
                    size="large"
                    type="submit"
                    disabled={!email || !password}
                    isLoading={loading.button}
                    style={{ marginTop: 20, marginBottom: 15 }}
                />
                <p className="paragraph-secondary">
                    Belum punya akun?
                    {' '}
                    <Link to="/register" className="hover-underline">
                        Daftar dulu
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
