'use client'

import { checkAddressExists } from '@/actions/user';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi';

const Auth = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { isConnecting, isConnected, address } = useAccount();


    useEffect(() => {
        console.log(isConnected, address)
        if (isConnected && address) {
            setLoading(true)
            checkAddressExists(address as `0x${string}`).then(async (res) => {

                if(res)
                {
                    console.log(res)
                    router.push('/home')
                    return;
                }
                console.log(res)

                router.push(`/auth/onboarding`);

            })
        }
    }, [isConnected, isConnecting]);
    
    return (
        <div>
            {
                <div className="flex h-screen flex-1 flex-col justify-center sm:px-6 lg:px-8 py-16 bg-stone-950 mx-auto">
                    <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-md pb-6 mx-auto">
                        <Image
                        alt="Your Company"
                        src="/logo.png"
                        width={64}
                        height={64}
                        className="mx-auto cursor-pointer"
                        onClick={() => router.push('/')}
                        />
                        <h2 className="mt-3 text-center text-3xl font-bold text-gray-300">
                        Join h<span className='text-yellow-500'>3</span>x.world
                        </h2>
                    </div>
                    <div className='mx-auto'>
                        <ConnectKitButton theme='midnight' mode='dark'/>
                    </div>
                    <div>
                        <span className="loading loading-infinity loading-xl loading-warning"></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Auth