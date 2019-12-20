import { PipeTransform, Pipe } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {

    constructor() {
    }

    transform(value): string {

        return formatCurrency(value,
            'es-CL',
            '',
            'CLP',
            '1.0-0').trim();
    }
}
