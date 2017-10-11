import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[appPercentageColor]'
})
export class PercentageDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }


    @Input()
    public set percentage(percentage: number) {
        if (percentage > 100) {
            throw new Error('non');
        }

        this.renderer.setElementStyle(this.el.nativeElement, 'color', this.getHsl(percentage));
    }


    private getHsl(level: number): string {
        const hue = Math.floor((level) * 120 / 100); // 1 to 120 -> red to green
        const saturation = 100 - level / 2;
        return `hsl(${hue}, ${saturation}%, 50%)`;
    }
}
