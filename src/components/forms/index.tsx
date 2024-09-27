"use client"

type Props = {}

const SignInForm = (props: Props) => {
    const { isPending, onAuthenticatedUser, errors } = useAuthSignIn()
    return <div>Sign</div>
}

export default SignInForm
