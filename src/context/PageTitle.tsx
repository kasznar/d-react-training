import { createContext, FC, useState } from "react";

export interface PageTitle {
  title: string;
  setTitle: (value: string) => void;
}

export const PageTitleContext = createContext<PageTitle>({
  title: "",
  setTitle: () => {},
});

export const PageTitleProvider: FC = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
