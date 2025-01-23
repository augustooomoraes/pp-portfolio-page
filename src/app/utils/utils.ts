export function formatGithubContributionsDate(date: string): string {
  const newDate = new Date(date);
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formatter.format(newDate).replace(".", "").replaceAll("de ", "");
}