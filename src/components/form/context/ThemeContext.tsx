import { createContext, ReactNode, useContext, useState } from 'react';
import { createStyles } from '../../../constants/styles';
import { FormStyles } from '../../../constants/types';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    themeStyle: ReturnType<typeof createStyles>;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ style, children }: { style: FormStyles; children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const themeStyle = createStyles(style);
    return (
        <ThemeContext.Provider value={{ theme, themeStyle, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};