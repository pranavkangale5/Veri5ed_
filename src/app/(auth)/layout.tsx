import React from "react"

type Props = { children: React.ReactNode }

const AuthLayout = async ({ children }: Props) => {
    const use = await onAuthenticatedUser()
    return <div>AuthLayout</div>
}

export default AuthLayout
