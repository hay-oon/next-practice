import { createContext, useContext, useState } from "react";

// 데이터를 전역적으로 관리할 수 있게 해줌, 데이터를 공유할 수 있는 저장소 역할
// 이 컴포넌트는 어디서든 사용할 수 있음
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute(
      "data-theme",
      !isDark ? "dark" : "light"
    );
  };

  return (
    // ThemeContext.Provider 컴포넌트에 데이터를 제공
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 커스텀 훅,
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider (데이터 제공)
// ↓
// isDark, toggleTheme 데이터를 Context에 저장
// ↓
// useTheme() (데이터 사용)
// ↓
// ThemeToggle 등의 컴포넌트에서 테마 데이터 사용
