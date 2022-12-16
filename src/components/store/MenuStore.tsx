import create from 'zustand';

interface Menu {
  selected: string;
  select: (selected: string) => void;
  menus: {[key: string] : string};
}

const MenuStore = create<Menu>((set) => ({
  selected: "-1",
  select: (sel) => {
    set((state) => ({selected: sel}))
  },
  menus: {
    "00": 'setting',
    "10": 'item',
    '11': 'gonggu',
    '12': 'category',
    '13': 'review',
    '14': 'section',
    '15': 'exhibition',
    '20': 'member',
    '21': 'seller',
    '22': 'point',
    '30': 'reservation',
    '40': 'event',
    '41': 'banner',
    '42': 'keyword',
    '50': 'log',
    '60': 'notification',
    '70': 'thirdparty',
    '71': 'pay'
  }
}));

export default MenuStore;
