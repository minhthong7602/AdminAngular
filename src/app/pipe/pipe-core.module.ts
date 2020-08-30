import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { FormatMoneyPipe } from './format-money.pipe';
import { FormatStatusPipe } from './status.pipe';
import { ArrivalFormatStatusPipe } from './arrival-status.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [ FormatMoneyPipe, FormatStatusPipe, ArrivalFormatStatusPipe ],
  exports: [ FormatMoneyPipe, FormatStatusPipe, ArrivalFormatStatusPipe ],
  providers: [
    CurrencyPipe
  ]
})
export class PipeCoreModule {}