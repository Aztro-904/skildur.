import Header from "@/components/dashboard/Header";
import OverviewCard from "@/components/dashboard/OverviewCard";
import ProjectCard from "@/components/dashboard/ProjectCard";

export default function WorkspacePage() {
  return (
    <div className="p-10">

      <Header />

      <section className="mt-10 grid grid-cols-4 gap-5">
        <OverviewCard title="Active Projects" value="12" />
        <OverviewCard title="Documents" value="84" />
        <OverviewCard title="Tasks" value="26" />
        <OverviewCard title="Team" value="8" />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">
          Projects
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-5">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

    </div>
  );
}