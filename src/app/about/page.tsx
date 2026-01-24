"use client";

import PageTransition from "@/components/animations/PageTransition";
import { Target, Eye, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description:
        "Every aspect of our teaching is rooted in biblical principles and kingdom values.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We believe in the power of community and collaborative learning for growth.",
    },
    {
      icon: Target,
      title: "Purpose Focused",
      description:
        "Equipping leaders to discover and fulfill their God-given purpose and calling.",
    },
    {
      icon: Eye,
      title: "Excellence",
      description:
        "We pursue excellence in all we do, reflecting the character of our Creator.",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-24 bg-black text-white">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl font-bold tracking-wide mb-8">
              About <span className="text-neutral-400">LIMA</span>
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              At LIMA, we believe in fulfilling the Great Commission in accordance
              with Matthew 24:14:
            </p>
            <p className="mt-4 italic text-neutral-400">
              “And this gospel of the kingdom shall be preached in all the world…”
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
                What We Do
              </p>
              <h2 className="text-3xl font-semibold mb-6">
                Empowering Leaders
              </h2>
              <div className="space-y-5 text-neutral-300 leading-relaxed">
                <p>
                  Leadership International Ministerial Academy (LIMA) is a
                  globally trusted and fully accredited Christian ministerial
                  training institution dedicated to equipping Spirit-anointed
                  leaders for global Kingdom impact.
                </p>
                <p>
                  Our programs develop transformational leaders who lead with
                  integrity, compassion, and purpose.
                </p>
                <p className="text-lg font-medium text-white">
                  LIMA for you. LIMA for me. LIMA for all.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 h-[420px]">
              <span className="text-6xl font-bold tracking-widest text-neutral-600">
                LIMA
              </span>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-20 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
            <div className="order-2 lg:order-1 flex items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 h-[420px]">
              <span className="text-5xl font-bold tracking-widest text-neutral-600">
                VISION
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
                Our Mandate
              </p>
              <h2 className="text-3xl font-semibold mb-6">
                A Global Movement
              </h2>
              <div className="space-y-5 text-neutral-300 leading-relaxed">
                <p>
                  Our mission is to train, empower, equip, and release men and
                  women for God’s end-time harvest.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-400">
                  <li>Sound biblical doctrine</li>
                  <li>Effective ministry preparation</li>
                  <li>Leadership influence across nations</li>
                  <li>Kingdom laborer networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4">
                Our Core Values
              </h2>
              <p className="text-neutral-400">
                Principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center transition hover:-translate-y-1"
                >
                  <value.icon className="w-10 h-10 mx-auto mb-6 text-neutral-300" />
                  <h3 className="text-lg font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-24 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Leadership</h2>
            <p className="text-neutral-400">
              Visionaries stewarding LIMA’s mission
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
            <Link href="/about/board-of-senate">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:-translate-y-1 transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-3">
                  Board of Senate
                </h3>
                <p className="text-neutral-400 text-sm">
                  Governance and strategic oversight
                </p>
              </div>
            </Link>

            <Link href="/about/global-ambassadors">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 hover:-translate-y-1 transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-3">
                  Global Ambassadors
                </h3>
                <p className="text-neutral-400 text-sm">
                  Representatives advancing LIMA worldwide
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
