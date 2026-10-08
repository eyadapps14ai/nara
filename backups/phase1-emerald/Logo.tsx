export function Mark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 90" fill="none" aria-hidden="true"><path d="M13 78V12h12l30 53V12h12v66H55L25 25v53H13Z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 78V12M61 78V12M25 12l30 66" stroke="currentColor" strokeWidth="1"/></svg>;
}
export function Logo({ className = '' }: { className?: string }) {
  return <span className={`logo ${className}`}><Mark/><span className="wordmark">NARA<span>PROPERTIES</span></span></span>;
}
