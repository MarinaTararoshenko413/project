import { PipeTransform, Pipe } from '@angular/core';
import { formatCurrency } from '@angular/common';

import { LocaleService } from './locale.service';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {

    constructor(private localeService: LocaleService) {
    }

    transform(value, args: string[]): string {
        let number_format = '1.0-0';

        if (this.localeService.locale === 'en-US') {
            number_format = '1.2-2';
        }

        return formatCurrency(value,
            this.localeService.locale,
            '',
            this.localeService.currencyName,
            number_format).trim();
    }
}
