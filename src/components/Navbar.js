import React, { useEffect, useState, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Project' },
	{ id: 'contact', label: 'Contact' },
];

export default function Navbar() {
	const [active, setActive] = useState('home');

	// Smooth scroll with header offset
	const handleNav = useCallback((e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (!el) return;
		const nav = document.querySelector('.site-navbar');
		const navHeight = nav ? nav.offsetHeight : 0;
		const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
		window.scrollTo({ top, behavior: 'smooth' });
	}, []);

	// Observe sections to update active link
	useEffect(() => {
		const sectionIds = NAV_LINKS.map((l) => l.id);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ root: null, rootMargin: '-30% 0px -50% 0px', threshold: 0 }
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header className="site-navbar">
			<div className="site-brand"> Dewmi Wickramasinghe's Portfolio.</div>
			<nav className="site-nav">
				{NAV_LINKS.map((link) => (
					<a
						key={link.id}
						href={`#${link.id}`}
						onClick={(e) => handleNav(e, link.id)}
						className={active === link.id ? 'active' : ''}
						aria-current={active === link.id ? 'page' : undefined}
					>
						{link.label}
					</a>
				))}
			</nav>
		</header>
	);
}

