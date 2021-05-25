import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { Stack, App } from '@aws-cdk/core';
import { TableViewer } from '../src';

test('happy  flow', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'test');
  const table = new dynamodb.Table(stack, 'MyTable', {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
  });

  // WHEN
  new TableViewer(stack, 'viewer', { table });

  // THEN
  expect(app.synth().getStack('test').template).toMatchSnapshot();
});