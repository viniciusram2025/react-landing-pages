import { Base } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
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
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
