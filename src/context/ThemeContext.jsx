
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(()=>{
    const localParticipantTheme = localStorage.getItem('theme')
    return localParticipantTheme ? localParticipantTheme:'light'
  });

  const [resTheme, setResTheme] = useState( ()=>{
    const localResearchTheme = localStorage.getItem('resTheme')
    return localResearchTheme?localResearchTheme:'light';
  })

  const [usertype, setUsertype] = useState('participant');
  const [userId, setUserId] = useState('')

  const [dropdown, setDropdown] = useState(false);
  const [isSupportClicked, setIsSupportClicked] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  useEffect(()=>{
      localStorage.setItem('resTheme', resTheme);
      localStorage.setItem('theme', theme);
  }, [resTheme, theme])
  
  const handleResearcherDropdown = ()=>{
    setDropdown(prevState=> !prevState)
  }

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  const researcherTheme = () => {
      setResTheme(prevState=> prevState==='light'?'dark':'light')
  }


  return (
    <ThemeContext.Provider
         value={{
          dropdown,
          setDropdown,
          handleResearcherDropdown, 
          theme, 
          toggleTheme, 
          usertype, 
          setUsertype, 
          resTheme, 
          researcherTheme, 
          isSupportClicked, 
          setIsSupportClicked,
          userId,
          setUserId,
          emailSent,
          setEmailSent}}>

      {children}
    </ThemeContext.Provider>
  );
};
