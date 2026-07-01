"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

type IconProps = {
  className?: string;
};

function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M20 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M14 4.5a3 3 0 0 1 0 5.8" />
    </svg>
  );
}

function DumbbellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="M3 8v8" />
      <path d="M21 8v8" />
      <path d="M6 12h12" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l7 3v6c0 4.6-2.8 7.8-7 9-4.2-1.2-7-4.4-7-9V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M8 4h8v3a4 4 0 0 1-8 0V4z" />
      <path d="M10 15h4" />
      <path d="M12 11v4" />
      <path d="M8 20h8" />
      <path d="M8 5H5a2 2 0 0 0 2 2h1" />
      <path d="M16 5h3a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

function AppleBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16.9 12.8c0-2.1 1.7-3.1 1.8-3.1-1-1.5-2.5-1.7-3-1.8-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.7.8-3.4 2-.7 1.2-1 3.4-.3 5.2.3.9.7 1.9 1.3 2.8.6.8 1.2 1.6 2.2 1.6 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6 1 0 1.7-.8 2.3-1.6.7-.9 1-1.8 1.3-2.8-2-.8-1.6-4-1.6-4.3zM14.8 6.6c.5-.6.9-1.4.8-2.3-.8 0-1.7.5-2.2 1.1-.5.6-.9 1.4-.8 2.2.9.1 1.8-.4 2.2-1z" />
    </svg>
  );
}

function PlayBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="m5 3 12 9L5 21V3z" />
    </svg>
  );
}

const howItWorks = [
  {
    number: "1",
    title: "Create a Pact",
    description: "Invite your friends and set the rules.",
    icon: UsersIcon,
  },
  {
    number: "2",
    title: "Track Workouts",
    description: "Log every workout and build consistency over time.",
    icon: DumbbellIcon,
  },
  {
    number: "3",
    title: "Stay Accountable",
    description: "Miss a workout? Face the consequences.",
    icon: ShieldIcon,
  },
  {
    number: "4",
    title: "Dominate Together",
    description:
      "Compete in monthly rankings and become the most consistent member of your pact.",
    icon: TrophyIcon,
  },
];

const features = [
  {
    title: "Pact System",
    description: "Create pacts with friends. Everyone commits. Everyone stays accountable.",
  },
  {
    title: "Workout Tracking",
    description: "Track workouts with detailed exercises, weights, sets and progress.",
  },
  {
    title: "Accountability",
    description: "See who completed their workouts and who\'s falling behind.",
  },
  {
    title: "Monthly Rankings",
    description: "Compete in volume and step rankings. Prove your consistency.",
  },
  {
    title: "Detailed Statistics",
    description:
      "Advanced insights into progress, strength, volume, trends and personal records.",
  },
  {
    title: "Health Integration",
    description: "Sync your daily steps and activity data with Apple Health.",
  },
];

const screenshots = [
  {
    image: "/assets/single-phone-goal.png",
    title: "Goals",
    description:
      "Set strength goals, track your progress, and always know how far you are from achieving your next personal record.",
  },
  {
    image: "/assets/single-phone-analitycs.png",
    title: "Analytics",
    description:
      "Powerful statistics and performance insights that help you understand your progress and improve every workout.",
  },
  {
    image: "/assets/single-phone-training.png",
    title: "Workout Tracking",
    description:
      "A clean and intuitive workout logger designed to make tracking every set fast, simple and distraction-free.",
  },
  {
    image: "/assets/single-phone-chat.png",
    title: "Pact Chat",
    description:
      "Stay connected with your teammates, motivate each other and keep everyone accountable inside your private pact.",
  },
];

