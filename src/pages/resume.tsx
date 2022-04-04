import React from 'react';
import StaticLayout from '@/layout/static';
import WhyMe from '@/components/pages/resume/whyMe';
import { ResumeWrapper } from '@/components/pages/resume/styled';
import Because from '@/components/pages/resume/because';
import LangPower from '@/components/pages/resume/langPower';
import Hello from '@/components/pages/resume/hello';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const ResumePage: React.FC = () => {
  return (
    <StaticLayout title="about 형수">
      <GatsbySeo
        title="about 형수"
        description="본질은 소통에 있다고 믿는 개발자 승형수입니다."
        canonical="https://funes-days.com/resume"
        openGraph={{
          type: 'website',
          url: 'https://funes-days.com/resume',
          title: 'about 형수',
          description: '본질은 소통에 있다고 믿는 개발자 승형수입니다.',
          locale: 'ko_KR',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            },
          ],
        }}
      />
      <ResumeWrapper>
        <WhyMe />
        <Because />
        <LangPower />
        <Hello />
      </ResumeWrapper>
    </StaticLayout>
  );
};

export default ResumePage;
