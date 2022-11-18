import { lazy } from 'react'

export const NotFound = lazy(()=> import('./NotFound'))
export const Home = lazy(()=> import('./Home'))
export const SignIn = lazy(()=> import('./Auth/SignIn'))
export const SignUp = lazy(()=> import('./Auth/SignUp'))
export const Profile = lazy(()=> import('./Profile/Profile'))
export const Calendar = lazy(()=>import('./Calendar/Calendar'))
export const Planner = lazy(()=> import('./Planner/Planner'))
export const Recipes = lazy(()=> import('./Recipes'))
export const SendVerify = lazy(()=> import('./Auth/SendVerify'))
export const Verify = lazy(()=> import('./Auth/Verify'))
export const InformationSetup = lazy(()=> import('./PostSignUpStepper/InformationSetup'))
