import { lazy } from 'react'

export const NotFound = lazy(()=> import('./NotFound'))
export const Home = lazy(()=> import('./Home'))
export const Login = lazy(()=> import('./Auth/Signin'))
export const Register = lazy(()=> import('./Auth/Signup'))
export const Profile = lazy(()=> import('./Profile/Profile'))
export const Calendar = lazy(()=>import('./Calendar/Calendar'))
export const Planner = lazy(()=> import('./Planner/Planner'))
export const Recipes = lazy(()=> import('./Recipes'))
