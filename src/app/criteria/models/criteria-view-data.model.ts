import { FormGroup } from '@angular/forms';

import { Genre } from '../../models/genre.model';

export interface CriteriaViewData {
  form: FormGroup;
  genres: Genre[];
}