function StoreBadge({
  platform,
  subtitle,
}: {
  platform: "apple" | "play";
  subtitle: string;
}) {
  const icon = platform === "apple" ? <AppleBadgeIcon /> : <PlayBadgeIcon />;
  const label = platform === "apple" ? "App Store" : "Google Play";

  return (
    <div className="group inline-flex items-center gap-2 rounded-lg border border-black/20 bg-white px-3 py-2 text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
      <span className="text-black/85">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[9px] font-medium tracking-wide text-black/60 uppercase">{subtitle}</span>
        <span className="block text-xs font-semibold">{label}</span>
      </span>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observed = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal");
            if (id) {
              setVisible((prev) => ({ ...prev, [id]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    observed.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDownloadModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const heroTiltStyle = useMemo(
    () => ({
      transform: `perspective(1200px) translateY(${Math.min(scrollY * 0.06, 22)}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    }),
    [tilt, scrollY],
  );

  const onHeroMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - bounds.left) / bounds.width;
    const relY = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (relX - 0.5) * 4;
    const rotateX = (0.5 - relY) * 3;
    setTilt({ x: rotateX, y: rotateY });
  };

  const onMagneticMove: React.MouseEventHandler<HTMLElement> = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--mx", `${x * 0.11}px`);
    el.style.setProperty("--my", `${y * 0.16}px`);
  };

  const onMagneticLeave: React.MouseEventHandler<HTMLElement> = (event) => {
    const el = event.currentTarget;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  };

  const onDownloadClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="bg-white text-black">
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-18 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="InPact home" className="transition-opacity hover:opacity-75">
            <Image
              src="/assets/inpact-logo.png"
              alt="INPACT Logo"
              width={142}
              height={30}
              priority
              className="h-auto w-[120px] md:w-[142px]"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#how-it-works" className="transition-opacity hover:opacity-60">
              How it works
            </a>
            <a href="#features" className="transition-opacity hover:opacity-60">
              Features
            </a>
            <a href="#screenshots" className="transition-opacity hover:opacity-60">
              Screenshots
            </a>
            <a href="#faq" className="transition-opacity hover:opacity-60">
              FAQ
            </a>
          </div>

          <a
            href="#"
            className="btn-micro magnetic rounded-xl border border-black px-4 py-2 text-xs font-semibold transition-colors hover:bg-black hover:text-white md:text-sm"
            onMouseMove={onMagneticMove}
            onMouseLeave={onMagneticLeave}
            onClick={onDownloadClick}
          >
            Download the App
          </a>
        </div>
      </nav>

      <main id="top" className="pt-18">
        <section data-reveal="hero" className={`reveal px-5 py-16 md:px-8 md:py-24 ${visible.hero ? "reveal-visible" : ""}`}>
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="animate-fade-up">
              <div
                className="hero-copy-parallax"
                style={
                  {
                    ["--hero-title" as const]: `${Math.min(scrollY * 0.075, 26)}px`,
                    ["--hero-body" as const]: `${Math.min(scrollY * 0.055, 20)}px`,
                    ["--hero-actions" as const]: `${Math.min(scrollY * 0.038, 14)}px`,
                    ["--hero-stores" as const]: `${Math.min(scrollY * 0.03, 12)}px`,
                  } as CSSProperties
                }
              >
                <h1 className="hero-layer-title text-[clamp(2.8rem,8vw,5.2rem)] leading-[0.92] font-black tracking-[-0.04em] uppercase">
                  DON&apos;T
                  <br />
                  BREAK
                  <br />
                  THE PACT.
                </h1>

                <p className="hero-layer-body mt-7 max-w-xl text-base leading-relaxed text-black/75 md:text-[1.08rem]">
                  InPact is the fitness app that keeps you and your friends accountable.
                  {" "}
                  Create a pact, track every workout, stay consistent, and achieve your goals together.
                </p>

                <div className="hero-layer-actions mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="btn-micro magnetic inline-flex items-center gap-2 rounded-xl border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                    onMouseMove={onMagneticMove}
                    onMouseLeave={onMagneticLeave}
                    onClick={onDownloadClick}
                  >
                    Download the App
                  </a>
                </div>

                <div className="hero-layer-stores mt-7">
                  <p className="text-xs font-medium tracking-[0.16em] text-black/55 uppercase">Coming Soon To</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <StoreBadge platform="apple" subtitle="Download on the" />
                    <StoreBadge platform="play" subtitle="Get it on" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-up delay-150 relative flex justify-center lg:justify-end"
              onMouseMove={onHeroMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            >
              <div className="hero-glow" />
              <div className="hero-phone float-phone transition-transform duration-200" style={heroTiltStyle}>
                <Image
                  src="/assets/double-phone-main.png"
                  alt="Double Phone Main"
                  width={760}
                  height={760}
                  priority
                  sizes="(max-width: 1024px) 92vw, 56vw"
                  className="hero-phone-img h-auto w-full max-w-[680px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          data-reveal="how"
          className={`reveal bg-black px-5 py-16 text-white md:px-8 md:py-24 ${visible.how ? "reveal-visible" : ""}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-[1.95rem] font-black tracking-tight uppercase">How it works</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item, index) => (
                <article
                  key={item.title}
                  className="how-card animate-fade-up rounded-2xl border border-white/18 px-5 py-6"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="icon-shell inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/22 text-lg">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-4 text-lg font-bold">{item.number}</p>
                  <h3 className="mt-2 text-base font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          data-reveal="features"
          className={`reveal px-5 py-16 md:px-8 md:py-24 ${visible.features ? "reveal-visible" : ""}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-[clamp(2.2rem,5.2vw,3.4rem)] leading-[0.96] font-black tracking-[-0.03em] uppercase">
              Built for Discipline.
              <br />
              Made for Brotherhood.
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="feature-card animate-fade-up rounded-2xl border border-black/12 px-6 py-7 transition-transform duration-300"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <h3 className="text-base font-bold uppercase">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/66">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="screenshots"
          data-reveal="shots"
          className={`reveal bg-black px-5 py-16 text-white md:px-8 md:py-24 ${visible.shots ? "reveal-visible" : ""}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-[clamp(2rem,4.8vw,3.2rem)] leading-[0.96] font-black tracking-[-0.03em] uppercase">
              Everything You Need.
              <br />
              Nothing You Don&apos;t.
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((item, index) => (
                <article
                  key={item.title}
                  className="shot-card animate-fade-up rounded-2xl border border-white/18 px-4 py-5"
                  style={
                    {
                      animationDelay: `${index * 70}ms`,
                      ["--shot-parallax" as const]: `${Math.min(scrollY * 0.012, 12)}px`,
                    } as CSSProperties
                  }
                >
                  <div className="shot-image mx-auto max-w-[220px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={720}
                      sizes="(max-width: 640px) 74vw, (max-width: 1024px) 48vw, 240px"
                      className="h-auto w-full"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" data-reveal="cta" className={`reveal px-5 py-20 md:px-8 md:py-32 ${visible.cta ? "reveal-visible" : ""}`}>
          <div className="mx-auto max-w-[1200px]">
            <div className="animate-fade-up rounded-2xl border border-black/20 px-7 py-10 md:px-12 md:py-14">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="text-[clamp(2rem,5vw,3.8rem)] leading-[0.94] font-black tracking-[-0.03em] uppercase">
                    BE THE FIRST.
                    <br />
                    JOIN THE MOVEMENT.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70 md:text-base">
                    Download InPact and start building consistency with your friends.
                  </p>
                </div>

                <a
                  href="#"
                  className="btn-micro magnetic inline-flex h-13 items-center justify-center rounded-xl border border-black bg-black px-8 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                  onMouseMove={onMagneticMove}
                  onMouseLeave={onMagneticLeave}
                  onClick={onDownloadClick}
                >
                  Download the App
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="faq" data-reveal="footer" className={`reveal bg-black px-5 py-12 text-white md:px-8 ${visible.footer ? "reveal-visible" : ""}`}>
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/inpact-logo.png"
              alt="Inpact Logo"
              width={130}
              height={28}
              className="h-auto w-[112px] invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/72">
              InPact is the fitness app that helps friends stay accountable, build discipline and
              achieve their goals together.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/70">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/70">Support</p>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-65">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/70">Coming soon to</p>
            <div className="mt-3 space-y-3">
              <StoreBadge platform="apple" subtitle="Download on the" />
              <StoreBadge platform="play" subtitle="Get it on" />
            </div>
          </div>
        </div>
      </footer>

      {isDownloadModalOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 px-5"
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-black/20 bg-white p-7 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-xl font-bold tracking-tight">InPact</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Aplikacja będzie gotowa wkrótce. Pracujemy nad premierą i już niedługo będzie dostępna
              do pobrania.
            </p>
            <button
              type="button"
              className="btn-micro mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-black bg-black px-6 text-sm font-semibold text-white"
              onClick={() => setIsDownloadModalOpen(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
