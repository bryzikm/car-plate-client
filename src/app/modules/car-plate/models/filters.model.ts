import {CarPlate} from './car-plate.model';

export interface Filters {
  searchText?: string;
  page: number;
  limit: number;
}

export interface CarPlatesResponse {
  carPlates: CarPlate[];
  totalPages: number;
  totalElements: number;
}
