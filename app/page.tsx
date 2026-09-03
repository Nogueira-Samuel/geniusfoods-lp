"use client";

import { useEffect, useRef, useState } from "react";

const SIGNUP_URL = "https://app.geniusfoods.com.br/signup";
const WHATSAPP_NUMBER_DISPLAY = "(21) 99590-2657";
const WHATSAPP_URL = "https://wa.me/5521995902657";
// Termos e privacidade agora moram no app (aceite fica atrelado ao
// cadastro) — as páginas antigas em /termos-de-uso e /politica-de-
// -privacidade continuam existindo aqui, mas o footer não linka mais pra
// elas.
const TERMS_URL = "https://app.geniusfoods.com.br/termos";
const PRIVACY_URL = "https://app.geniusfoods.com.br/privacidade";

/* ------------------------------------------------------------------ */
/* Reveal-on-scroll wrapper (IntersectionObserver, no external lib)   */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                  */
/* ------------------------------------------------------------------ */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegação principal"
      >
        <a href="#" className="text-lg font-extrabold text-white" aria-label="Genius Foods - início">
          Genius Foods
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#solucao" className="transition hover:text-white">
            Como funciona
          </a>
          <a href="#funcionalidades" className="transition hover:text-white">
            Funcionalidades
          </a>
          <a href="#planos" className="transition hover:text-white">
            Planos
          </a>
          <a href="#faq" className="transition hover:text-white">
            Perguntas frequentes
          </a>
        </div>
        <a
          href={SIGNUP_URL}
          aria-label="Criar minha loja grátis na Genius Foods"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
        >
          Criar loja grátis
        </a>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */
function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Mockup de celular mostrando o cardápio digital Genius Foods com pedidos pelo WhatsApp"
      className="relative mx-auto w-[280px] animate-float select-none sm:w-[320px]"
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="rounded-[2.5rem] border-[10px] border-[#1a0a35] bg-[#1a0a35] shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-bg">
          <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1a0a35]" aria-hidden="true" />
          <div className="flex items-center gap-2 bg-primary px-5 pb-3 pt-8">
            <div className="h-8 w-8 rounded-full bg-accent text-center text-sm font-bold leading-8 text-white">
              G
            </div>
            <div>
              <p className="text-sm font-bold text-white">Genius Foods</p>
              <p className="text-[11px] text-white/60">Cardápio digital</p>
            </div>
          </div>

          <div className="space-y-2 px-4 py-4">
            <div className="flex gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                Lanches
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Bebidas
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Combos
              </span>
            </div>

            {[
              { name: "X-Genius Bacon", price: "R$ 28,90" },
              { name: "Combo Duplo", price: "R$ 44,90" },
              { name: "Batata Especial", price: "R$ 16,90" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-primary/10 bg-white px-3 py-2.5 shadow-sm"
              >
                <div>
                  <p className="text-xs font-semibold text-primary">{item.name}</p>
                  <p className="text-[11px] text-secondary">{item.price}</p>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  +
                </span>
              </div>
            ))}

            <div className="mt-3 rounded-xl bg-primary px-3 py-3 text-center text-xs font-semibold text-white">
              Ver pedido · R$ 89,80
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 top-16 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg sm:-right-10">
        <span className="text-lg" aria-hidden="true">
          💬
        </span>
        <p className="text-[11px] font-semibold text-primary">
          Pedido confirmado!
          <br />
          <span className="text-secondary">Chegando em 30 min</span>
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#2a1050] to-[#1a0a35] pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <Badge>🚀 Mais de 50 pedidos processados todo dia</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Seu restaurante recebendo pedidos pelo WhatsApp, sem perder nenhum.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Cardápio digital completo com painel de gestão, notificações automáticas e
              assistente de IA. Tudo pelo WhatsApp que você já usa.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={SIGNUP_URL}
                aria-label="Criar minha loja grátis na Genius Foods"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                Criar minha loja grátis →
              </a>
              <a
                href="#solucao"
                aria-label="Ver como a Genius Foods funciona"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver como funciona ↓
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Problema                                                             */
/* ------------------------------------------------------------------ */
const PROBLEMS = [
  {
    emoji: "😰",
    title: "Pedidos perdidos no WhatsApp",
    desc: "Mensagens se misturam, cliente some, você perde a venda.",
  },
  {
    emoji: "❌",
    title: "Erros no pedido",
    desc: "Cliente pede uma coisa, você entende outra. Retrabalho e cliente insatisfeito.",
  },
  {
    emoji: "⏰",
    title: "Tempo perdido respondendo sempre a mesma coisa",
    desc: '"Qual o horário?", "Tem delivery?", todo dia, o dia todo.',
  },
];

