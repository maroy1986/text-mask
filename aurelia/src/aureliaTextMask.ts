import { autoinject, customAttribute, bindable } from 'aurelia-framework';
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore'

@customAttribute('text-mask')
@autoinject()
export class MaskInput {
    @bindable public textMask: any;
    private textMaskInputElement: any;

    constructor(private element: HTMLInputElement) {}

    public bind(): void {
        this.textMaskInputElement = createTextMaskInputElement(
            Object.assign({inputElement: this.element}, this.textMask)
        )
    }

    public unbind(): void {
        
    }
}