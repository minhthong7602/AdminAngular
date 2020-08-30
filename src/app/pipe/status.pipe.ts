import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatStatus', pure: false })
export class FormatStatusPipe implements PipeTransform {
    transform(isAccepted) {
        if(isAccepted) {
            return 'Đã duyệt';
        } else {
            return 'Chưa duyệt';
        }
    }
}