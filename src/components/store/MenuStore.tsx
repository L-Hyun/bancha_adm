import create from 'zustand';

interface Menu {
  selected: Number;
  select: (selected: Number) => void;
}

const MenuStore = create<Menu>((set) => ({
  selected: 0,
  select: (sel) => {
    set((state) => ({selected: sel}))
  }
}));

export default MenuStore;
