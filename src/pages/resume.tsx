import React from 'react';
import StaticLayout from '@/layout/static';
import WhyMe from '@/components/pages/resume/whyMe';
import { ResumeWrapper } from '@/components/pages/resume/styled';

const ResumePage: React.FC = () => {
  return (
    <StaticLayout title="about 형수">
      <ResumeWrapper>
        <WhyMe />
      </ResumeWrapper>
    </StaticLayout>
  );
};

export default ResumePage;
