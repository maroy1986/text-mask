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

import { autoinject, customAttribute, bindable, bindingMode } from 'aurelia-framework';
import { createTextMaskInputElement } from 'textMaskCore';

// @customAttribute('phone-mask')
// @autoinject()
// export class PhoneMask {
//   @bindable({
//     defaultBindingMode: bindingMode.twoWay, changeHandler: 'unMaskedChanged'
//   }) public unMasked: string;
//   public mask: string = '[1-9]';
//   private textMaskInputElement: any;

//   constructor(private element: Element, test: string) {
//     if (!(element instanceof HTMLInputElement)) {
//       throw new Error(`text-mask attribute can only be applied to input element.`);
//     }

//     this.textMaskInputElement = createTextMaskInputElement(
//       Object.assign({ inputElement: this.element }, {
//         // mask: '[\'(\', /[1-9]/, /\d/, /\d/, \')\', \' \', /\d/, /\d/, /\d/, \'-\', /\d/, /\d/, /\d/, /\d/]',
//         mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/],
//         guide: true,
//         placeholderChar: '_',
//         pipe: undefined,
//         keepCharPositions: true,
//       })
//     );

//   }

//   public unMaskedChanged(newValue: string, oldValue: string): void {
//     console.info(`Hey my value changed from '${oldValue}' to '${newValue}'.`);
//     if (this.textMaskInputElement !== undefined) {
//       this.textMaskInputElement.update(newValue);
//     }
//   }
// }
