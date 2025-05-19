'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';
import OnboardingWrapper from '../onboarding/OnboardingWrapper';

const AuthOnboarding = () => {

    useEffect(() => {
        
    }, []);


    return (
        <div>
            <OnboardingWrapper/>
        </div>
    )
}

export default AuthOnboarding