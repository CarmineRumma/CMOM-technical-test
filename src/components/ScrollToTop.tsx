// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 10:35.
// 
// 

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}