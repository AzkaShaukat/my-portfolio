import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          You need it to get the job, but the job’s what gives it!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Throughout my journey as a developer, I have had the opportunity to
          work on production-grade automation systems and deep learning pipelines. 
          From building advanced microservice platforms to cleaning messy real-world datasets, 
          my experience has been a mix of structured system design and spontaneous problem-solving. 
          Each project and internship has sharpened my ability to write scalable code, collaborate
          effectively, and solve real technical challenges.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
