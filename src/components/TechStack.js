import React from "react"
import TechStackCard from "./TechStackCard"
import {
  SiReact,
  SiGatsby,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiCircleci,
  SiGraphql,
} from "react-icons/si"

import techStackStyles from "./techStack.module.scss"

const TechStack = () => {
  return (
    <section className={techStackStyles.section}>
      <TechStackCard title="JavaScript" checkedCircles={4} unCheckedCircles={2}>
        <SiJavascript size="30px" />
      </TechStackCard>
      <TechStackCard title="CSS 3" checkedCircles={5} unCheckedCircles={1}>
        <SiCss3 size="30px" />
      </TechStackCard>
      <TechStackCard title="HTML 5" checkedCircles={5} unCheckedCircles={1}>
        <SiHtml5 size="30px" />
      </TechStackCard>
      <TechStackCard title="React" checkedCircles={4} unCheckedCircles={2}>
        <SiReact size="30px" />
      </TechStackCard>
      <TechStackCard title="Gatsby" checkedCircles={4} unCheckedCircles={2}>
        <SiGatsby size="30px" />
      </TechStackCard>
      <TechStackCard
        title="Node.js/Express"
        checkedCircles={4}
        unCheckedCircles={2}
      >
        <SiNodeDotJs size="30px" />
      </TechStackCard>
      <TechStackCard title="GraphQL" checkedCircles={2} unCheckedCircles={4}>
        <SiGraphql size="30px" />
      </TechStackCard>
      <TechStackCard title="TypeScript" checkedCircles={3} unCheckedCircles={3}>
        <SiTypescript size="30px" />
      </TechStackCard>
      <TechStackCard title="Docker" checkedCircles={2} unCheckedCircles={4}>
        <SiDocker size="30px" />
      </TechStackCard>
      <TechStackCard title="Git" checkedCircles={3} unCheckedCircles={3}>
        <SiGit size="30px" />
      </TechStackCard>
      <TechStackCard title="CI/CD" checkedCircles={2} unCheckedCircles={4}>
        <SiCircleci size="30px" />
      </TechStackCard>
      <TechStackCard title="MongoDB" checkedCircles={3} unCheckedCircles={3}>
        <SiMongodb size="30px" />
      </TechStackCard>
      <TechStackCard title="PostgresQL" checkedCircles={2} unCheckedCircles={4}>
        <SiPostgresql size="30px" />
      </TechStackCard>
    </section>
  )
}

export default TechStack
