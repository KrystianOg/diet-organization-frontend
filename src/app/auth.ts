import { api } from './api'
import { Token, RefreshToken, SignInCredentials, SignUpCredentials, ConfirmData } from '../types'

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation<Token, SignInCredentials>({
            query: (credentials: SignInCredentials) => ({
                url: '/auth/token/',
                method: 'POST',
                body: credentials
            })
        }),
        signUp: build.mutation<Token, SignUpCredentials>({
            query: (credentials: SignUpCredentials) => ({
                url: '/auth/signup/',
                method: 'POST',
                body: credentials
            })
        }),
        refreshToken: build.mutation<Token, RefreshToken>({
            query: (token: RefreshToken) => ({
                url: '/auth/token/refresh/',
                method: 'POST',
                body: token
            })
        }),
        createVerificationToken: build.query<ConfirmData, void>({
            query: () => ({
                url: '/auth/verify/create-token/',
                method: 'GET'
            })
        }),
        verify: build.query<void, ConfirmData>({
            query: (data: ConfirmData) => {
                const { hash, confirmation_token } = data
                return {
                url: `/auth/verify/${hash}/${confirmation_token}`,
                method: 'GET',
                }
            }
        })
    }),
    overrideExisting: false
})

export const { 
    useSignInMutation, 
    useSignUpMutation, 
    useRefreshTokenMutation, 
    useCreateVerificationTokenQuery, 
    useVerifyQuery
} = authApi