function ProblemSection() {
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl">
            Você ainda atende pedido assim?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="h-full rounded-xl border-l-4 border-accent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solução                                                              */
/* ------------------------------------------------------------------ */
const STEPS = [
  { emoji: "1️⃣", text: 'Cliente manda "oi" no WhatsApp' },
  { emoji: "2️⃣", text: "Recebe o link do cardápio automaticamente" },
  { emoji: "3️⃣", text: "Monta e confirma o pedido sozinho" },
  { emoji: "4️⃣", text: "Você vê no painel e o cliente é notificado em cada etapa" },
];

function SolutionSection() {
  return (
    <section
      id="solucao"
      className="bg-gradient-to-b from-primary to-[#2a1050] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Com a Genius Foods, é diferente
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-white/20 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.text} delay={i * 120} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl shadow-lg shadow-accent/30">
                <span aria-hidden="true">{step.emoji}</span>
              </div>
              <p className="mx-auto mt-5 max-w-[220px] text-sm font-medium text-white/90">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={480}>
          <p className="mt-16 text-center text-lg font-semibold text-accent">
            Tudo automático. Você só prepara o pedido.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Funcionalidades                                                      */
/* ------------------------------------------------------------------ */
const FEATURES = [
  {
    emoji: "📋",
    title: "Cardápio digital personalizado",
    desc: "Link único com sua logo, cores e produtos organizados por categoria.",
  },
  {
    emoji: "⚡",
    title: "Pedidos em tempo real",
    desc: "Painel que atualiza instantaneamente. Sem F5, sem perder nada.",
  },
  {
    emoji: "💬",
    title: "WhatsApp 100% automático",
    desc: "Confirmação, preparo, entrega. Cliente sempre informado.",
  },
  {
    emoji: "🤖",
    title: "Assistente de IA",
    desc: "Responde dúvidas dos clientes automaticamente, 24h por dia, 7 dias por semana.",
  },
  {
    emoji: "🪑",
    title: "Pedido na mesa",
    desc: "QR Code por mesa para atendimento presencial sem cardápio físico.",
  },
  {
    emoji: "📊",
    title: "Relatórios e histórico",
    desc: "Faturamento, clientes frequentes e itens mais vendidos.",
  },
];

function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl">
            Tudo que seu restaurante precisa, em um só lugar
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="h-full rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-2xl">
                  <span aria-hidden="true">{f.emoji}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Depoimentos                                                          */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    quote:
      "Depois que migramos nosso atendimento para a Genius Foods parei de perder cliente.",
    name: "Matheus",
    business: "Açaí Tropical",
    city: "Rio de Janeiro",
  },
  {
    quote:
      "Agilizou muito minha vida criar o cardápio digital, meus atendimentos são mais rápidos e eu não respondo as mesmas mensagens sempre.",
    name: "Ana Paula",
    business: "Cantina da Ana Paula",
    city: "São Paulo",
  },
  {
    quote:
      "O impacto em meu negócio depois do cardápio da Genius Foods foi enorme. Meus clientes recebem notificação automática de cada etapa do pedido e o assistente de IA parece um humano de verdade - é até melhor que eu rs.",
    name: "Carlos",
    business: "Burguer House",
    city: "Belo Horizonte",
  },
  {
    quote:
      "Nunca imaginei que seria tão simples receber pedidos online. Em menos de uma hora já estava funcionando.",
    name: "Roberto",
    business: "Pizzaria Bella Napoli",
    city: "Curitiba",
  },
  {
    quote:
      "Meus clientes adoraram! Pedem pelo link e eu vejo tudo no painel. Acabei com o caderno de anotações.",
    name: "Fernanda",
    business: "Doceria Sweet Cake",
    city: "Brasília",
  },
  {
    quote:
      "O suporte é incrível e o sistema não trava. Uso todo dia no pico do movimento sem problema nenhum.",
    name: "Diego",
    business: "Lanchonete Express",
    city: "Fortaleza",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <blockquote className="relative flex h-full flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
      <span
        className="pointer-events-none absolute -top-2 left-5 text-5xl font-serif text-accent/60"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="mt-5 text-sm leading-relaxed text-gray-700">{t.quote}</p>
      <footer className="mt-5 border-t border-primary/10 pt-4">
        <p className="text-sm font-bold text-primary">
          {t.name}, {t.business}
        </p>
        <p className="text-xs text-gray-500">{t.city}</p>
        <p className="mt-1 text-accent" aria-label="Avaliação 5 de 5 estrelas">
          ⭐⭐⭐⭐⭐
        </p>
      </footer>
    </blockquote>
  );
}

