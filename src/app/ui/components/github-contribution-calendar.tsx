import { formatGithubContributionsDate } from "@/app/utils/utils";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

export type ContributionCalendar = {
  weeks: Week[];
};

type Rows = {
  contributionDays: ContributionDay[];
}[];

function transformToRows(contributionCalendar: ContributionCalendar): Rows {
  const maxDays = Math.max(
    ...contributionCalendar.weeks.map((week) => week.contributionDays.length)
  );

  const rows: Rows = Array.from({ length: maxDays }, (_, dayIndex) => ({
    contributionDays: contributionCalendar.weeks
      .map((week) => week.contributionDays[dayIndex])
      .filter((day) => day !== undefined),
  }));

  return rows;
}

export default function GitHubContributionCalendar( {calendarData} : {calendarData: ContributionCalendar}) {

  const rows = transformToRows(calendarData);

  const maxContribution = Math.max(
    ...calendarData.weeks.flatMap(week => week.contributionDays.map(day => day.contributionCount))
  );

  const legend: { min: number; max: number }[] = [
    { min: 1,                                      max: Math.floor(0.25 * maxContribution) },
    { min: Math.floor(0.25 * maxContribution) + 1, max: Math.floor(0.50 * maxContribution) },
    { min: Math.floor(0.50 * maxContribution) + 1, max: Math.floor(0.75 * maxContribution) },
    { min: Math.floor(0.75 * maxContribution) + 1, max: maxContribution }
  ];

  const getBackgroundColor = (count: number): string => {
    if (count === 0) return        "bg-surface-primary dark:bg-surface-primaryDark";

    const percentage = count / maxContribution;
    if (percentage <= 0.25) return "bg-color-secondary/40 dark:bg-color-quaternary/40";
    if (percentage <= 0.5) return  "bg-color-secondary/60 dark:bg-color-quaternary/60";
    if (percentage <= 0.75) return "bg-color-secondary/80 dark:bg-color-quaternary/80";

    return                         "bg-color-secondary dark:bg-color-quaternary";
  };

  return (
    <div className="
      flex flex-col gap-2 items-end
      w-min mb-6 p-1.5 rounded-md
      bg-surface-hoverDark dark:bg-surface-hover
    ">

      <div className="overflow-x-auto w-auto">
        <div className="grid grid-rows-7 gap-0.5">
          {
            rows.map((row, rowIndex) => {
              return (
                <div className="flex flex-row gap-0.5 flex-nowrap" key={rowIndex}>
                  {
                    row.contributionDays.map((day, dayIndex) => {
                      return (
                        <div
                          key={`${rowIndex}-${dayIndex}`}
                          title={`${formatGithubContributionsDate(day.date)}: ${day.contributionCount} ${day.contributionCount === 1 ? "contribuição" : "contribuições"}`}
                          className={`
                            w-2.5 h-2.5 rounded
                            border border-0.5
                            border-color-quaternary dark:border-color-primary
                            ${getBackgroundColor(day.contributionCount)}
                          `}
                        />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="flex flex-row items-center gap-1.5 w-full">
        <div className="h-0.75 w-full rounded-full bg-surface-hoverDark dark:bg-surface-hover" />
        <span className="text-xs text-surface-primaryDark dark:text-surface-primary">Menos</span>
        <div className="flex flex-row gap-0.5">
          <div
            className="
              w-2.5 h-2.5 rounded
              border border-0.5
              border-color-quaternary dark:border-color-primary
              bg-surface-primary dark:bg-surface-hover
            "
            title="0"
          />
          {
            legend.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`
                    w-2.5 h-2.5 rounded
                    border border-0.5
                    border-color-quaternary dark:border-color-primary
                    ${getBackgroundColor(item.min)}
                  `}
                  title={`${item.min} – ${item.max}`}
                />
              )
            })
          }
        </div>
        <span className="text-xs text-surface-primaryDark dark:text-surface-primary">Mais</span>
      </div>

    </div>
  );
};
