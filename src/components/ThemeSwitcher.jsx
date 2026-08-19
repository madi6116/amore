// NOTE: This toggle is only here so you can preview both color directions
// in one running app and decide which to keep. Once a direction is chosen,
// delete this component (and its import/usage in App.jsx) and hard-code
// data-theme="ivory" or data-theme="blue" on the .site div in App.jsx.
function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Preview color theme">
      <button
        type="button"
        className={theme === 'ivory' ? 'active' : ''}
        onClick={() => setTheme('ivory')}
      >
        Ivory
      </button>
      <button
        type="button"
        className={theme === 'blue' ? 'active' : ''}
        onClick={() => setTheme('blue')}
      >
        Blue
      </button>
    </div>
  )
}

export default ThemeSwitcher
