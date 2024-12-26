import { bedsCategory } from './beds';
import { drawersCategory } from './drawers';
import { setsCategory } from './sets';
import { byRoomCategory } from './by-room';

export const categories = [bedsCategory, drawersCategory, byRoomCategory, setsCategory];

export type { Category, Subcategory } from '../../types';