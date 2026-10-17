// import { APIRoute } from '../../components/const';
import { AppRoute } from '../../components/const';
import { TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';

// экспорт одного оффера по ID
export const fetchOffer = createAppAsyncThunk<TOffer, string>(
  'fetchOffer/offer',
  async (offerID, { extra: api }) => {
    const response = await api.get<TOffer>(`${AppRoute.Offer}/${offerID}`);
    return response.data;
  }
);

// экспорт нескольких офферов по ID
export const fetchNearBy = createAppAsyncThunk<TOffer[], string>(
  'fetchOffer/nearby',
  async (offerID, {extra: api}) => {
    const response = await api.get<TOffer[]>(`${AppRoute.Offer}/${offerID}/nearby`);
    return response.data;
  }
);
