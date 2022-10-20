import {moduleMetadata, Story} from '@storybook/angular';
import {Component} from "@angular/core";
import {ButtonModule} from "../button/button.module";

@Component({
  selector: 'example',
  template: `<app-button (click)="clickHandler($event)"></app-button>`,
  styles: []
})
class ExampleComponent {
  clickHandler(event: Event) {
    if(confirm("Do you want to say hello?")) {
      console.log("Hello!!");
    }
  }
}

const Template: Story = (args) => ({
  props: args
});

export default {
  title: 'Components/Example',
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
};

export const Basic = Template.bind({});
Basic.args = {};
