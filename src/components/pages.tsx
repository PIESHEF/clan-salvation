import React from 'react';

export const Page= (props: any) => {
    return (
        <>
            <p className='p-2 text-gray-200 font-extrabold text-xl'>
                {props.label}
            </p>
        </>
    )
}