import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const { refetch } = useQuery(GET_ME, {
    fetchPolicy: "network-only",
    onCompleted: (d) => {
      if (d?.me) {
        setUser(d.me);
      }
    },
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        refetchUser: refetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
