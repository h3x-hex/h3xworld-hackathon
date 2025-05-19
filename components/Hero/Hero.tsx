'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Features from './Features'
import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'


const navigation = [
  { name: 'Features', href: '#' },
]

export default function Hero() {

    const [text] = useTypewriter({
    words: [ 'Portfolio', 'Shop', 'Link in Bio', 'Campaign', 'Community', 'Brand' ],
    loop: 0,
    typeSpeed: 100,
    })
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {

    }, []);

    const scrollToSection = (idName: string, mobile?: boolean) => {
        document.getElementById(idName)!.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
            inline: 'start' 
        })
        if(mobile) setMobileMenuOpen(false);
    }

    return (
        <>
        {
            
            <>
                <div className="bg-stone-950 h-screen w-full">
                    <header className="absolute inset-x-0 top-0 z-50">
                        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src="/logo.png"
                                width={48}
                                height={48}
                            />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
                            >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                            <button key={item.name} onClick={() => scrollToSection(item.name)} className="text-sm/6 font-semibold text-gray-100 hover:text-yellow-500">
                                {item.name}
                            </button>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <p className="text-sm/6 font-semibold text-gray-100 hover:text-yellow-500 cursor-pointer" onClick={() => router.push('/auth/login')}>
                            Join h3x.world <span aria-hidden="true">&rarr;</span>
                            </p>
                        </div>
                        </nav>
                        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden bg-stone-950">
                        <div className="fixed inset-0 z-50 bg-stone-950" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                            <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                alt=""
                                width={48}
                                height={48}
                                src="/logo.png"
                                
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                            </div>
                            <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                    key={item.name}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-100 hover:bg-gray-50"
                                    onClick={() => scrollToSection(item.name, true)}
                                    >
                                    {item.name}
                                    </button>
                                ))}
                                </div>
                                <div className="py-6">
                                <button
                                    onClick={() => scrollToSection('Waitlist', true)}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-yellow-500 hover:bg-gray-50"
                                >
                                    Join h3xWorld <span aria-hidden="true">&rarr;</span>
                                </button>
                                </div>
                            </div>
                            </div>
                        </DialogPanel>
                        </Dialog>
                    </header>

                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                        
                        </div>
                        <div className="mx-auto py-32 sm:py-48 lg:py-56">
                        
                        <div className="mx-auto text-center text-wrap">
                            <p className="text-6xl font-bold tracking-tight text-gray-100">
                                Build your <span className='font-bold text-yellow-500'>{text}<span className='text-yellow-500'><Cursor cursorStyle='| '/></span></span>with
                            </p>
                            <h1 className="mt-2 text-7xl font-bold tracking-tight text-balance text-gray-100">
                            h<span className='text-yellow-500'>3</span>x<span className='text-gray-300'>.</span>world
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-lg">
                                Social Media for creators, hustlers, and entrepreneurs.
                            </p>
                            <p className="text-gray-400">
                                Currently in beta.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button className='btn btn-warning text-black rounded-full' onClick={() => router.push('/auth/enter')}>Enter h3x.world</button>
                                <span className='bg-transparent text-gray-300 hover:cursor-pointer' onClick={() => scrollToSection('Features')}>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </span>
                            </div>
                            
                        </div>
                        </div>
                        <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        >
                        
                        </div>
                    </div>
                    </div>
                    <div id='Features' className="relative bg-stone-950 pb-24 pt-8 mx-auto">
                        <div className="mx-auto px-6 text-center">
                            <h2 className="text-lg font-semibold text-yellow-500">Features</h2>
                            <div className="mx-auto max-w-7xl text-center mb-10">
                                <p className="mt-2 text-6xl font-semibold tracking-tight text-balance text-gray-100">
                                    Packed with features to help you monetize your content and products
                                </p>
                            </div>
                            
                            <Features/>
                        </div>
                    </div>
            </>
        }
        </>
    )
}