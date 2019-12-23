import { PipeTransform, Pipe } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { LocaleService } from 'src/app/services/locale.service';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {

    // Uncomment and use if no locales
    // constructor() {
    // }

    // transform(value): string {

    //     return formatCurrency(value,
    //         'es-CL',
    //         '',
    //         'CLP',
    //         '1.0-0').trim();
    // }

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
