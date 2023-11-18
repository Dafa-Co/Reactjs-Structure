import { useAppDispatch, useAppSelector } from "@/hooks";

import { toggleTheme as actionToggleTheme } from "@/store/globalReducer";

export default function ToggleTheme() {
  // dispatch
  const dispatch = useAppDispatch();

  // get theme from state
  const { theme } = useAppSelector((state) => state.global);

  function toggleTheme() {
    if (theme === "light") {
      dispatch(actionToggleTheme("dark"));
    } else {
      dispatch(actionToggleTheme("light"));
    }
  }

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      toggle theme {theme}
    </button>
  );
}
