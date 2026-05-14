import { useLanguage } from '../../context/LanguageContext';
import { Mail, GitFork, User, Send } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto glass-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 bg-white/[0.02] border-r border-white/5 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">{t.contact.title}</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                  Looking for a senior developer to build your next high-impact product? Let's discuss your vision and how I can help.
                </p>

                <div className="space-y-6">
                  <a href="mailto:hello@example.com" className="flex items-center gap-4 group text-zinc-300 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="font-medium">hello@example.com</span>
                  </a>
                  <div className="flex gap-4 pt-6">
                    {[
                      { icon: <GitFork size={20} />, href: '#' },
                      { icon: <User size={20} />, href: '#' }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 border border-transparent transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Based in Panama · Remote Worldwide</p>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-12">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-zinc-600 resize-none"
                  />
                </div>
                <button type="submit" className="w-full premium-button py-4 flex items-center justify-center gap-2 group">
                  {t.contact.form.send}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
