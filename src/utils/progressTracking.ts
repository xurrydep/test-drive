export const getProgress = (tutorialId: string): string[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(`progress_${tutorialId}`);
  return stored ? JSON.parse(stored) : [];
};

export const saveProgress = (tutorialId: string, completedModules: string[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`progress_${tutorialId}`, JSON.stringify(completedModules));
};

export const toggleModuleComplete = (tutorialId: string, moduleId: string): string[] => {
  const current = getProgress(tutorialId);
  const updated = current.includes(moduleId)
    ? current.filter((id) => id !== moduleId)
    : [...current, moduleId];
  saveProgress(tutorialId, updated);
  return updated;
};

export const clearProgress = (tutorialId: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`progress_${tutorialId}`);
};
