import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'adobo-grid',
  styleUrl: 'adobo-grid.css',
  shadow: true
})
export class AdoboGrid {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="adobo-grid">{this.getText()}<slot/></div>;
  }
}
