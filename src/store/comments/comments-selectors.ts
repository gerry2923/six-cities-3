import { createSelector } from '@reduxjs/toolkit';
import { selectComments } from './comments-slice';
import { sortByDateDesc } from '../../utils/date';


export const selectSortedCommentsByDate = createSelector(
  [selectComments],
  (comments) => sortByDateDesc(comments)
);
