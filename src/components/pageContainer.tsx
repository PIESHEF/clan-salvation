import React from 'react';
import { Page } from './pages'

export const PageContainer = () => {
    return (
        <div className='p-2 grid grid-flow-col'>
            <Page label="Roster" />
            <Page label="Hall of Fame" />
        </div>
    )
}