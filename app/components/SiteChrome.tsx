"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["Shop Wigs", "/#collections"],
  ["About", "/#about"],
  ["Services", "/#services"],
  ["FAQ", "/#faq"],
  ["Contact", "/contact"],
];

export function Nav({ contact = false }: { contact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className={`nav ${scrolled || contact ? "scrolled" : ""}`}>
      <Link className="nav-brand" href="/" onClick={() => setOpen(false)}>
        WigsBy<span>Mia</span>
      </Link>
      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map(([label, href]) => (
          <li key={label}>
            <Link
              className={contact && label === "Contact" ? "active-link" : ""}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="mobile-shop-link">
          <a href="https://www.vagaro.com/miakelly/products" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Shop</a>
        </li>
      </ul>
      <a className="nav-cart" href="https://www.vagaro.com/miakelly/products" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div className="gold-line" />
      <footer className="footer suede-dark2">
        <div>
          <div className="footer-name">Wigs by Mia Kelly</div>
          <p className="footer-desc">
            Premium luxury wigs handcrafted with care. Located at 1139 West 14
            Mile Rd. Suite 101, Clawson MI 48017. Serving clients across the US.
          </p>
        </div>
        <div>
          <p className="footer-col-title">Shop</p>
          <ul className="footer-links">
            <li><Link href="/#collections">Shop All Wigs</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><Link href="/#about">About Mia</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/wigsbymiakelly/" target="_blank" rel="noopener noreferrer">@wigsbymiakelly</a></li>
            <li><a href="https://www.facebook.com/mia.jenkins.142" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="tel:+16166341357">616-634-1357</a></li>
            <li><a className="footer-book" href="https://www.vagaro.com/miakelly/services" target="_blank" rel="noopener noreferrer">Book an Appointment</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom suede-dark2">
        <span className="footer-copy">© 2026 Wigs by Mia Kelly. All rights reserved.</span>
        <span className="footer-copy">1139 W. 14 Mile Rd. Suite 101, Clawson MI 48017 · <a href="tel:+16166341357">616-634-1357</a></span>
      </div>
    </>
  );
}
