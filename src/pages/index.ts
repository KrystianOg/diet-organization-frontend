import { lazy } from 'react'

export const NotFound = lazy(()=> import('./NotFound'))
export const Home = lazy(()=> import('./Home'))
export const Login = lazy(()=> import('./Auth/Login'))
export const Register = lazy(()=> import('./Auth/Register'))
export const Profile = lazy(()=> import('./Profile'))
