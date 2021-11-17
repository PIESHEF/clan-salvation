import React from 'react';
import discord_logo_white from '../discord_logo_white.png'

export const Discord = () => {
    return (
        <div className="p-2 justify-self-end">
            <a href="https://discord.gg/FM3S3dzNEC" rel="noreferrer" target="_blank">
                <button className="px-4 py-2 bg-blurple shadow-lg rounded-full">
                    <img className="h-6" src={ discord_logo_white } alt="" />
                </button>
            </a>
        </div>
    )
}