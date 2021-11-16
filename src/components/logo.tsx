import React from 'react';
import clan_logo from '../CLAN_LOGO.png'

export const ClanLogo = () => {
    return (
        <div className="px-4 py-2 justify-self-start">
            <div className="px-4 py-2 grid grid-flow-col">
                <img className="h-10" src={ clan_logo } alt="" />
            </div>
        </div>
    )
}