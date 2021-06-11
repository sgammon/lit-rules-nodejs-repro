
import { LitElement } from 'lit-element';
import { html } from 'lit-html';
import type { TemplateResult } from 'lit-html';
import {
  customElement
} from 'lit/decorators.js';

export const example: TemplateResult = html`<b>hello</b>`;


@customElement('sample-element')
export class SampleElement extends LitElement {
  render(): TemplateResult {
    return example;
  }
}


export function sayHello() {
   return "Hello World!";
}


console.log(sayHello());

