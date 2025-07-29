import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Rizqi Sarasajati",
  initials: "Jati",
  location: "D.I Yogyakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/wDw5i8DDymSvBSDD8",
  about: "Product Management Expert.",
  summary: (
    <>
      A product leader with 9+ years of experience building and scaling digital products across diverse domains. Brings a multidisciplinary background in Software Engineering, UI/UX Design, and Product Management. Skilled in leading cross-functional teams, aligning product strategy with business goals, and delivering impactful solutions from ideation to launch. Combines systems thinking with hands-on execution and a deep empathy for users.
    </>
  ),
  avatarUrl: "https://drive.google.com/file/d/1Z-aHG8p5ZC1BNw2FCvkg_kQxqNSUHziZ/view?usp=sharing",
  personalWebsiteUrl: "https://rizqisarasajati.com",
  contact: {
    email: "rizqisarasajati1109@gmail.com",
    tel: "+6285882266490",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sirizqi",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rizqis",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/sirizqi",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Amikom Purwokerto University",
      degree: "Bachelor's Degree in Informatics",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "KiriminAja",
      link: "https://kiriminaja.com",
      badges: ["On-Site", "Shipping Aggregator", "B2B", "B2C", "API Service"],
      title: "Product Manager",
      start: "Jun 2025",
      end: null,
      description: (
        <>
          Working on internal AI agents platform allowing marketing specialists
          to create AI workflows.
        </>
      ),
    },
    {
      company: "PT. Panda Advis Teknologi",
      link: "https://koda.so",
      badges: ["Remote", "AI Agent", "WhatsappBusiness", "F&B"],
      title: "Product Manager",
      start: "Nov 2024",
      end: "Jun 2025",
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Komerce",
      link: "https://komerce.id",
      badges: ["On-Site","Logistics Aggreagator","Debit Card Virtual","Etc.."],
      title: "Technical Product Manager (Lead PM)",
      start: "Jun 2023",
      end: "May 2025",
      description: (
        <>
          Leading 9+ PM/APM's in building SaaS.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Niagahoster",
      link: "https://niagahoster.co.id",
      badges: ["Remote", "Hosint Provider", "Design System", "UIX Design"],
      title: "UIX Designer",
      start: "2023",
      end: "2023",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "VHS 2 Purwokerto",
      link: "https://smkn2purwokerto.sch.id",
      badges: ["On Site", "Teaching", "Multimedia", "Game Development"],
      title: "Multimedia Teacher",
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Webding",
      link: "https://webding.com",
      badges: ["Hybrid", "Digital Invitation", "Product Management"],
      title: "Product Management",
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
    {
      company: "Mentari Satria",
      link: "https://mentarisatria.com",
      badges: ["Hybrid", "Digital Solution", "Software Development"],
      title: "Software Engineer - Backend Developer",
      start: "2015",
      end: "2019",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "Research & Analysis",
    "Product Strategy",
    "User Experience Design",
    "Agile Methodologies",
    "Cross-Functional Team Leadership",
    "Stakeholder Management",
    "Data-Driven Decision Making",
    "Software Development",
    "UI/UX Design",
    "Mobile Development",
    "Web Development",
    "API Design",
    "Cloud Computing",
    "Agile & Scrum",
  ],
  projects: [
    {
      title: "PassionJapan",
      techStack: ["PHP", "MySQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "passionjapan.id",
        href: "https://passionjapan.id/",
      },
    },
  ],
} as const;
