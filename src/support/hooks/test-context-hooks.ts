import { ICustomWorld } from '../custom-world';
import { AllPageObjects } from '../../pages/all-page-objects';
import { Before } from '@cucumber/cucumber';

Before({ name: 'Setup ICustomWorld' }, async function (this: ICustomWorld) {
  this.page = await this.context?.newPage();
  this.allPageObjects = new AllPageObjects(this.page!, this.context!);
});
