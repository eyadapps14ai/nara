export function Mark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M10 78V12h11l28 53V12h11v66H49L21 25v53H10Z" stroke="currentColor" strokeWidth="1.8"/><path d="M15.5 78V12M54.5 78V12M21 12l28 66" stroke="currentColor" strokeWidth="1"/><path d="M74 78V12h20c26 0 26 36 0 36H74M80 78V18h14c18 0 18 24 0 24H80" stroke="currentColor" strokeWidth="1.8"/></svg>;
}
export function Logo({ className = '' }: { className?: string }) {
  return <span className={`logo ${className}`}><Mark/><span className="wordmark">NARA<span>PROPERTIES</span></span></span>;
}
