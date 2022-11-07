import { Gender, Workout, Intolerance, KitchenAppliance, DietaryRestriction } from './enum'

interface User {
    id: bigint
    is_verified: boolean
    email: string
    firstName: string
    lastName: string
    gender: Gender
    weight: number
    age: number
    height: number
    avatar: string
    // more personal info
    dailyMealCount: number
    workout: Workout
    waterConsumption: number
    timeToPrepareMeal: number
    intolerances: Intolerance[]
    kitchenAppliances: KitchenAppliance[]
    dietaryRestrictions: DietaryRestriction[]
    // notifications
    notifyMonthlySummary: boolean
    // spoonacular
    spoonacularPassword: string
    spoonacularHash: string
}

type UserInfo = Pick<User, "id" | "email" | "firstName" | "lastName" >;

export type {
    User,
    UserInfo
}