import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @ts-ignore
import Cookies from "js-cookie";

import {
  Type_User_Data,
  Type_Lang_Model,
  Type_Modal_types,
} from "@/constants/types";

import { default_config } from "@/constants";

/**
 * Represents the global state of the application.
 */
interface Type_Global_State {
  user: Type_User_Data | null | undefined;
  theme: "light" | "dark";
  lang: Type_Lang_Model | null | undefined;
  page: string;
  modal: {
    type: Type_Modal_types;
    isOpen: boolean;
    data: {};
    id: string | number | undefined | null;
  };
}

/**
 * Retrieves the values of cookies related to the user, theme, and language.
 * @returns The values of the cookies.
 */
function getcookiesValues() {
  const user = Cookies.get("user");
  const theme = Cookies.get("theme") || default_config.default_theme;
  const lang = Cookies.get("lang");

  document.documentElement.dataset.theme = theme;

  return {
    user: user ? JSON.parse(user) : null,
    theme,
    lang: lang ? JSON.parse(lang) : null,
  };
}

/**
 * Represents the initial state of the global reducer.
 */
const initialState: Type_Global_State = {
  user: getcookiesValues().user,
  lang: getcookiesValues().lang,
  theme: getcookiesValues().theme,
  page: "",
  modal: {
    type: undefined,
    isOpen: false,
    data: {},
    id: "",
  },
};

/**
 * Creates a Redux slice for the global reducer.
 */
const globalReducer = createSlice({
  name: "global_reducer",
  initialState,
  reducers: {
    /**
     * save data
     * Saves user data to cookies and updates the state.
     * @param state - The current state.
     * @param action - The action containing the token and user data.
     */
    saveUserData: (
      state,
      action: PayloadAction<{ token: string; data: Type_User_Data }>,
    ) => {
      Cookies.set("token", action.payload.token);
      Cookies.set("user", JSON.stringify(action.payload.data));
      state.user = action.payload.data;
    },

    /**
     * Logs out the user by removing the relevant cookies and reloading the page.
     */
    logoutUser: () => {
      Cookies.remove("token");
      Cookies.remove("user");
      window.location.reload();
    },

    /**
     * Toggles the theme and updates the state and document element.
     * @param state - The current state.
     * @param action - The action containing the new theme.
     */
    toggleTheme: (state, action: PayloadAction<"dark" | "light">) => {
      Cookies.set("theme", action.payload);
      state.theme = action.payload;
      document.documentElement.dataset.theme = action.payload;
    },

    /**
     * Opens a modal and updates the state with the provided data.
     * @param state - The current state.
     * @param action - The action containing the modal data.
     */
    openModal: (
      state,
      action: PayloadAction<{
        data: {};
        id: string | number;
        type: Type_Modal_types;
      }>,
    ) => {
      state.modal.isOpen = true;
      state.modal.data = action.payload.data;
      state.modal.type = action.payload.type;
      state.modal.id = action.payload.id;
    },

    /**
     * Closes the modal and resets the state.
     * @param state - The current state.
     */
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.data = {};
      state.modal.type = undefined;
      state.modal.id = "";
    },
  },
});

export default globalReducer.reducer;

export const { saveUserData, logoutUser, toggleTheme, openModal, closeModal } =
  globalReducer.actions;
