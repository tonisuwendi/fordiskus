import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import useInput from '../../hooks/useInput';
import { asyncSetAuthUser } from '../../states/authUser/action';
import { InputPassword, InputText } from '../../components/Form';
import {
    AuthContainer, AuthForm, AuthSubtitle, AuthTitle, ParagraphSecondary,
} from '../../styles/globals';

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
        <AuthContainer>
            <AuthTitle>Selamat datang kembali</AuthTitle>
            <AuthSubtitle>Buat diskusi dan dapatkan jawaban secara cepat</AuthSubtitle>
            <AuthForm onSubmit={handleLogin}>
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
                <ParagraphSecondary>
                    Belum punya akun?
                    {' '}
                    <Link to="/register" className="hover-underline">
                        Daftar dulu
                    </Link>
                </ParagraphSecondary>
            </AuthForm>
        </AuthContainer>
    );
};

export default LoginPage;
