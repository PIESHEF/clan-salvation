import React from 'react';
import { Discord } from './discordBtn'
import { ClanLogo } from './logo'
import { PageContainer } from './pageContainer'

export const Header = () => {
    return (
        <header className='p-1 m-2 bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl'>
            <nav className="grid grid-cols-3 items-center place-content-evenly">
                <ClanLogo />
                <PageContainer />
                <Discord />
            </nav>
        </header>
    )
}
