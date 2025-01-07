import { useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('my-app-dark-mode') || 'light');

    const toggleTheme = () => {
        if (theme == 'light') {
            localStorage.setItem('my-app-dark-mode', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('my-app-dark-mode', 'light');
            setTheme('light');
        }
    }

    return { theme, toggleTheme }
}

export default useTheme;