import { motion } from "motion/react";
import { Mail, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    eventDetails: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xvkzndqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      setSubmitMessage("Mensagem enviada com sucesso. Obrigado pelo contato!");
      setFormData({ name: "", email: "", phone: "", eventDate: "", eventType: "", eventDetails: "", message: "" });
    } catch {
      setSubmitMessage("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "eventType" && value !== "outro" ? { eventDetails: "" } : {}),
    });
  };

  return (
    <section id="contato" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl mb-20 text-center"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Entre em Contato
            </h3>
            <p className="text-lg text-[#9ca3af] mb-12 leading-relaxed">
              Interessado em contratar para eventos, colaborações musicais ou sessões de gravação?
              Preencha o formulário ou entre em contato diretamente.
            </p>

            {/* Email */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a3d5c] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#9ca3af] mb-1">Email</div>
                  <div className="text-lg">renanfrancioni@gmail.com</div>
                </div>
              </div>

              {/* Redes Sociais*/}
              <div>
                <h4 className="text-xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/francionirenan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#141824] border border-white/10 flex items-center justify-center hover:bg-[#1a3d5c] hover:border-[#1a3d5c] transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[#9ca3af]">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#9ca3af]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-[#9ca3af]">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm mb-2 text-[#9ca3af]">
                  Data Desejada
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm mb-2 text-[#9ca3af]">
                  Tipo de Evento
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="casamento">Casamento</option>
                  <option value="evento-corporativo">Evento Corporativo</option>
                  <option value="gravacao">Sessão de Gravação</option>
                  <option value="show">Show/Concerto</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {formData.eventType === "outro" && (
                <div>
                  <label htmlFor="eventDetails" className="block text-sm mb-2 text-[#9ca3af]">
                    Qual tipo de evento?
                  </label>
                  <input
                    type="text"
                    id="eventDetails"
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors"
                    required
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-[#9ca3af]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#141824] border border-white/10 rounded-lg focus:border-[#1a3d5c] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#1a3d5c] hover:bg-[#2a4a6a] rounded-lg flex items-center justify-center gap-3 transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
                <Send className="w-5 h-5" />
              </motion.button>
              {submitMessage && (
                <p role="status" className="text-sm text-[#9ca3af]" aria-live="polite">
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Rodapé */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/10 text-center text-[#9ca3af] flex flex-col items-center justify-center gap-2 text-xs md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontFamily: "var(--font-sans)" }}>
            © 2026 Renan Francioni. Todos os direitos reservados.
          </p>

          <p style={{ fontFamily: "var(--font-sans)" }} className="text-[#6b7280]">
            Design &amp; Desenvolvimento por{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Madumos Estúdio
            </a>
          </p>
        </motion.div>
      </div >
    </section >
  );
}
