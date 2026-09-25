import { SortType } from '../const';
import { TSortType } from '../tconst';
import { useEffect, useState, useRef } from 'react';

// popular | 'price-low-to-high' | 'price-high-to-low' | 'top-rated'
// export type TSortType = typeof SortType[keyof typeof SortType];

// export const SortType = {
//   Popular: 'popular',
//   PriceLowToHigh: 'price-low-to-high',
//   PriceHighToLow: 'price-high-to-low',
//   TopRated: 'top-rated',
// } as const;

type TSortingOption = {
  sortType: TSortType;
  onSortChange: (option: TSortType) => void;
};

const SORT_LABELS: Record<TSortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceLowToHigh]: 'Price: low to high',
  [SortType.PriceHighToLow]: 'Price: high to low',
  [SortType.TopRated]: 'Top rated first',
};


function SortingOption({sortType, onSortChange} : TSortingOption):JSX.Element {

  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const rootRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (!isSortListOpen) {
      return;
    }

    const handleDocClick = (evt: MouseEvent): void => {
      // if (!(evt.target instanceof Node)) {
      if (!(evt.target instanceof HTMLElement)) {
        return;
      }
      // в rootRef сохраняем контейнер всего элемента
      // если клик будет за пределами этого контейрена, то
      // список будет сворачиваться
      if(!rootRef.current?.contains(evt.target)) {
      // if (!evt.target.closest('.places__sorting')) {
        setIsSortListOpen(false);
      }
    };

    const handleEscClick = (evt: KeyboardEvent): void => {
      if(evt.key === 'Escape') {
        setIsSortListOpen(false);
      }
    };

    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleEscClick);
    };
  }, [isSortListOpen]);


  const handleSelect = (type: TSortType): void => {
    onSortChange(type);
    setIsSortListOpen(false);
  };

  return (
    <form
      ref={rootRef}
      className='places__sorting'
      action='#'
      method='get'
    >
      <span className='places__sorting-caption'>Sort by  &nbsp;</span>
      <span
        className='places__sorting-type'
        onClick={() => setIsSortListOpen((isOpen) => !isOpen)}
        tabIndex={0}
      >
        {SORT_LABELS[sortType]}
        <svg className='places__sorting-arrow' width={7} height={4} >
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isSortListOpen ? 'places__options--opened' : ''
        }`}
      >
        {(Object.keys(SORT_LABELS) as TSortType[]).map((type) =>
          (
            <li
              key={type}
              className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
              data-option-value={type}
              tabIndex={0}
              onClick={() => handleSelect(type)}
            >
              {SORT_LABELS[type]}
            </li>)
        )}
      </ul>
    </form>
  );
}

export default SortingOption;