const AUTOPLAY_INTERVAL_MS = 4000;

function TestimonialsCarousel() {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    function updateItemsPerView() {
      setItemsPerView(window.innerWidth >= 640 ? 3 : 1);
    }
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(TESTIMONIALS.length / itemsPerView);

  useEffect(() => {
    setIndex((i) => (i >= totalSlides ? 0 : i));
  }, [totalSlides]);

  useEffect(() => {
    if (paused || totalSlides <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, totalSlides]);

  function goTo(target: number) {
    setIndex(((target % totalSlides) + totalSlides) % totalSlides);
  }

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="grid w-full shrink-0 gap-6 px-1 sm:grid-cols-3">
              {TESTIMONIALS.slice(
                slideIndex * itemsPerView,
                slideIndex * itemsPerView + itemsPerView
              ).map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Depoimento anterior"
        className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-md transition hover:bg-primary hover:text-white"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Próximo depoimento"
        className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-md transition hover:bg-primary hover:text-white"
      >
        →
      </button>

      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Selecionar grupo de depoimentos">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir para o grupo de depoimentos ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-accent" : "bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-primary-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Quem já usa, não quer mais voltar
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <TestimonialsCarousel />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Planos                                                               */
/* ------------------------------------------------------------------ */
type Plan = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
  cta: string;
  // Planos pagos levam pro signup com ?plan=<planId>, pra pular o dashboard
  // e ir direto pro checkout da Infinitepay depois da conta criada. Free
  // não tem planId — signup sem parâmetro, cai no dashboard normalmente.
  planId?: "basic" | "pro" | "premium";
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "Grátis",
    period: "para sempre",
    features: [
      { label: "Cardápio com até 20 itens", included: true },
      { label: "Pedidos ilimitados", included: true },
      { label: "Painel de gestão completo", included: true },
      { label: "Notificações WhatsApp automáticas", included: true },
      { label: "Assistente de IA", included: false },
      { label: "Marca Genius Foods visível", included: false },
    ],
    cta: "Começar grátis",
  },
  {
    name: "Basic",
    price: "R$ 67",
    period: "/mês",
    features: [
      { label: "Tudo do Free", included: true },
      { label: "Até 50 itens no cardápio", included: true },
      { label: "3 temas de cores", included: true },
      { label: "Sem marca Genius Foods", included: true },
      { label: "Assistente de IA", included: false },
    ],
    cta: "Assinar Basic",
    planId: "basic",
  },
  {
    name: "Pro",
    price: "R$ 127",
    period: "/mês",
    highlight: true,
    features: [
      { label: "Tudo do Basic", included: true },
      { label: "Itens ilimitados", included: true },
      { label: "Assistente de IA no WhatsApp", included: true },
      { label: "Todos os temas de cores", included: true },
      { label: "Relatórios financeiros", included: true },
      { label: "Suporte prioritário", included: true },
    ],
    cta: "Assinar Pro",
    planId: "pro",
  },
  {
    name: "Premium",
    price: "R$ 197",
    period: "/mês",
    features: [
      { label: "Tudo do Pro", included: true },
      { label: "Imagem de capa personalizada", included: true },
      { label: "White Label (seu domínio)", included: true },
      { label: "Múltiplas unidades", included: true },
      { label: "Atendimento VIP", included: true },
    ],
    cta: "Assinar Premium",
    planId: "premium",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex h-full w-[85vw] max-w-sm shrink-0 snap-center flex-col rounded-2xl p-7 sm:w-auto ${
        plan.highlight
          ? "border-2 border-accent bg-white shadow-xl"
          : "border border-primary/10 bg-white shadow-sm"
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold text-white shadow-sm">
          MAIS POPULAR 🔥
        </span>
      )}

      <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
      <p className="mt-2">
        <span className="text-3xl font-extrabold text-primary">{plan.price}</span>{" "}
        {plan.period && <span className="text-sm text-gray-500">{plan.period}</span>}
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-start gap-2 ${
              f.included ? "text-gray-700" : "text-gray-400 line-through"
            }`}
          >
            <span
              className={f.included ? "text-primary" : "text-gray-400"}
              aria-hidden="true"
            >
              {f.included ? "✓" : "✗"}
            </span>
            <span>{f.label}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.planId ? `${SIGNUP_URL}?plan=${plan.planId}` : SIGNUP_URL}
        aria-label={`${plan.cta} - plano ${plan.name} Genius Foods`}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
          plan.highlight
            ? "bg-accent text-white hover:bg-accent-hover"
            : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

function PricingSection() {
  return (
    <section id="planos" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Planos para todos os tamanhos de negócio
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Sem contrato de fidelidade. Cancele quando quiser.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "Precisa de aplicativo para o cliente?",
    a: "Não. O cliente acessa pelo link direto no WhatsApp, sem baixar nada.",
  },
  {
    q: "Preciso mudar meu número do WhatsApp?",
    a: "Não. Conectamos o número que você já usa no seu negócio.",
  },
  {
    q: "Tem contrato de fidelidade?",
    a: "Não. Você pode cancelar a qualquer momento, sem multa.",
  },
  {
    q: "Quanto tempo leva para configurar?",
    a: "Em menos de 1 hora sua loja já está recebendo pedidos online.",
  },
  {
    q: "Funciona para qualquer tipo de restaurante?",
    a: "Sim. Açaiteria, pizzaria, hamburgueria, marmiteria, lanchonete e muito mais.",
  },
  {
    q: "Como funciona o assistente de IA?",
    a: "O assistente responde automaticamente as dúvidas dos seus clientes no WhatsApp - horário, cardápio, promoções - 24h por dia, sem você precisar fazer nada.",
  },
];

function FaqItem({
  index,
  q,
  a,
  isOpen,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-primary/10 py-2">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          id={`faq-header-${index}`}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-primary"
        >
          {q}
          <span
            className={`shrink-0 text-accent transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-header-${index}`}
        className="grid overflow-hidden transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-8 text-sm leading-relaxed text-gray-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-primary-light py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl bg-white px-6 shadow-sm sm:px-8">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                index={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA final                                                            */
/* ------------------------------------------------------------------ */
function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#2a1050] to-[#1a0a35] py-20 text-center sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pronto para parar de perder pedidos?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 text-lg text-white/80">
            Comece grátis hoje. Sem cartão de crédito, sem contrato.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={SIGNUP_URL}
            aria-label="Criar minha loja grátis na Genius Foods agora"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Criar minha loja grátis agora →
          </a>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-8 text-sm text-white/70">
            💬 Prefere falar com a gente primeiro?{" "}
            <a
              href={WHATSAPP_URL}
              aria-label="Falar com a Genius Foods pelo WhatsApp"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-white"
            >
              WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="bg-[#1a0a35] py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-extrabold text-white">Genius Foods</p>
            <p className="mt-1 text-sm text-white/60">
              by Companhia Genius · Tecnologia que impulsiona negócios
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a href={PRIVACY_URL} className="transition hover:text-secondary">
              Política de Privacidade
            </a>
            <a href={TERMS_URL} className="transition hover:text-secondary">
              Termos de Uso
            </a>
            <a href={WHATSAPP_URL} className="transition hover:text-secondary">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © 2026 Companhia Genius. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-white/20">Pv16:3</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
