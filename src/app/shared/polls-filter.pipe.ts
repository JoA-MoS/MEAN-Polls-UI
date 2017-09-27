import { Poll } from './../models/poll';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pollsFilter'
})
export class PollsFilterPipe implements PipeTransform {

  transform(items: Poll[], arg?: string): any {
    if (arg && arg.length > 0) {
      return items.filter(item => {
        return item.user.toUpperCase().includes(arg.toUpperCase()) ||
          item.questionText.toUpperCase().includes(arg.toUpperCase());
      });
    } else {
      return items;
    }
  }

}
