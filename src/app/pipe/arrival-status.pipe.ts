import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_ARRIVAL } from '../constants/config';

@Pipe({ name: 'formatArrivalStatus', pure: false })
export class ArrivalFormatStatusPipe implements PipeTransform {
    transform(statusOfArrival) {
        if(statusOfArrival == STATUS_ARRIVAL.ARRIVALED) {
            return 'Đã đến';
        } else {
            return 'Chưa đến';
        }
    }
}