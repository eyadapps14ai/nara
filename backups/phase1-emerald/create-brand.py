from pathlib import Path
root=Path('public/brand')
root.mkdir(parents=True,exist_ok=True)
mark='<path d="M13 78V12h12l30 53V12h12v66H55L25 25v53H13Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M19 78V12M61 78V12M25 12l30 66" fill="none" stroke="currentColor" stroke-width="1"/>'
for name,color in [('full-color','#173e32'),('white','#ffffff'),('dark','#202824')]:
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 100" color="{color}" role="img" aria-label="Nara Properties"><g transform="translate(0 5)">{mark}</g><g fill="currentColor"><text x="100" y="57" font-family="Georgia,serif" font-size="43" letter-spacing="8">NARA</text><text x="103" y="80" font-family="Arial,sans-serif" font-size="10" letter-spacing="5.8">PROPERTIES</text></g></svg>'
    (root/f'logo-{name}.svg').write_text(svg)
(root/'symbol.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" color="#173e32" role="img" aria-label="Nara architectural N">{mark}</svg>')
# Three genuinely distinct geometric directions.
(root/'concept-02-portico.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" color="#173e32" role="img" aria-label="Portico N"><path d="M20 85V15L80 85V15M28 85V35L72 85V15" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12 90h76" stroke="currentColor" stroke-width="1"/></svg>')
(root/'concept-03-monolith.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#173e32" role="img" aria-label="Monolith N"><path d="M20 85V15h13l34 48V15h13v70H67L33 37v48Z"/><path d="M87 15h2v70h-2Z"/></svg>')
