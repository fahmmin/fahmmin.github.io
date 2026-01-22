import TechStack from "./components/TechStack";
import Spotify from "./components/Spotify";
import Experience from "./components/Experience";
import RecentPublished from "./components/RecentPublished";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Link from "next/link";
import GithubContributions from "./components/GithubContributions";
import { SOCIAL_LINKS } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="containers">
      <div className="mb-0 p-4 screen-line-before screen-line-after bg-background">
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
            i&#x27;m a{" "}
            <span className="text-gray-900 dark:text-stone-100">
              20-year-old
            </span>{" "}
            software developer pursuing B.tech in IIIT based in{" "}
            <span className="text-gray-900 dark:text-stone-100 italic">
              kerala,india
            </span>
            , specializing in agentic AI and high performance blockchain systems.
          </p>
          <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
            connect with me on
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.name === 'github' ? FaGithub :
                link.name === 'linkedin' ? FaLinkedin :
                  link.name === 'X' ? FaXTwitter :
                    link.name === 'email' ? MdEmail : null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name === 'email' ? undefined : "_blank"}
                  rel={link.name === 'email' ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-stone-400 hover:text-foreground transition-colors"
                >
                  {Icon && <Icon size={16} />}
                  <span className="capitalize">{link.name}</span>
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
            i work on building scalable systems on ethereum, focusing on consensus
            mechanisms, network protocols, and distributed architecture.
          </p>
          <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
            i write about AI and blockchain infrastructure and distributed systems.
            recently published about how{" "}
            <Link
              href="/sne"
              className="text-gray-900 dark:text-stone-100 italic relative group"
            >
              flare blockchain is bridging trust and security as an evm chain
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>{" "}
          </p>
          <TechStack />
          <div className="pt-6 pb-2 space-y-3">
            <p className="text-sm lowercase tracking-tight text-gray-600 dark:text-white">
              when I code, music helps me stay in the flow. Here&#x27;s what
              I&#x27;m listening to right now.
            </p>
            <Spotify />
          </div>
        </div>
      </div>


      <Experience />
      <RecentPublished />
      <section className="py-6 screen-line-before screen-line-after">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-playfair font-medium tracking-tight mb-4">GitHub Activity</h2>
            <GithubContributions />
          </div>
        </div>
      </section>
      <Projects />
      <Contact />
    </main>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-stone-800 text-gray-700 dark:text-stone-300 hover:bg-gray-200 dark:hover:bg-stone-700 transition-colors">
      <span className="text-sm">{label}</span>
    </a>
  )
}
