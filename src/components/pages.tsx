import React from 'react';

export const Page = (props: any) => {
    return (
        <li className="cursor-pointer inline-block px-3 text-m font-bold text-gray-500 hover:text-gray-600 antialiased">
            {props.label}
        </li>
    )
}