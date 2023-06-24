import React, { FC } from 'react';

import { MenuItemProps } from '@/common/types/menu';

import MenuItem from './MenuItem';

type MenuProps = {
  title?: string;
  list: MenuItemProps[];
};

const Menu: FC<MenuProps> = ({ title, list }) => {
  return (
    <div className='flex flex-col space-y-1'>
      {title && (
        <div className='hidden lg:block text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500'>
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;
