import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { skillCategories } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Production-grade experience across the full stack.
        </PageHeaderHeading>
        <PageHeaderDescription>
          As a Software Engineer specializing in AI/ML systems and web development, I have hands-on experience designing microservices architectures, deep learning pipelines, and robust full-stack applications. Below is an overview of the technologies I use.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools grouped by categories */}
      <div className="flex flex-col gap-8 my-8">
        {skillCategories.map((categoryGroup) => (
          <div key={categoryGroup.category}>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">{categoryGroup.category}</h2>
            <div className="flex flex-wrap items-center gap-3">
              {categoryGroup.skills.map((item) => (
                <Badge
                  key={item.title}
                  className="px-4 py-2 text-sm border border-secondary bg-secondary-foreground text-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {Icons[item.icon as keyof typeof Icons] ? (
                    Icons[item.icon as keyof typeof Icons]?.({
                      className: 'mr-2 size-4',
                    })
                  ) : null}
                  {item.title}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
