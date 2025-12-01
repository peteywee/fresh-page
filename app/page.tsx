"use client"

import type React from "react"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Users,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  BarChart3,
  Settings,
  UserPlus,
  Zap,
  Sparkles,
  ArrowRight,
  Loader2,
  AlertCircle,
  LogOut,
  DollarSign,
  UploadCloud,
  FileSpreadsheet,
  FileText,
  ShieldCheck,
  Layers,
  MousePointerClick,
  Mail,
  Calculator,
  Menu,
} from "lucide-react"
import {
  ROLES,
  ROLE_COLORS,
  INITIAL_EMPLOYEES,
  getWeekDays,
  generateShiftsForDays,
  type Employee,
  type Shift,
  type Role,
} from "@/lib/config"

// ==========================================
// --- MARKETING COMPONENTS ---
// ==========================================

function Navbar({ onJoinBeta }: { onJoinBeta: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image src="/logos/primary.png" alt="Top Shelf Service" width={40} height={40} className="rounded-xl" />
          <span className="text-2xl font-black tracking-tighter text-foreground">Fresh Schedules</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
          >
            Early Access
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:block text-sm font-bold text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
            onClick={onJoinBeta}
          >
            Log In
          </button>
          <Button
            onClick={onJoinBeta}
            className="hidden sm:flex gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Request Invite
            <ArrowRight size={16} />
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-6 gap-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Early Access
            </button>
            <div className="h-px bg-border my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onJoinBeta()
              }}
              className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors py-2"
            >
              Log In
            </button>
            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                onJoinBeta()
              }}
              className="w-full gap-2 mt-2"
            >
              Request Invite
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroSection({ onJoinBeta }: { onJoinBeta: () => void }) {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top fade for navbar blend */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
          <Sparkles size={14} />
          <span>Pilot Program Open for Restaurants & Venues</span>
        </div>

        <div className="mb-8 relative">
          <div className="absolute inset-0 w-24 h-24 mx-auto bg-primary/30 rounded-full blur-2xl" />
          <Image
            src="/logos/primary.png"
            alt="Top Shelf Service"
            width={100}
            height={100}
            className="mx-auto relative"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-foreground mb-8 leading-[0.9] text-balance">
          The Hardest Part <br />
          <span className="text-primary drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">Is Done For You.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          The operating system for your venue. No chatbots, no complex setups. Just import your history and get an
          optimized schedule in seconds.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onJoinBeta}
            className="w-full md:w-auto min-w-[200px] h-14 text-lg shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Request Early Access
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToHowItWorks}
            className="w-full md:w-auto min-w-[200px] h-14 text-lg gap-2 border-border bg-background/50 hover:bg-secondary hover:border-muted-foreground transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Clock size={18} />
            See How It Works
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Setup Time", value: "< 5 min" },
            { label: "Cost Savings", value: "15-20%" },
            { label: "Hours Saved", value: "10+/week" },
            { label: "Staff Happy", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase text-muted-foreground tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      icon: UploadCloud,
      title: "1. Import Data",
      desc: "Drag & drop your CSV or Excel files. We instantly process your historical sales & labor data.",
    },
    {
      icon: Layers,
      title: "2. Auto-Optimize",
      desc: "Our engine identifies patterns, predicts labor needs, and finds coverage gaps automatically.",
    },
    {
      icon: MousePointerClick,
      title: "3. Publish",
      desc: "Review the generated schedule, use Smart Fill for tweaks, and publish to your team.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Three steps to an optimized schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
            >
              <div className="w-24 h-24 bg-card border border-border rounded-2xl flex items-center justify-center text-primary mb-6 shadow-xl transition-transform hover:scale-105">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  const features = [
    {
      icon: UploadCloud,
      title: "History Import",
      desc: "Drag & drop your CSV sales data. We analyze patterns to predict labor needs.",
    },
    {
      icon: Zap,
      title: "Smart Fill",
      desc: "One click to fill empty shifts based on availability, overtime rules, and skill rating.",
    },
    {
      icon: DollarSign,
      title: "Real-Time Costing",
      desc: "See your labor percentage change instantly as you tweak the schedule.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Guard",
      desc: "Automatic alerts for overtime, breaks, and minor labor laws.",
    },
    {
      icon: Users,
      title: "Team Mobile App",
      desc: "Staff gets notified instantly. Swaps and time-off requests handling included.",
    },
    {
      icon: BarChart3,
      title: "Variance Reporting",
      desc: "Compare scheduled vs. actual hours to spot leakage immediately.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-card relative border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Built for Operations, <br /> Not Just HR.
          </h2>
          <p className="text-xl text-muted-foreground">We focus on the metrics that actually matter to your P&L.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection({ onJoinBeta }: { onJoinBeta: () => void }) {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Early Access.</h2>
          <p className="text-xl text-muted-foreground">
            We are accepting a limited number of partners to shape the future of Fresh Schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <div className="p-8 rounded-2xl bg-card border border-border opacity-60 blur-[1px] hover:blur-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-xl font-bold text-foreground mb-2">Standard</h3>
            <div className="text-3xl font-black text-foreground mb-6">
              $49<span className="text-sm font-medium text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li className="flex gap-2">
                <Check size={16} /> Up to 20 Employees
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Basic Scheduling
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Email Support
              </li>
            </ul>
            <Button variant="secondary" className="w-full" disabled>
              Coming Soon
            </Button>
          </div>

          {/* Beta Plan (Featured) */}
          <div className="p-8 rounded-2xl bg-background border-2 border-primary relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Limited Availability
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Pilot Program</h3>
            <div className="text-4xl font-black text-foreground mb-6">
              Beta<span className="text-sm font-medium text-muted-foreground">/Access</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 border-b border-border pb-6">
              Partner with us to build the perfect OS for your venue. Get early features and direct access to the team.
            </p>
            <ul className="space-y-4 mb-8 text-foreground">
              <li className="flex gap-2 text-primary">
                <Check size={18} /> <strong>Unlimited</strong> Employees
              </li>
              <li className="flex gap-2 text-primary">
                <Check size={18} /> <strong>AI</strong> Smart Fill
              </li>
              <li className="flex gap-2 text-primary">
                <Check size={18} /> Historical Imports
              </li>
              <li className="flex gap-2 text-primary">
                <Check size={18} /> Priority Support
              </li>
            </ul>
            <Button
              className="w-full h-12 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={onJoinBeta}
            >
              Request Invite
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-2xl bg-card border border-border opacity-60 blur-[1px] hover:blur-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-xl font-bold text-foreground mb-2">Enterprise</h3>
            <div className="text-3xl font-black text-foreground mb-6">Custom</div>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li className="flex gap-2">
                <Check size={16} /> Unlimited Locations
              </li>
              <li className="flex gap-2">
                <Check size={16} /> API Access
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Dedicated Manager
              </li>
            </ul>
            <Button variant="secondary" className="w-full" disabled>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src="/logos/primary.png" alt="Top Shelf Service" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-muted-foreground">Fresh Schedules</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <Mail size={14} />
            <a href="mailto:cravenwspatrick@Gmail.com" className="hover:text-primary transition-colors">
              cravenwspatrick@Gmail.com
            </a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">© 2025 Top Shelf Service LLC™. All rights reserved.</div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}

// ==========================================
// --- MODAL COMPONENTS ---
// ==========================================

function Modal({
  isOpen,
  onClose,
  title,
  children,
}: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-card border border-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

function BetaSignupModal({
  isOpen,
  onClose,
  onComplete,
}: { isOpen: boolean; onClose: () => void; onComplete: () => void }) {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({})
  const [formData, setFormData] = useState({ name: "", email: "", company: "" })

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; company?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(2)
      setTimeout(() => {
        onComplete()
        setStep(1)
        setFormData({ name: "", email: "", company: "" })
        setErrors({})
      }, 1500)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-card border border-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logos/primary.png" alt="Top Shelf Service" width={40} height={40} className="rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Request Early Access</h3>
                <p className="text-muted-foreground text-sm">Join the pilot program for Fresh Schedules.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setErrors({ ...errors, name: undefined })
                  }}
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.name ? "border-destructive" : "border-border"}`}
                  placeholder="e.g. Carmy Berzatto"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">Work Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setErrors({ ...errors, email: undefined })
                  }}
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.email ? "border-destructive" : "border-border"}`}
                  placeholder="chef@thebear.com"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                  Company / Restaurant
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value })
                    setErrors({ ...errors, company: undefined })
                  }}
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.company ? "border-destructive" : "border-border"}`}
                  placeholder="The Bear"
                />
                {errors.company && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button
                type="button"
                variant="ghost"
                className="flex-1 focus-visible:ring-2 focus-visible:ring-primary"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 gap-2 focus-visible:ring-2 focus-visible:ring-primary"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
                {loading ? "Submitting..." : "Continue to Demo"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">You're In!</h3>
            <p className="text-muted-foreground">Launching the demo now...</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ImportModal({
  isOpen,
  onClose,
  onImport,
}: { isOpen: boolean; onClose: () => void; onImport: (filename: string) => void }) {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    else if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0])
  }

  const handleUpload = () => {
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      onImport(file ? file.name : "sales_data_2024.csv")
      setFile(null)
      onClose()
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-card border border-border w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-bold tracking-tight text-foreground">Import Historical Data</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              dragActive ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground bg-background"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!file ? (
              <>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                  <UploadCloud size={32} />
                </div>
                <p className="text-foreground font-bold mb-2">Drag & Drop CSV or Excel File</p>
                <p className="text-muted-foreground text-sm mb-6">or click to browse from your computer</p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".csv, .xlsx, .xls"
                  onChange={handleChange}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-primary"
                >
                  Browse Files
                </label>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <FileSpreadsheet size={32} />
                </div>
                <p className="text-foreground font-bold mb-1">{file.name}</p>
                <p className="text-muted-foreground text-sm mb-6">
                  {(file.size / 1024).toFixed(2)} KB • Ready to upload
                </p>
                <button
                  onClick={() => setFile(null)}
                  className="text-destructive text-sm hover:text-destructive/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
                >
                  Remove File
                </button>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" onClick={onClose} className="focus-visible:ring-2 focus-visible:ring-primary">
              Cancel
            </Button>
            <Button
              disabled={!file}
              onClick={handleUpload}
              className="gap-2 focus-visible:ring-2 focus-visible:ring-primary"
            >
              {uploading ? <Loader2 className="animate-spin" size={18} /> : <Check size={18} />}
              {uploading ? "Processing..." : "Import & Analyze"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// --- ONBOARDING COMPONENT ---
// ==========================================

function AppOnboarding({
  onStart,
  onStartScratch,
  onOpenImport,
  importedFile,
  onBackHome,
}: {
  onStart: () => void
  onStartScratch: () => void
  onOpenImport: () => void
  importedFile: string | null
  onBackHome: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [loadingScratch, setLoadingScratch] = useState(false)

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => onStart(), 1500)
  }
  const handleStartScratch = () => {
    setLoadingScratch(true)
    setTimeout(() => onStartScratch(), 800)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <Button variant="ghost" onClick={onBackHome} className="gap-2 focus-visible:ring-2 focus-visible:ring-primary">
          <ChevronLeft size={18} />
          Back to Website
        </Button>
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80"
          alt="Busy commercial kitchen"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto z-10">
        <div className="mb-6 flex items-center justify-center">
          <Image src="/logos/primary.png" alt="Top Shelf Service" width={80} height={80} className="mb-8" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground">
          Welcome to <br /> Fresh Schedules.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Import your historical sales and labor data. <br />
          We'll analyze it to generate an optimized schedule in seconds.
        </p>
        <div className="flex flex-col items-center gap-6 w-full md:w-auto">
          {!importedFile ? (
            <Button
              size="lg"
              onClick={onOpenImport}
              className="w-full md:w-auto min-w-[280px] gap-2 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <UploadCloud size={18} />
              Import Last Year's Data
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-primary/10 border border-primary/30 px-6 py-3 rounded-xl flex items-center gap-3 text-primary backdrop-blur-md">
                <FileSpreadsheet size={20} />
                <span className="font-bold">{importedFile}</span>
                <Check size={16} />
              </div>
              <Button
                size="lg"
                onClick={handleStart}
                disabled={loading}
                className="w-full md:w-auto min-w-[280px] gap-2 focus-visible:ring-2 focus-visible:ring-primary"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} />}
                {loading ? "Analyzing & Generating..." : "Generate Schedule"}
              </Button>
            </div>
          )}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm text-muted-foreground">OR</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <Button
            variant="ghost"
            onClick={handleStartScratch}
            disabled={loading || loadingScratch}
            className="backdrop-blur-sm gap-2 focus-visible:ring-2 focus-visible:ring-primary"
          >
            {loadingScratch && <Loader2 className="animate-spin" size={18} />}
            Start from Scratch (Manual)
          </Button>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// --- APP / DASHBOARD COMPONENTS ---
// ==========================================

function ScheduleView({
  employees,
  shifts,
  onCellClick,
  hoveredCell,
  setHoveredCell,
  onSmartFill,
  currentDays,
}: {
  employees: Employee[]
  shifts: Shift[]
  onCellClick: (empId: number, dateFull: string, existingShift: Shift | undefined) => void
  hoveredCell: string | null
  setHoveredCell: (cell: string | null) => void
  onSmartFill: () => void
  currentDays: ReturnType<typeof getWeekDays>
}) {
  const getShiftForCell = (empId: number, dateFull: string) =>
    shifts.find((s) => s.empId === empId && s.day === dateFull)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-4 bg-secondary/50 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
            <AlertCircle size={12} />3 Open Shifts Detected
          </div>
        </div>
        <Button onClick={onSmartFill} className="gap-2 focus-visible:ring-2 focus-visible:ring-primary">
          <Sparkles size={16} />
          Smart Fill (1-Click)
        </Button>
      </div>

      <div className="grid grid-cols-[200px_repeat(7,1fr)] border-b border-border overflow-x-auto">
        <div className="p-4 bg-secondary border-r border-border font-medium text-muted-foreground uppercase text-xs tracking-wider flex items-center">
          Employee
        </div>
        {currentDays.map((d) => (
          <div
            key={d.fullDate}
            className="p-4 text-center border-r border-border last:border-0 bg-secondary min-w-[100px]"
          >
            <div className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">{d.day}</div>
            <div className="text-lg font-bold">{d.date}</div>
          </div>
        ))}
      </div>

      <div className="divide-y divide-border">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-[200px_repeat(7,1fr)] group hover:bg-secondary/50 transition-colors"
          >
            <div className="p-4 border-r border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-muted-foreground text-sm shrink-0">
                {emp.avatar}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{emp.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{emp.role}</div>
              </div>
            </div>
            {currentDays.map((day) => {
              const shift = getShiftForCell(emp.id, day.fullDate)
              const isHovered = hoveredCell === `${emp.id}-${day.fullDate}`
              const roleColor = shift ? ROLE_COLORS[shift.role as Role] || ROLE_COLORS["Server"] : null

              return (
                <div
                  key={`${emp.id}-${day.fullDate}`}
                  className={`relative border-r border-border/50 last:border-0 p-1.5 transition-all duration-200 min-w-[100px] ${
                    !shift ? "hover:bg-secondary/30 cursor-pointer" : ""
                  }`}
                  onMouseEnter={() => setHoveredCell(`${emp.id}-${day.fullDate}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                  onClick={() => onCellClick(emp.id, day.fullDate, shift)}
                >
                  {shift ? (
                    <div
                      className={`h-full ${roleColor?.bg} border ${roleColor?.border} rounded-lg p-2 transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer relative overflow-hidden`}
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full ${roleColor?.indicator}`} />
                      <div className="flex justify-between items-start mb-1 pl-2">
                        <span className="text-xs font-bold text-foreground">
                          {shift.start}-{shift.end}
                        </span>
                      </div>
                      <div className={`text-[10px] uppercase tracking-wider pl-2 font-semibold ${roleColor?.text}`}>
                        {shift.role}
                      </div>
                    </div>
                  ) : (
                    isHovered && (
                      <div className="h-full border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground animate-in fade-in zoom-in duration-100">
                        <Plus size={20} />
                      </div>
                    )
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsView({ importedFile, onOpenImport }: { importedFile: string | null; onOpenImport: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Labor Analytics</h2>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenImport}
            className="gap-2 focus-visible:ring-2 focus-visible:ring-primary"
          >
            <UploadCloud size={16} />
            Import Data
          </Button>
          <Button variant="secondary" size="sm" className="gap-2 focus-visible:ring-2 focus-visible:ring-primary">
            <Settings size={16} />
            Export PDF
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Clock size={48} />
          </div>
          <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-2">
            Total Hours Scheduled
          </h3>
          <p className="text-4xl font-bold text-foreground">
            412<span className="text-lg text-muted-foreground font-medium ml-1">hrs</span>
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
            <Zap size={48} />
          </div>
          <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-2">
            Projected Labor Cost
          </h3>
          <p className="text-4xl font-bold text-primary">$8,240</p>
          <p className="text-xs text-muted-foreground mt-2">
            {importedFile ? `Based on ${importedFile}` : "Based on avg $20/hr"}
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-yellow-500">
            <AlertCircle size={48} />
          </div>
          <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-2">Overtime Risk</h3>
          <p className="text-4xl font-bold text-yellow-500">
            2<span className="text-lg text-muted-foreground font-medium ml-1">staff</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Calculator size={20} className="text-primary" />
          <h3 className="text-lg font-bold text-foreground">Data Inputs & Configuration</h3>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 bg-secondary border-b border-border grid grid-cols-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <div>Metric</div>
            <div>Current Value</div>
            <div>Source</div>
            <div>Action</div>
          </div>
          <div className="p-4 border-b border-border grid grid-cols-4 items-center hover:bg-secondary/20 transition-colors">
            <div className="font-medium flex items-center gap-2 text-primary">
              <FileText size={14} /> Historical Data
            </div>
            <div className="text-foreground font-bold">{importedFile ? importedFile : "Not Connected"}</div>
            <div className="text-muted-foreground text-sm">{importedFile ? "User Upload" : "N/A"}</div>
            <div>
              <button
                className="text-primary text-sm font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
                onClick={onOpenImport}
              >
                {importedFile ? "Update File" : "Upload File"}
              </button>
            </div>
          </div>
          <div className="p-4 border-b border-border grid grid-cols-4 items-center hover:bg-secondary/20 transition-colors">
            <div className="font-medium flex items-center gap-2">
              <DollarSign size={14} /> Avg Hourly Rate
            </div>
            <div className="text-foreground">$20.00 / hr</div>
            <div className="text-muted-foreground text-sm">Staff Profiles</div>
            <div>
              <button className="text-primary text-sm font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1">
                Edit Profiles
              </button>
            </div>
          </div>
          <div className="p-4 grid grid-cols-4 items-center hover:bg-secondary/20 transition-colors">
            <div className="font-medium flex items-center gap-2">
              <BarChart3 size={14} /> Weekly Budget
            </div>
            <div className="text-foreground">$9,000.00</div>
            <div className="text-muted-foreground text-sm">Manager Input</div>
            <div>
              <button className="text-primary text-sm font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// --- MAIN APP COMPONENT ---
// ==========================================

export default function FreshSchedulesWebsite() {
  const [appState, setAppState] = useState<"website" | "onboarding" | "app">("website")
  const [currentView, setCurrentView] = useState<"schedule" | "staff" | "reports">("schedule")
  const [weekOffset, setWeekOffset] = useState(0)
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES)
  const [shifts, setShifts] = useState<Shift[]>([])
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)
  const [importedFile, setImportedFile] = useState<string | null>(null)

  // Modals
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false)
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false)

  const [selectedSlot, setSelectedSlot] = useState<{ empId: number; dateFull: string; empName: string } | null>(null)
  const [shiftForm, setShiftForm] = useState({ start: "09:00", end: "17:00", role: "" })
  const [staffForm, setStaffForm] = useState({ name: "", role: "Server" as Role, email: "" })

  const currentDays = useMemo(() => getWeekDays(weekOffset), [weekOffset])

  // Navigation handlers
  const handleJoinBeta = () => setIsBetaModalOpen(true)
  const handleBetaComplete = () => {
    setIsBetaModalOpen(false)
    setAppState("onboarding")
    window.scrollTo(0, 0)
  }

  const handleBackToWebsite = () => {
    setAppState("website")
    setImportedFile(null)
    setShifts([])
  }
  const handleStartAppAuto = () => {
    setAppState("app")
    const days = getWeekDays(0)
    setShifts(generateShiftsForDays(days))
    setWeekOffset(0)
  }
  const handleStartAppScratch = () => {
    setAppState("app")
    setShifts([])
    setWeekOffset(0)
  }
  const handleReset = () => {
    setAppState("onboarding")
    setShifts([])
    setWeekOffset(0)
    setCurrentView("schedule")
    setImportedFile(null)
  }
  const handleImport = (filename: string) => setImportedFile(filename)

  // App logic
  const handleNextWeek = () => {
    setWeekOffset((prev) => prev + 1)
    if (weekOffset >= 0) setShifts([])
  }
  const handlePrevWeek = () => setWeekOffset((prev) => prev - 1)
  const handleSmartFill = () => {
    const newShifts = [...shifts]
    if (!newShifts.find((s) => s.empId === 5 && s.day === currentDays[0].fullDate))
      newShifts.push({
        id: Date.now(),
        empId: 5,
        day: currentDays[0].fullDate,
        start: "17:00",
        end: "23:00",
        role: "Host",
      })
    if (!newShifts.find((s) => s.empId === 2 && s.day === currentDays[1].fullDate))
      newShifts.push({
        id: Date.now() + 1,
        empId: 2,
        day: currentDays[1].fullDate,
        start: "17:00",
        end: "01:00",
        role: "Bartender",
      })
    if (!newShifts.find((s) => s.empId === 1 && s.day === currentDays[2].fullDate))
      newShifts.push({
        id: Date.now() + 2,
        empId: 1,
        day: currentDays[2].fullDate,
        start: "10:00",
        end: "16:00",
        role: "Server",
      })
    setShifts(newShifts)
  }
  const handleCellClick = (empId: number, dateFull: string, existingShift: Shift | undefined) => {
    if (existingShift) return
    const emp = employees.find((e) => e.id === empId)
    if (!emp) return
    setSelectedSlot({ empId, dateFull, empName: emp.name })
    setShiftForm({ ...shiftForm, role: emp.role })
    setIsShiftModalOpen(true)
  }
  const handleSaveShift = () => {
    if (!selectedSlot) return
    setShifts([
      ...shifts,
      {
        id: Date.now(),
        empId: selectedSlot.empId,
        day: selectedSlot.dateFull,
        start: shiftForm.start,
        end: shiftForm.end,
        role: shiftForm.role,
      },
    ])
    setIsShiftModalOpen(false)
  }
  const handleAddEmployee = () => {
    const newEmp: Employee = {
      id: Date.now(),
      name: staffForm.name,
      role: staffForm.role,
      email: staffForm.email,
      avatar: staffForm.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2),
    }
    setEmployees([...employees, newEmp])
    setIsStaffModalOpen(false)
    setStaffForm({ name: "", role: "Server", email: "" })
  }

  // RENDER: Website
  if (appState === "website") {
    return (
      <div className="font-sans bg-background min-h-screen text-foreground selection:bg-primary/30">
        <Navbar onJoinBeta={handleJoinBeta} />
        <HeroSection onJoinBeta={handleJoinBeta} />
        <HowItWorksSection />
        <FeatureGrid />
        <PricingSection onJoinBeta={handleJoinBeta} />
        <Footer />
        <BetaSignupModal
          isOpen={isBetaModalOpen}
          onClose={() => setIsBetaModalOpen(false)}
          onComplete={handleBetaComplete}
        />
      </div>
    )
  }

  // RENDER: Onboarding
  if (appState === "onboarding") {
    return (
      <div className="font-sans text-foreground">
        <AppOnboarding
          onStart={handleStartAppAuto}
          onStartScratch={handleStartAppScratch}
          onOpenImport={() => setIsImportModalOpen(true)}
          importedFile={importedFile}
          onBackHome={handleBackToWebsite}
        />
        <ImportModal isOpen={isImportModalOpen} onClose={() => setIsImportModalOpen(false)} onImport={handleImport} />
      </div>
    )
  }

  // RENDER: App Dashboard
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* App Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleReset}>
              <Image src="/logos/primary.png" alt="Top Shelf Service" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold tracking-tight">Fresh Schedules</span>
            </div>

            <nav className="hidden md:flex items-center gap-1 bg-background/50 p-1 rounded-xl border border-border">
              {(["schedule", "staff", "reports"] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    currentView === view
                      ? "bg-secondary text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {view}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {importedFile && (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-xs font-bold text-primary mr-4">
                <FileSpreadsheet size={14} /> Using: {importedFile}
              </div>
            )}
            <div className="hidden lg:flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground mr-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>Server
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>Bar
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>Cook
              </div>
            </div>
            <div className="h-6 w-px bg-border mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsImportModalOpen(true)}
              className="focus-visible:ring-2 focus-visible:ring-primary"
            >
              <UploadCloud size={18} />
              <span className="sr-only">Import data</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              className="hover:text-destructive focus-visible:ring-2 focus-visible:ring-primary"
            >
              <LogOut size={18} />
              <span className="sr-only">Log out</span>
            </Button>
            <Button
              size="sm"
              className="gap-2 shadow-[0_0_20px_rgba(34,197,94,0.15)] focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Check size={16} />
              Publish
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        {currentView === "schedule" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">
                  {currentDays[0].month} {currentDays[0].date} - {currentDays[6].month} {currentDays[6].date}
                </h2>
                <div className="flex items-center bg-card border border-border rounded-lg p-1">
                  <button
                    onClick={handlePrevWeek}
                    className="p-1 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Previous week"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNextWeek}
                    className="p-1 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Next week"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            <ScheduleView
              employees={employees}
              shifts={shifts}
              onCellClick={handleCellClick}
              hoveredCell={hoveredCell}
              setHoveredCell={setHoveredCell}
              onSmartFill={handleSmartFill}
              currentDays={currentDays}
            />
          </div>
        )}

        {currentView === "staff" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Staff Management</h2>
              <Button
                variant="secondary"
                onClick={() => setIsStaffModalOpen(true)}
                className="gap-2 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <UserPlus size={16} />
                Add Employee
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  className="bg-card border border-border p-5 rounded-xl hover:border-muted-foreground transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground border border-border">
                      {emp.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{emp.name}</h3>
                      <p
                        className={`text-xs font-bold uppercase tracking-wider mt-1 ${ROLE_COLORS[emp.role]?.text || "text-muted-foreground"}`}
                      >
                        {emp.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{emp.email}</span>
                    <button className="text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1">
                      <Settings size={16} />
                      <span className="sr-only">Edit {emp.name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === "reports" && (
          <ReportsView importedFile={importedFile} onOpenImport={() => setIsImportModalOpen(true)} />
        )}
      </div>

      {/* Modals */}
      <ImportModal isOpen={isImportModalOpen} onClose={() => setIsImportModalOpen(false)} onImport={handleImport} />

      <Modal isOpen={isShiftModalOpen} onClose={() => setIsShiftModalOpen(false)} title="Add Shift">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Adding shift for <strong className="text-foreground">{selectedSlot?.empName}</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                Start Time
              </label>
              <input
                type="time"
                value={shiftForm.start}
                onChange={(e) => setShiftForm({ ...shiftForm, start: e.target.value })}
                className="w-full bg-background border border-border text-foreground text-sm font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">End Time</label>
              <input
                type="time"
                value={shiftForm.end}
                onChange={(e) => setShiftForm({ ...shiftForm, end: e.target.value })}
                className="w-full bg-background border border-border text-foreground text-sm font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Role</label>
            <select
              className="w-full bg-background border border-border text-foreground text-sm rounded-xl px-4 py-3 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              value={shiftForm.role}
              onChange={(e) => setShiftForm({ ...shiftForm, role: e.target.value as Role })}
            >
              {ROLES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="pt-4 flex gap-3">
            <Button
              variant="ghost"
              className="flex-1 focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsShiftModalOpen(false)}
            >
              Cancel
            </Button>
            <Button className="flex-1 gap-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleSaveShift}>
              <Check size={16} />
              Add Shift
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isStaffModalOpen} onClose={() => setIsStaffModalOpen(false)} title="New Employee">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={staffForm.name}
              onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
              className="w-full bg-background border border-border text-foreground text-sm font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
              Primary Role
            </label>
            <select
              className="w-full bg-background border border-border text-foreground text-sm rounded-xl px-4 py-3 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              value={staffForm.role}
              onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value as Role })}
            >
              {ROLES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
            <input
              type="email"
              placeholder="e.g. john@restaurant.com"
              value={staffForm.email}
              onChange={(e) => setStaffForm({ ...staffForm, email: e.target.value })}
              className="w-full bg-background border border-border text-foreground text-sm font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="pt-4 flex gap-3">
            <Button
              variant="ghost"
              className="flex-1 focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsStaffModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 gap-2 focus-visible:ring-2 focus-visible:ring-primary"
              onClick={handleAddEmployee}
            >
              <UserPlus size={16} />
              Add Employee
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
