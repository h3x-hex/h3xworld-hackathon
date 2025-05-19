'use client'

import { atomWithStorage } from 'jotai/utils';

export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: string | null;
    username?: string | null;
    createdAt: Date | null;
    wallet: string | null;
    pin: string | null;
    address: string | null;
    accountAddress: string | null;
}

// Define your default user here
const defaultUser: User = {
    id: '',
    name: '',
    email: '',
    emailVerified: null,
    username: null,
    createdAt: null,
    wallet: '',
    pin: '',
    address: '',
    accountAddress: '',
};

// This automatically syncs to localStorage with key 'userAtom'
export const userAtom = atomWithStorage<User>('userAtom', defaultUser);
