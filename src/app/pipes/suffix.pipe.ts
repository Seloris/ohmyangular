import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

    transform(value: string, suffix: string = ''): any {
        return `${value}${suffix}`;
    }
}
