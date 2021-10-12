import { createContext, FC, useState } from "react";
import { LoginDialog } from "../login/LoginDialog";

export interface User {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<User>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const login = () => {
    setIsLoginDialogOpen(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const handleSubmit = (email: string, password: string) => {
    if (password === "admin") {
      setIsLoggedIn(true);
      setIsLoginDialogOpen(false);
    }
  };

  return (
    <>
      <LoginDialog
        open={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
        onSubmit={handleSubmit}
      />
      <UserContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
