import { site } from "@/content/site";
import { ChannelIcon } from "@/components/portfolio/ChannelIcon";

const linkStyle = "inline-flex min-h-8 items-center transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const labelStyle = "mb-2 font-display text-xs font-semibold tracking-widest";

export default function Footer() {
  const socials = site.contact.channels.filter((c) => c.icon !== "mail");
  return (
    <footer className="bg-footer px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" aria-label={`${site.meta.siteName} 홈`} className={`${linkStyle} font-display text-2xl font-bold tracking-tight text-white`}>
              {site.brand.wordmark}
            </a>
            <p className="mt-3 text-sm leading-7 text-white/75 break-keep">
              {site.footer.tagline.map((line, i) => (
                <span key={i}>{line}{i < site.footer.tagline.length - 1 && <br />}</span>
              ))}
            </p>
          </div>

          <nav aria-label="하단 메뉴">
            <h2 className={labelStyle}>MENU</h2>
            <ul className="grid grid-cols-2 gap-x-4">
              {site.nav.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className={`${linkStyle} text-sm text-white/75`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={labelStyle}>CONTACT</h2>
            <a href={`mailto:${site.contact.email}`} className={`${linkStyle} text-sm text-white/75`}>
              {site.contact.email}
            </a>
            <ul className="mt-1 flex flex-wrap gap-1">
              {socials.map((ch, i) => (
                <li key={i}>
                  <a href={ch.href} target="_blank" rel="noopener noreferrer" aria-label={`${ch.label} (새 창)`} title={ch.label} className={`${linkStyle} text-white/75 w-11 justify-center`}>
                    <ChannelIcon name={ch.icon} size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-white/15 pt-4">
          <p className="text-xs leading-6 text-white/60">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
