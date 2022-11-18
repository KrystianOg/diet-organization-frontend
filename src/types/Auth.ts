import { Token } from "@mui/icons-material";

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials extends SignInCredentials {
    password2: string
}

interface PasswordError {
    password: string[];
}

interface Token {
    access: string;
    refresh: string;
}

type RefreshToken = Pick<Token, 'refresh'>;

interface ConfirmData {
    hash: string,
    confirmation_token: string
}

export type {
    SignInCredentials,
    SignUpCredentials,
    PasswordError,
    Token,
    RefreshToken,
    ConfirmData
}