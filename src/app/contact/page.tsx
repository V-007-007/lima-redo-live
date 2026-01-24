'use client'
import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import SuccessMessage from '@/components/SuccessMessage'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { saveContactSubmission } from '@/lib/actions'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    try {
      const result = await saveContactSubmission(formData)
      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (err: any) {
      alert(`Error submitting form: ${err.message}`)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['No. 32 Itu Road, Uyo', 'Akwa-Ibom, Nigeria, West Africa'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+231 773 384 331', '+234 806 078 4292', '+234 802 302 9201', 'Mon-Fri: 9AM - 5PM EST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['leadershipministryteam@gmail.com', 'ireneudofa2020@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday', '9:00 AM - 5:00 PM EST'],
    },
  ]

  return (
  <div className="pt-20 bg-black">
    {/* Hero Section */}
    <AnimatedSection className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
    </AnimatedSection>

    {/* Contact Info Cards */}
    <AnimatedSection className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-xl text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm text-neutral-400">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Send Us a Message</h2>
              
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
                <div className="space-y-5">
                  <TextInput 
                    label="Your Name *" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />

                  <TextInput 
                    label="Email Address *" 
                    name="email" 
                    type="email"
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />

                  <TextInput 
                    label="Phone Number" 
                    name="phone" 
                    type="tel"
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />

                  <SelectInput label="Subject *" name="subject">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions Question</option>
                    <option value="programs">Program Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </SelectInput>

                  <TextArea 
                    label="Message *" 
                    name="message" 
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />

                  <div className="flex items-center justify-center space-x-2">
                    <SubmitButton>
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    </SubmitButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Sidebar */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Admissions Support</h3>
                  <p className="text-neutral-400">
                    Get answers about our programs, admission requirements, and application process.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-2">Technical Assistance</h3>
                  <p className="text-neutral-400">
                    Need help with certificate verification or accessing resources? We're here to help.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-2">Partnership Opportunities</h3>
                  <p className="text-neutral-400">
                    Interested in partnering with LIMA? Let's discuss how we can collaborate.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-neutral-400">
                    Have questions about LIMA, our mission, or how to get involved? Reach out!
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-sm text-neutral-400">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* Map Section */}
    <AnimatedSection className="py-20 bg-black border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Find Us</h2>
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg text-white mb-2">Map integration coming soon</p>
              <p className="text-sm">No. 32 Itu Road, Uyo, Akwa-Ibom, Nigeria, West Africa</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    {showSuccess && (
      <SuccessMessage
        title="Message Sent!"
        message="Thank you for contacting us. We've received your message and will respond within 24 hours."
        onClose={() => {
          setShowSuccess(false)
        }}
      />
    )}
  </div>
)



