import {
  ShieldCheck, SprayCan, Zap, Warehouse, Headset, MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../customHooks/useTranslation";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";

const features = [
  { icon: ShieldCheck, label: "about.f1" },
  { icon: SprayCan,    label: "about.f2" },
  { icon: Zap,         label: "about.f3" },
  { icon: Warehouse,   label: "about.f4" },
  { icon: Headset,     label: "about.f5" },
];

const stats = [
  { end: 500, suffix: "+", label: "about.statsParts" },
  { end: 7,   suffix: "",  label: "about.statsDelivery" },
  { end: 300, suffix: "+", label: "about.statsClients" },
];

function About() {
  const t = useTranslation((state) => state.t);

  return (
    <div className="w-full text-white overflow-x-hidden">

      <section className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-12 text-center">

        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96
            rounded-full bg-red-600/20 blur-[100px] pointer-events-none"
        />
        <Reveal>
          <h1
            className="relative text-3xl sm:text-5xl font-bold leading-tight
              bg-gradient-to-r from-white via-red-100 to-red-500
              bg-clip-text text-transparent"
          >
            {t("about.title")}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="relative mt-6 max-w-3xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed">
            {t("about.intro")}
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p className="relative mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed">
            {t("about.mission")}
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 150}>
              <div
                className="rounded-2xl border border-red-500/20 bg-black/50
                  backdrop-blur-md p-8 text-center
                  shadow-[0_0_40px_rgba(220,38,38,0.08)]"
              >
                <div className="text-4xl sm:text-5xl font-bold text-red-500">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-neutral-300">{t(s.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            {t("about.featuresTitle")}
            <span className="block mx-auto mt-3 h-1 w-24 rounded-full
              bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 120}>
              <div
                className="group h-full rounded-2xl border border-white/10 bg-black/40
                  backdrop-blur-md p-6 flex flex-col items-center text-center gap-4
                  transition-all duration-300
                  hover:border-red-500/70 hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
              >
                <div
                  className="w-14 h-14 rounded-full bg-red-600/15
                    ring-1 ring-red-500/30 flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-110 group-hover:bg-red-600/25"
                >
                  <f.icon className="w-7 h-7 text-red-500" />
                </div>
                <p className="text-neutral-200 leading-relaxed">{t(f.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl border border-red-500/30
              bg-gradient-to-r from-red-950/60 via-black/60 to-black/60
              backdrop-blur-md p-8 sm:p-12
              flex flex-col sm:flex-row items-center justify-between gap-6"
          >

            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full
              bg-red-600/25 blur-[90px] pointer-events-none" />
            <p className="relative text-lg sm:text-xl leading-relaxed max-w-2xl">
              {t("about.notFound")}
            </p>
            <Link
              to="/contacts"
              className="relative shrink-0 rounded-full bg-red-600 px-8 py-3 font-semibold
                shadow-[0_0_25px_rgba(220,38,38,0.5)]
                transition-all duration-300
                hover:bg-red-500 hover:scale-105
                hover:shadow-[0_0_40px_rgba(220,38,38,0.8)]"
            >
              {t("about.contactBtn")}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 text-center">
        <Reveal>
          <div className="inline-flex flex-wrap justify-center items-center gap-3 text-lg sm:text-xl">
            <MapPin className="w-6 h-6 text-red-500" />
            <span className="font-semibold">{t("about.addressTitle")}:</span>
            <span className="text-neutral-300">{t("about.address")}</span>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-400 italic leading-relaxed">
            {t("about.closing")}
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default About;