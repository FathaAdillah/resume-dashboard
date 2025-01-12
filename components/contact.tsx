import { Mail, GitlabIcon as GitHub, Phone, Linkedin } from 'lucide-react'

const contactData = [
  { icon: Mail, label: 'Email', value: 'johndoe@example.com', href: 'mailto:johndoe@example.com' },
  { icon: GitHub, label: 'GitHub', value: 'github.com/johndoe', href: 'https://github.com/johndoe' },
  { icon: Phone, label: 'WhatsApp', value: '+1234567890', href: 'https://wa.me/1234567890' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/johndoe', href: 'https://www.linkedin.com/in/johndoe' }
]

export function Contact() {
  return (
    <section id="contact" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactData.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <item.icon className="w-6 h-6 text-blue-500 mr-3" />
            <div>
              <p className="font-semibold text-gray-700">{item.label}</p>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

