import React from 'react';

export const Page= (props: any) => {
    return (
        <>
            <li className="inline-block px-3 text-m antialiased">
                {props.label}
            </li>
        </>
    )
}