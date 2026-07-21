import { useTranslation } from "../customHooks/useTranslation";


const phones = ["+374 91 282855", "+374 33 855785", "+374 95 212600"];
const whatsapps = ["+374 91 282855", "+374 33 855785"];
const FB_URL = "https://www.facebook.com/share/16Z5AvjzaW/?mibextid=wwXIfr";
const MAP_URL = "https://www.google.com/maps?q=40.1190715,44.4732819";
const MAP_EMBED = "https://www.google.com/maps?q=40.1190715,44.4732819&hl=hy&z=16&output=embed";

const toTel = (n) => n.replace(/\s/g, "");
const toWa = (n) => n.replace(/[\s+]/g, "");


const contactRows = phones.map((num) => ({
  number: num,
  hasWhatsapp: whatsapps.includes(num),
}));


function SectionGlow() {
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-red-600/10 blur-[100px]" />
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-red-500/20 bg-black/50 backdrop-blur-md
        p-5 sm:p-6
        shadow-[0_4px_30px_rgba(220,38,38,0.1)]
        transition-all duration-300
        hover:border-red-500/50 hover:shadow-[0_4px_40px_rgba(220,38,38,0.25)] ${className}`}
    >
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl" />
      {children}
    </div>
  );
}

function CardTitle({ icon, children }) {
  return (
    <h3 className="flex items-center gap-3 text-base sm:text-lg font-semibold text-white mb-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
        bg-gradient-to-br from-red-500/20 to-red-700/10 border border-red-500/30
        text-xl shadow-[0_0_15px_rgba(220,38,38,0.15)]">
        {icon}
      </span>
      <span>{children}</span>
      <span className="ml-auto hidden sm:block h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
    </h3>
  );
}

function PhoneRow({ number, hasWhatsapp }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5
      text-white/80 transition-colors hover:bg-white/5">
      <span dir="ltr" className="text-sm sm:text-base font-medium tracking-wide">
        {number}
      </span>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href={`tel:${toTel(number)}`}
          aria-label={`Позвонить на ${number}`}
          className="flex h-9 w-9 items-center justify-center rounded-full
            bg-red-500/10 text-red-400 transition-transform hover:bg-red-500/20 active:scale-90"
        >
          ☎
        </a>
        
        {hasWhatsapp && (
          <a
            href={`https://wa.me/${toWa(number)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Написать в WhatsApp ${number}`}
            className="flex h-9 w-9 items-center justify-center rounded-full
              bg-green-500/10 text-green-400 transition-transform hover:bg-green-500/20 active:scale-90"
          >
            ✔
          </a>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label, accent = "red", external = false }) {
  const accents = {
    red: "hover:bg-red-500/10 text-red-500",
    blue: "hover:bg-blue-500/10 text-blue-500",
  };

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 sm:py-2
        text-white/80 transition-colors hover:text-white active:scale-[0.98] ${accents[accent]}`}
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm sm:text-base">{label}</span>
      {external && (
        <span className="ml-auto text-white/40 group-hover:text-white transition-colors">↗</span>
      )}
    </a>
  );
}

function MapEmbed({ title }) {
  return (
    <div className="overflow-hidden rounded-xl border border-red-500/20 aspect-[4/3] sm:aspect-video">
      <iframe
        src={MAP_EMBED}
        title={title}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full w-full grayscale-[30%] contrast-110"
      />
    </div>
  );
}

function Contacts() {
  const t = useTranslation((s) => s.t);

  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-white">
      <SectionGlow />


      <div className="relative text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("contacts.title")}
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white/60">{t("contacts.subtitle")}</p>
        <div className="mx-auto mt-6 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
      </div>

      <div className="relative grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">

        <Card>
          <CardTitle icon="📍">{t("contacts.address")}</CardTitle>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            {t("contacts.addressValue")}
          </p>
        </Card>

        <Card>
          <CardTitle icon="🕒">{t("contacts.hours")}</CardTitle>
          <div className="space-y-2 text-white/80 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>{t("contacts.weekdays")}</span>
              <span className="text-red-400 font-medium">{t("contacts.weekdaysTime")}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("contacts.sunday")}</span>
              <span className="text-red-500/80 font-medium">{t("contacts.closed")}</span>
            </div>
          </div>
        </Card>

        {/* Телефоны — один номер = одна строка */}
        <Card className="md:col-span-2">
          <CardTitle icon="📞">{t("contacts.phones")}</CardTitle>
          <div className="divide-y divide-white/5">
            {contactRows.map((row) => (
              <PhoneRow key={row.number} number={row.number} hasWhatsapp={row.hasWhatsapp} />
            ))}
          </div>
        </Card>

        {/* Соцсети + локация */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:col-span-2">
          <Card>
            <CardTitle icon="🌐">{t("contacts.social")}</CardTitle>
            <SocialLink href={FB_URL} icon="📘" label="Facebook" accent="blue" external />
          </Card>

          <Card>
            <CardTitle icon="🗺️">{t("contacts.location")}</CardTitle>
            <SocialLink href={MAP_URL} icon="📍" label={t("contacts.openMap")} accent="red" external />
          </Card>
        </div>

        {/* Карта */}
        <Card className="md:col-span-2">
          <CardTitle icon="🗺️">{t("contacts.location")}</CardTitle>
          <MapEmbed title={t("contacts.location")} />
        </Card>
      </div>
    </section>
  );
}

export default Contacts;