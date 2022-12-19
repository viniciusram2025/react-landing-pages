import { Base } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const baseMock = {
  children: (
    <div>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </div>
  ),
  ...mock,
};

export default {
  title: 'Templates/Base',
  component: Base,
  args: baseMock,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
