import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function GithubLink({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return <a href={href === "/contact" ? "/contact.html" : href} {...props}>{children}</a>;
}
