"use server"

import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()
        if (!clerk) {
            return {
                status: 404,
            }
        }
    } catch (error) {
        console.error(error)
        return null
    }
}
