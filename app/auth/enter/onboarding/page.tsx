import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import AuthOnboarding from '@/components/auth/AuthOnboarding'

const AuthOnboardingPage = () => {
    

    return (
        <>
            <AuthOnboarding/>
        </>
    )
}

export default AuthOnboardingPage