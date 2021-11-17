import React from 'react';
import { Discord } from './discordBtn'
import { ClanLogo } from './logo'
import { PageContainer } from './pageContainer'

export const Header = () => {
    return (
        <div className="p-2 grid grid-flow-col rounded-3xl bg-gray-600 shadow-lg">
            <ClanLogo />
            <PageContainer />
            <Discord />
        </div>
    )
}

// <header class='p-4 m-2 bg-gray-400 rounded-3xl'>
//   <nav class="grid grid-cols-3 items-center place-content-evenly">
//     <a class="px-4">Salvation</a>
//     <ul class="px-4">
//       <li class="inline-block px-3">About</li>
//       <li class="inline-block px-3">Roster</li>
//       <li class="inline-block px-3">Hall of Fame</li>
//     </ul>
//     <div class="px-5 justify-self-end">
//       <button class="px-4 py-1 bg-blue-700 shadow-lg rounded-full">Discord</button>
//     </div>
//   <nav>
// </header>
