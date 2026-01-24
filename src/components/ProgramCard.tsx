import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  duration: string
  link: string
  onClick?: (e: React.MouseEvent) => void
  isClickable?: boolean
}

export default function ProgramCard({ 
  title, 
  description, 
  icon, 
  duration, 
  link, 
  onClick, 
  isClickable 
}: ProgramCardProps) {
  // If onClick is provided, render as a div instead of a Link
  if (isClickable && onClick) {
    return (
      <div onClick={onClick} className="group cursor-pointer">
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 h-full transition-transform duration-300 hover:-translate-y-1">
          {/* Icon */}
          <div className="text-5xl mb-6">{icon}</div>
          
          {/* Duration Badge */}
          <div className="inline-flex items-center space-x-2 bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-semibold text-white mb-4 transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-400 leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Learn More Link */}
          <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    )
  }

  // Default: render as a Link
  return (
    <Link href={link} className="group">
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 h-full transition-transform duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div className="text-5xl mb-6">{icon}</div>
        
        {/* Duration Badge */}
        <div className="inline-flex items-center space-x-2 bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-semibold text-white mb-4 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Learn More Link */}
        <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
