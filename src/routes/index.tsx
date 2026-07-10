import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

import logoAsset from "@/assets/mybeauty-logo.png.asset.json";
import heroStudio from "@/assets/hero-studio.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import procedureFace from "@/assets/procedure-face.jpg";
import procedureBrows from "@/assets/procedure-brows.jpg";
import products from "@/assets/products.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container-page flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="my beauty" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-foreground/80">
          <a href="#sobre" className="hover:text-rose transition-colors">Sobre</a>
          <a href="#procedimentos" className="hover:text-rose transition-colors">Procedimentos</a>
          <a href="#loja" className="hover:text-rose transition-colors">Loja</a>
          <a href="#contato" className="hover:text-rose transition-colors">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-[10px] tracking-[0.25em] uppercase text-primary-foreground hover:bg-rose transition-colors"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blush/40 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <p className="font-script text-4xl md:text-5xl text-rose mb-4">Bem vinda!</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground">
            Realce a sua<br />
            <span className="italic">beleza natural</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-md">
            No <span className="tracking-widest uppercase text-foreground">my beauty</span> studio cuidamos de cada detalhe com técnicas delicadas
            e sofisticadas — porque toda pessoa tem o direito de se sentir linda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground hover:bg-rose transition-colors"
            >
              Agende sua visita
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center rounded-full border border-rose/40 px-7 py-3 text-[11px] tracking-[0.25em] uppercase text-foreground hover:bg-blush transition-colors"
            >
              Procedimentos
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(180,120,120,0.35)]">
            <img
              src={heroStudio}
              alt="Interior do my beauty studio"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container-page grid md:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img
            src={2703699.jpg}
            alt="Profissional do my beauty"
            loading="lazy"
            width={1000}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-script text-3xl md:text-4xl text-rose mb-3">sobre nós</p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Um cuidado feito com carinho, técnica e sensibilidade.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Há mais de 10 anos ajudamos mulheres a se sentirem confiantes através de
            técnicas delicadas de design de sobrancelhas, micropigmentação, extensão
            de cílios e cuidados faciais.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada atendimento é único: estudamos o seu rosto, seus traços e seu estilo
            para entregar um resultado natural, sofisticado e feito à sua medida.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "10+", l: "anos de experiência" },
              { n: "2k+", l: "clientes atendidas" },
              { n: "100%", l: "produtos premium" },
            ].map((s) => (
              <div key={s.l} className="border-t border-rose/30 pt-3">
                <p className="font-script text-3xl text-rose">{s.n}</p>
                <p className="mt-1 text-xs tracking-wide uppercase text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const procedimentos = [
  {
    title: "Design de Sobrancelhas",
    desc: "Estudo do rosto, correção com henna ou pigmentação natural.",
    img: procedureBrows,
  },
  {
    title: "Micropigmentação",
    desc: "Fios realistas, sombreado e efeito aquarela para lábios.",
    img: procedureFace,
  },
  {
    title: "Cílios & Skincare",
    desc: "Extensão fio a fio, lash lifting e limpeza de pele profunda.",
    img: heroStudio,
  },
];

function Procedimentos() {
  return (
    <section id="procedimentos" className="py-24 md:py-32">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="font-script text-4xl md:text-5xl text-rose">Entenda os procedimentos...</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-light">Nossos serviços</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {procedimentos.map((p) => (
            <article
              key={p.title}
              className="group bg-card rounded-[2rem] overflow-hidden border border-border/60 hover:shadow-[0_20px_60px_-20px_rgba(180,120,120,0.35)] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-blush">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-light">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center text-[11px] tracking-[0.25em] uppercase text-rose hover:text-foreground transition-colors"
                >
                  Saiba mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Loja() {
  return (
    <section id="loja" className="py-20">
      <div className="container-page">
        <div className="relative rounded-[2rem] overflow-hidden bg-nude/40">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-16">
              <div className="h-px w-12 bg-rose mb-6" />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">LOJA ON-LINE</h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Os mesmos produtos que usamos no studio, direto para o conforto da sua casa.
                Skincare, maquiagem e acessórios selecionados.
              </p>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center rounded-full bg-primary px-7 py-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground hover:bg-rose transition-colors"
              >
                Ver produtos
              </a>
            </div>
            <div className="aspect-[16/12] md:aspect-auto md:h-full">
              <img
                src={products}
                alt="Produtos my beauty"
                loading="lazy"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-blush/40 py-24 md:py-32">
      <div className="container-page grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-script text-4xl text-rose mb-3">vamos conversar?</p>
          <h2 className="text-3xl md:text-4xl font-light">Marque a sua visita ao studio</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Entre em contato pelo canal que preferir. Respondemos rapidinho para
            confirmar o melhor horário para você.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border">
                <MapPin className="h-4 w-4 text-rose" />
              </span>
              Rua das Flores, 123 — Centro
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border">
                <Phone className="h-4 w-4 text-rose" />
              </span>
              (11) 99999-0000
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border">
                <Mail className="h-4 w-4 text-rose" />
              </span>
              contato@mybeauty.studio
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border">
                <Instagram className="h-4 w-4 text-rose" />
              </span>
              @mybeauty.studio
            </li>
          </ul>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-card rounded-[2rem] p-8 md:p-10 border border-border/60 space-y-4"
        >
          <div>
            <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Nome</label>
            <input
              type="text"
              className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-rose transition-colors"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Whatsapp</label>
            <input
              type="tel"
              className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-rose transition-colors"
              placeholder="(11) 90000-0000"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Procedimento</label>
            <input
              type="text"
              className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-rose transition-colors"
              placeholder="O que você deseja fazer?"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Mensagem</label>
            <textarea
              rows={3}
              className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-rose transition-colors resize-none"
              placeholder="Conte-nos mais…"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground hover:bg-rose transition-colors"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="my beauty" className="h-8 w-auto invert" />
          <span className="text-xs tracking-[0.25em] uppercase">studio</span>
        </div>
        <p className="text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} my beauty — todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        
        <Procedimentos />
        <Loja />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
