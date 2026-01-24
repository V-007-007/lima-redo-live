'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'
import { BookOpen, Users, Target, Award, Clock, Globe, ChevronDown } from 'lucide-react'
import programsData from '@/data/programs-data.json'

export default function ProgramsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null)

  const programs = programsData.programs.slice(0, 9).map(program => ({
    id: program.id,
    title: program.title,
    description: program.description,
    icon: program.icon,
    duration: `${program.credits} credits`,
    link: `#${program.id}`,
    courses: program.courses,
  }))

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'In-depth study materials covering leadership, theology, and practical ministry skills',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced ministry leaders and seasoned practitioners',
    },
    {
      icon: Target,
      title: 'Practical Application',
      description: 'Real-world projects and assignments that prepare you for ministry challenges',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Receive recognized certification upon successful completion of programs',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with online and in-person learning options',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with fellow leaders from over 50 countries worldwide',
    },
  ]

  return (
  <div className="pt-20 space-y-24">
    {/* Hero Section */}
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary-600/90 to-primary-800/90 px-8 py-16 text-white shadow-xl">
          <h1 className="heading-xl mb-6 font-serif">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
            Transformational leadership programs designed to equip you for kingdom impact.
            Choose the path that aligns with your calling and season.
          </p>
        </div>
      </div>
    </AnimatedSection>

    {/* Programs Grid */}
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program) => (
            <div key={program.id} className="space-y-4">
              <ProgramCard
                {...program}
                isClickable
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setExpandedProgram(
                    expandedProgram === program.id ? null : program.id
                  )
                }}
              />

              {/* Expanded Courses Panel */}
              {expandedProgram === program.id && (
                <div className="relative rounded-2xl bg-primary-50/70 backdrop-blur-sm p-6 border border-primary-200/60 shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
                  <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>Courses in this Program</span>
                    <ChevronDown className="w-4 h-4 text-primary-600" />
                  </h3>

                  <div className="overflow-x-auto rounded-xl">
                    <table className="w-full text-sm border-separate border-spacing-y-2">
                      <thead>
                        <tr>
                          <th className="text-left px-4 py-2 text-gray-700 font-medium">
                            Code
                          </th>
                          <th className="text-left px-4 py-2 text-gray-700 font-medium">
                            Course Name
                          </th>
                          <th className="text-center px-4 py-2 text-gray-700 font-medium">
                            Credits
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {program.courses?.length ? (
                          program.courses.map((course, idx) => (
                            <tr
                              key={idx}
                              className="bg-white/80 rounded-xl shadow-sm hover:bg-white transition-colors"
                            >
                              <td className="px-4 py-3 font-mono text-primary-700 font-semibold rounded-l-xl">
                                {course.code}
                              </td>
                              <td className="px-4 py-3 text-gray-700">
                                {course.name}
                              </td>
                              <td className="px-4 py-3 text-center text-gray-700 font-semibold rounded-r-xl">
                                {course.credits}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={3}
                              className="py-6 text-center text-gray-500"
                            >
                              No courses available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {/* Program Features */}
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            What Makes LIMA Programs Unique
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our programs are designed with your success in mind, offering
            comprehensive support and practical tools for real-world ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-md text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-600/90 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {/* CTA Section */}
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-10 py-16 text-white shadow-xl">
          <h2 className="heading-lg mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Take the next step in your leadership development. Register for a
            program today and join a community of kingdom leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100 rounded-xl"
            >
              Register Now
            </a>
            <a
              href="/contact"
              className="btn-secondary border border-white/70 text-white hover:bg-white/10 rounded-xl"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
)
