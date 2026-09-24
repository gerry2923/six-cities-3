import { SortType } from '../const';
import { TSortType } from '../tconst';

import { useEffect, useState } from 'react';

type TSortingOption = {
  onSortChange: (option: string) => void;
};
// export type TSortType = typeof SortType[keyof typeof SortType];


// export const SortType = {
//   Popular: 'popular',
//   PriceLowToHigh: 'price-low-to-high',
//   PriceHighToLow: 'price-high-to-low',
//   TopRated: 'top-rated',
// } as const;

// type TSortingProps = {
//   sortType: TSortType;
//   onSortChange: (type: TSortType) => void;
// };

const SORT_LABELS: Record<TSortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceLowToHigh]: 'Price: low to high',
  [SortType.PriceHighToLow]: 'Price: high to low',
  [SortType.TopRated]: 'Top rated first',
};


function SortingOption({onSortChange} : TSortingOption):JSX.Element {

  const [option, setOption] = useState<string | null>('Popular');
  const [isSelectionsOptionsOpen, setIsSelectionsOptionsOpen] = useState(false);

  // const handleMouseOverSortingOptions = () => {
  //   setIsSelectionsOptionsOpen(true);
  // };

  const handleClickOption = (evt: React.MouseEvent<HTMLUListElement>) => {
    if (evt.target instanceof HTMLElement) {
      const target = evt.target.closest('li');
      const currentOption = target?.dataset.optionValue;
      if (currentOption) {
        setOption(currentOption);
        onSortChange(currentOption);
        setIsSelectionsOptionsOpen(false);
      }
    }
  };

  useEffect(() => {

    if (!isSelectionsOptionsOpen) {
      return;
    }

    const handleDocClick = (evt: MouseEvent): void => {

      if (!(evt.target instanceof HTMLElement)) {
        return;
      }

      if (!evt.target.closest('.places__sorting')) {
        setIsSelectionsOptionsOpen(false);
      }
    };

    const handleEscClick = (evt: KeyboardEvent): void => {
      if(!(evt instanceof KeyboardEvent)) {
        return;
      }

      if(evt.key === 'Escape') {
        setIsSelectionsOptionsOpen(false);

      }
    };

    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleEscClick);
    };
  }, [isSelectionsOptionsOpen]);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by  &nbsp;</span>
      <span
        className='places__sorting-type'
        onClick={() => setIsSelectionsOptionsOpen((isOpen) => !isOpen)}
        tabIndex={0}
      >
        {/* {opton?.replace(/-/g, ' ')} */}
        { SORT_LABELS[option]}
        <svg className='places__sorting-arrow' width={7} height={4} >
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      {/* <ul className='places__options places__options--custom places__options--opened'></ul> */}
      <ul className={`places__options places__options--custom ${isSelectionsOptionsOpen ? 'places__options--opened' : ''} `}
        onClick={handleClickOption}
      >
        <li className='places__option places__option--active' data-option-value={'popular'} tabIndex={0}>
          Popular
        </li>
        <li className='places__option' data-option-value={'price-low-to-high'} tabIndex={0}>
          Price: low to high
        </li>
        <li className='places__option' data-option-value={'price-high-to-low'} tabIndex={0}>
          Price: high to low
        </li>
        <li className='places__option' data-option-value={'top-rated'} tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default SortingOption;
