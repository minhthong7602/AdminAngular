import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: 'formatMoney', pure: false })
export class FormatMoneyPipe implements PipeTransform {
    constructor(private currencyPipe : CurrencyPipe) {}
    transform(value) {
        if(!value) {
            return '0';
        }
        return this.currencyPipe.transform(value).replace("$", "").replace(".00", "");
    }
}