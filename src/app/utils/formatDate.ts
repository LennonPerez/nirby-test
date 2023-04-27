import { DatePipe } from '@angular/common';

const formatDate = (date: Date | string): string | null => {
  const datePipe: DatePipe = new DatePipe('en');
  const parsedDate = datePipe.transform(date, 'dd/mm/yyyy hh:mm');
  return parsedDate;
};

export default formatDate;
