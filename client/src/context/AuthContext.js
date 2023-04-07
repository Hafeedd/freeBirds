import { createContext,useEffect, useReducer } from "react";
const INITIAL_STATE = {
    user : JSON.parse(localStorage.getItem("user")) || null,
    error : null,
    loading : false,
    key:'gzLxc16cnBhScdScGijOEXdAyv2XkgR5TRqYPK5FH7Q=',
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
        return {
            user : null,
            loading : true,
            error : null,
      
        };
        case "LOGIN_SUCCESS":
        return {
            user : action.payload,
            loading : false,
            error : null,
        };
        case "LOGIN_FAILURE":
        return {
            user : null,
            loading : true,
            error : action.payload,
      
        };
        case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
  
      };
    default :
        return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // const user = jwt.sign({user: state.user,type: state.type},process.env.JWT)
  
    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.user) || null );
    }, [state.user]);
  
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          loading: state.loading,
          error: state.error,
          key:INITIAL_STATE.key,
          type: state.type,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };