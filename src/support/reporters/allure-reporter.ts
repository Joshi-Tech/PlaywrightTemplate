import { AllureRuntime } from 'allure-js-commons';
import { CucumberJSAllureFormatter, CucumberJSAllureFormatterConfig } from 'allure-cucumberjs';
import { IFormatterOptions } from '@cucumber/cucumber/lib/formatter';

interface CustomLabelMatcher {
  pattern: RegExp[];
  name: string;
}

interface CustomLinkMatcher {
  pattern: RegExp[];
  type: string;
  urlTemplate: string;
}

interface CustomCucumberJSAllureFormatterConfig extends CucumberJSAllureFormatterConfig {
  labels: CustomLabelMatcher[];
  links: CustomLinkMatcher[];
}


export default class CustomAllureReporter extends CucumberJSAllureFormatter {
  constructor(options: IFormatterOptions) {
    super(options, new AllureRuntime({ resultsDir: './allure-results' }), {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: 'epic',
        },
        {
          pattern: [/@severity:(.*)/],
          name: 'severity',
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: 'issue',
          urlTemplate: 'http://localhost:8080/issue/%s',
        },
        {
          pattern: [/@tms=(.*)/],
          type: 'tms',
          urlTemplate: 'http://localhost:8080/tms/%s',
        },
      ],
    } as CustomCucumberJSAllureFormatterConfig);
  }
}
