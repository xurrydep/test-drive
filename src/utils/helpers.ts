export const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
};

export const getDifficultyColor = (difficulty: string): string => {
  const colors: Record<string, string> = {
    beginner: 'text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-300',
    intermediate: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300',
    advanced: 'text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-300',
  };
  return colors[difficulty] || colors.beginner;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
