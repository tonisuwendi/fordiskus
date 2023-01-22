import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import useInput from '../../hooks/useInput';
import { InputPassword, InputText } from '../../components/Form';
import { asyncRegisterUser } from '../../states/users/action';
import {
    AuthContainer, AuthForm, AuthSubtitle, AuthTitle, ParagraphSecondary,
} from '../../styles/globals';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useInput();
    const [email, setEmail] = useInput();
    const [password, setPassword] = useInput();
    const { loading } = useSelector((states) => states);

    const handleRegister = (event) => {
        event.preventDefault();
        dispatch(asyncRegisterUser({
            name, email, password, navigate,
        }));
    };

    return (
        <AuthContainer>
            <AuthTitle>Daftar akunmu</AuthTitle>
            <AuthSubtitle>Buat akun dan mulai diskusi sekarang</AuthSubtitle>
            <AuthForm onSubmit={handleRegister}>
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
                    disabled={!name || !email || !password}
                    isLoading={loading.button}
                    style={{ marginTop: 20, marginBottom: 15 }}
                />
                <ParagraphSecondary>
                    Sudah punya akun?
                    {' '}
                    <Link to="/login" className="hover-underline">
                        Login sekarang
                    </Link>
                </ParagraphSecondary>
            </AuthForm>
        </AuthContainer>
    );
};

export default RegisterPage;
