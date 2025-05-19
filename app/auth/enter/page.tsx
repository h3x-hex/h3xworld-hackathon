import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { checkAddressExists } from '@/actions/user'
import Auth from '@/components/auth/Auth'


const AuthPage = () => {

    return (
        <>
            <Auth/>
        </>
    )
}

export default AuthPage