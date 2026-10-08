'use client';
import { useEffect, useRef, useState } from 'react';
import { Logo, Mark } from './Logo';

export function Intro() {
  const [active, setActive] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const finish = () => { setActive(false); try { sessionStorage.setItem('nara-intro', 'seen'); } catch {} };
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false; try { seen = sessionStorage.getItem('nara-intro') === 'seen'; } catch {}
    if (reduced || seen) return;
    setActive(true);
    const timeout = setTimeout(() => { setActive(false); try { sessionStorage.setItem('nara-intro', 'seen'); } catch {} }, 6200);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (!active) return;
    const previous = document.activeElement as HTMLElement;
    const main = document.getElementById('site');
    main?.setAttribute('inert', ''); document.body.style.overflow = 'hidden'; skipRef.current?.focus({ preventScroll: true });
    return () => { main?.removeAttribute('inert'); document.body.style.overflow = ''; if (previous !== document.body) previous?.focus(); };
  }, [active]);
  if (!active) return null;
  return <div className="intro" role="dialog" aria-modal="true" aria-label="Nara Properties introduction" onKeyDown={e => { if (e.key === 'Escape') finish(); }}>
    <div className="intro-grid"/>
    <svg className="intro-structure" viewBox="0 0 800 600" fill="none" aria-hidden="true"><g stroke="currentColor"><path className="tower t1" d="M220 500V100h60v400"/><path className="tower t2" d="M520 500V100h60v400"/><path className="tower t3" d="M280 100 520 500M280 170 520 570"/><path className="floor" d="M0 500h800M0 570h800M400 600V0"/></g></svg>
    <div className="intro-brand"><Mark/><div className="intro-name">NARA<span>PROPERTIES</span></div><p>BEYOND REAL ESTATE</p></div>
    <span className="intro-caption">ARCHITECTURE BECOMES IDENTITY</span><button className="skip" ref={skipRef} onClick={finish}>Skip intro <span>↗</span></button>
  </div>;
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a href="#home" aria-label="Nara Properties home"><Logo/></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="navigation" className={open ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#about" onClick={() => setOpen(false)}>The Nara perspective</a><a href="#collection" onClick={() => setOpen(false)}>Our collection</a><a href="#dubai" onClick={() => setOpen(false)}>Life in Dubai</a><a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></a></nav></header>;
}
const categories = [
  { name: 'Off-plan properties', type: 'A vision of what’s next', image: '/images/architecture.webp', description: 'Explore new developments with guidance on timelines, payment plans, and the questions that matter before you commit.' },
  { name: 'Ready properties', type: 'Find your place, today', image: '/images/residence.webp', description: 'Consider completed homes through a clear view of location, layout, condition, and the practical steps toward ownership.' },
  { name: 'Luxury residences', type: 'Spaces that elevate everyday', image: '/images/villa.webp', description: 'Discover a direction shaped by thoughtful architecture, considered interiors, and the way you want to live.' },
  { name: 'Investment opportunities', type: 'A considered approach to value', image: '/images/dubai.webp', description: 'Start with your objectives. Consider the property, ownership costs, and market context with a long-term perspective.' },
];
export function Categories() {
  const [selected, setSelected] = useState(0);
  return <div className="category-layout"><div className="category-list">{categories.map((c, i) => <button key={c.name} className={selected === i ? 'category selected' : 'category'} aria-pressed={selected === i} onClick={() => setSelected(i)}><span className="category-number">0{i + 1}</span><span>{c.name}<small>{c.type}</small></span><span className="category-arrow">↗</span></button>)}</div><div className="category-visual"><img src={categories[selected].image} alt={`Illustrative photography for ${categories[selected].name}`} width="900" height="700" loading="lazy"/><div className="category-caption"><p>{categories[selected].description}</p><a href="#contact">Discuss your requirements <span>↗</span></a></div></div></div>;
}
export function ReplayIntro() {
  return <button className="replay" onClick={() => { try { sessionStorage.removeItem('nara-intro'); } catch {} window.location.assign('/'); }}>Replay brand film ↗</button>;
}
