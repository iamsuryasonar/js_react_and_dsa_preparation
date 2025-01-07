import React from 'react'
import { ThemeContext } from './context';

function HeroPage() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <div
            className='container'
            style={{
                minHeight: '100svh',
                padding: '20px'
            }}>
            <button
                className='button'
                onClick={
                    toggleTheme
                }>{theme === 'light' ? 'Dark' : 'Light'}</button>
        </div>
    )
}

export default HeroPage