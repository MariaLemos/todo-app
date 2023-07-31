export function getPreferredTheme(): ThemeName {
  const localStorageThemePreference = localStorage.getItem(
    "theme"
  ) as ThemeName;

  const userPrefenceByBrowser = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  return localStorageThemePreference ?? userPrefenceByBrowser;
}
