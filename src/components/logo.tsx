import React from 'react';
import clan_logo from '../CLAN_LOGO.png'

export const ClanLogo = () => {
    return (
        <div className="p-2 justify-self-start">
            <div className="p-2 grid grid-flow-col">
                <img className="h-9" src={ clan_logo } alt="" />
            </div>
        </div>
    )
}

<p className="px-4 text-m antialiased">Salvation</p>