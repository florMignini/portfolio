/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useState } from "react";

//types
type Props = {
    children: ReactNode;
  };

  export interface alertType {
    msg?: string;
    error?: boolean;
  }

  export interface IProjectProvider {
  showAlert?: any;
  alert?: alertType;
  }

const ProjectContext = createContext({})

export const ProjectProvider = ({children}:Props) => {

    const [alert, setAlert] = useState<alertType>();
    const showAlert = (alert: alertType) => {
        setAlert(alert);
        setTimeout(() => {
          setAlert({});
        }, 3000);
      };
return (
    <ProjectContext.Provider
    value={{
    //alert
    alert,
    showAlert,
    }}
    >
        {children}
    </ProjectContext.Provider>
    )
}
export default ProjectContext;
