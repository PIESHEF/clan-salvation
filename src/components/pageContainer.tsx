import React from 'react';
import { Page } from './pages'

export const PageContainer = () => {
    return (
        <ul className="px-5">
            <Page label="About" />
            <Page label="Roster" />
            <Page label="Hall of Fame" />
        </ul>
    )
}