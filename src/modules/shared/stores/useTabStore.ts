import create from "zustand";

type TabStore = {
  currentTab?: string;
  tabsOpened: string[];
  set: (state: Partial<TabStore>) => void;
};

export const useTabStore = create<TabStore>(set => ({
  currentTab: undefined,
  tabsOpened: [],
  set: (state: Partial<TabStore>) => set(state),
}));
