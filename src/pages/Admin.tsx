import {PageContainer} from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = (props) => {
  // @ts-ignore
  const {children} = props;
  return (
    <PageContainer>
      {children}
    </PageContainer>
  );
};

export default Admin;
