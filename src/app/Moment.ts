import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'ngx-moment';


@Pipe({ name: 'dateFormat' })
export class MomentPipe implements PipeTransform {
    transform(value: string | moment.DurationPipe, dateFormat: string): string {
        return moment.(value).humanize();
    }
}