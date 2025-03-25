//
// This example shows how to use ElementInternals to the glue between
// a custom element and the form.
//
// See https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals
// for more details about this topic
//

import { defineCustomElement } from 'vue'

import CustomInput from './CustomInput.ce.vue'

class HTMLCustomInputElement extends defineCustomElement(CustomInput) {
  static formAssociated = true

  #input: HTMLInputElement
  #internals: ElementInternals

  constructor() {
    super()
    this.#internals = this.attachInternals()
  }

  connectedCallback() {
    super.connectedCallback()

    // Find the input (see CustomInput.ce.vue)
    this.#input = this.shadowRoot!.querySelector('input')!

    // When the input's value changes update the form
    this.#input.addEventListener('input', () => {
      this.#internals.setFormValue(this.#input.value + ' (changed)')
    })

    // Set initial form value
    this.#internals.setFormValue(this.#input.value + ' (default)')
  }
}

customElements.define('custom-input', HTMLCustomInputElement)
