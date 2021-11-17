import React from 'react';
import { Discord } from './discordBtn'
import { ClanLogo } from './logo'

export const Header = () => {
    return (
        <div className="p-2 grid grid-flow-col rounded-3xl bg-gray-600 shadow-lg">
            <ClanLogo />
            <Discord />
        </div>
    )
}