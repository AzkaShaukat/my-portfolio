import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Azka</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          From algorithms to architecture.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am an analytical thinker and fast learner who operates at the intersection of machine learning 
          and full-stack software engineering. Currently pursuing my BS in Software Engineering at Lahore 
          Garrison University, my approach to development focuses on building robust systems that aren't 
          just functional, but intelligent and secure by design.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My technical expertise spans both the deep backend (PyTorch, scikit-learn, local LLMs like LLaMA 3.2, 
          and FastAPI) and the frontend (React, TypeScript, Tailwind). I have a proven track record of architecting 
          complex solutions, from building a 6-microservice AI cybersecurity platform (Aegis AI) to engineering 
          data-intensive local web applications for smart meter anomaly detection during my time at LESCO.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I don't just build user interfaces; I engineer the data pipelines, strict database transaction safety, 
          and machine learning models that power them. Whether it is deploying containerized Docker environments 
          or writing efficient raw SQL for legacy migrations, my goal is always to transform complex data into 
          production-ready software.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
