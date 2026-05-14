import { useLanguage } from '../../context/LanguageContext';
import { Mail, GitFork, User, Send, Target } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-40 bg-black relative border-t border-hud-border">
      <div className="hud-container">
        <div className="max-w-6xl mx-auto hud-border bg-hud-accent/[0.02]">
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Intel Briefing */}
            <div className="p-16 border-r border-hud-border bg-white/[0.01]">
              <div className="flex items-center gap-4 mb-10">
                <Target className="text-hud-warning animate-pulse" size={32} />
                <h2 className="text-5xl font-black italic tracking-tighter uppercase">{t.contact.title}</h2>
              </div>

              <p className="text-hud-muted text-sm leading-relaxed uppercase italic mb-12 border-l-2 border-hud-warning pl-6">
                [COMM_CHANNEL_INIT]: Searching for high-impact collaborators.
                Systems are primed for secure data exchange.
                Encryption levels: Optimal.
              </p>

              <div className="space-y-8">
                <a href="mailto:hello@example.com" className="group flex items-center gap-6 text-hud-text hover:text-hud-accent transition-colors">
                  <div className="w-14 h-14 border border-hud-border flex items-center justify-center group-hover:border-hud-accent transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="telemetry-text">Email_Address</span>
                    <span className="font-bold font-mono">HELLO@DEV_SYSTEM.IO</span>
                  </div>
                </a>

                <div className="flex gap-6 pt-10">
                  {[
                    { icon: <GitFork size={20} />, label: "GITHUB_MOD" },
                    { icon: <User size={20} />, label: "LINKED_MOD" }
                  ].map((social, i) => (
                    <a key={i} href="#" className="flex flex-col items-center gap-2 group">
                      <div className="w-16 h-16 border border-hud-border flex items-center justify-center group-hover:bg-hud-accent group-hover:text-black transition-all">
                        {social.icon}
                      </div>
                      <span className="text-[8px] text-hud-muted group-hover:text-hud-accent">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-20 flex items-center gap-4">
                <div className="w-3 h-3 bg-hud-warning rounded-full" />
                <span className="telemetry-text text-hud-warning animate-pulse">Transmission Ready</span>
              </div>
            </div>

            {/* Tactical Input Form */}
            <div className="p-16">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-10"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-4">
                  <div className="flex justify-between telemetry-text">
                    <label>01_Sender_Identity</label>
                    <span className="text-hud-accent">[INPUT_REQ]</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black border border-hud-border p-4 focus:border-hud-accent focus:outline-none telemetry-text text-hud-text placeholder:text-hud-muted/30"
                    placeholder="Enter identification..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between telemetry-text">
                    <label>02_Return_Frequency</label>
                    <span className="text-hud-accent">[INPUT_REQ]</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black border border-hud-border p-4 focus:border-hud-accent focus:outline-none telemetry-text text-hud-text placeholder:text-hud-muted/30"
                    placeholder="Enter return email..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between telemetry-text">
                    <label>03_Mission_Brief</label>
                    <span className="text-hud-warning">[DATA_ENCRYPTED]</span>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-black border border-hud-border p-4 focus:border-hud-accent focus:outline-none telemetry-text text-hud-text placeholder:text-hud-muted/30 resize-none"
                    placeholder="Initiate mission details..."
                  />
                </div>

                <button type="submit" className="hud-button w-full py-6 text-lg">
                  Execute Transmission_ <Send size={18} className="inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
