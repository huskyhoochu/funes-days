import React from 'react';
import StaticLayout from '@/layout/static';
import WhyMe from '@/components/pages/resume/whyMe';
import { ResumeWrapper } from '@/components/pages/resume/styled';
import Because from '@/components/pages/resume/because';
import LangPower from '@/components/pages/resume/langPower';

const ResumePage: React.FC = () => {
  return (
    <StaticLayout title="about 형수">
      <ResumeWrapper>
        <WhyMe />
        <Because />
        <LangPower />
      </ResumeWrapper>
    </StaticLayout>
  );
};

export default ResumePage;
