import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("number-input")
export class NumberInput extends LitElement {
  @property({ type: Number })
  value = 0;

  override render() {
    return html`<input type="number" .valueAsNumber=${this.value} />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "number-input": NumberInput;
  }
}
