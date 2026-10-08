from pathlib import Path
root = Path('public/brand')
root.mkdir(parents=True, exist_ok=True)
mark = '<path d="M10 78V12h11l28 53V12h11v66H49L21 25v53H10Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 78V12M54.5 78V12M21 12l28 66" fill="none" stroke="currentColor" stroke-width="1"/><path d="M74 78V12h20c26 0 26 36 0 36H74M80 78V18h14c18 0 18 24 0 24H80" fill="none" stroke="currentColor" stroke-width="1.8"/>'
for name, color in [('full-color', '#c5a36a'), ('white', '#f2eee5'), ('dark', '#111410')]:
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 100" color="{color}" role="img" aria-label="Nara Properties architectural NP logo"><g transform="translate(0 5)">{mark}</g><g fill="currentColor"><text x="140" y="57" font-family="Georgia,serif" font-size="43" letter-spacing="8">NARA</text><text x="143" y="80" font-family="Arial,sans-serif" font-size="10" letter-spacing="5.8">PROPERTIES</text></g></svg>'
    (root / f'logo-{name}.svg').write_text(svg)
(root / 'symbol.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90" color="#c5a36a" role="img" aria-label="Nara architectural NP monogram">{mark}</svg>')
