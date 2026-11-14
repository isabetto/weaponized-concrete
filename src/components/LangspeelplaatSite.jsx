/* The Langspeelplaat website, rebuilt as live HTML at its design width of 1280px.
   SitePreview scales the whole thing to fit, so the text stays vector-sharp at any size.
   Only the photos and the map are images. */

export const SITE_WIDTH = 1280
export const SITE_HEIGHT = 3086

const DARK = '#191a19'
const ORANGE = '#e9563a'
const FONT = "'Inter', system-ui, sans-serif"

const abs = (style) => ({ position: 'absolute', margin: 0, whiteSpace: 'nowrap', ...style })

export default function LangspeelplaatSite() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: SITE_WIDTH,
        height: SITE_HEIGHT,
        overflow: 'hidden',
        background: '#fff',
        color: '#1c1c1c',
        fontFamily: FONT,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Hero */}
      <div style={abs({ left: 0, top: 0, width: SITE_WIDTH, height: 742, background: DARK })} />
      <img
        src="/langspeelplaat/draaitafel.jpg"
        alt=""
        style={abs({ left: 690, top: 80, width: 590, height: 662 })}
      />
      <div
        style={abs({
          left: 71,
          top: 22,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: ORANGE,
        })}
      >
        <div style={abs({ left: 9, top: 9, width: 18, height: 18, borderRadius: '50%', background: DARK })} />
        <div style={abs({ left: 14, top: 14, width: 8, height: 8, borderRadius: '50%', background: ORANGE })} />
      </div>
      <p style={abs({ left: 116, top: 30, fontSize: 17, lineHeight: '22px', color: '#fff' })}>Stichting de Langspeelplaat</p>
      <p style={abs({ left: 72, top: 172, fontSize: 32, lineHeight: '40px', fontWeight: 700, color: ORANGE, letterSpacing: '-0.3px' })}>
        De Langspeelplaat
      </p>
      <h1
        style={abs({
          left: 72,
          top: 231,
          width: 620,
          fontSize: 58,
          lineHeight: '71px',
          fontWeight: 400,
          letterSpacing: '-0.6px',
          color: '#fff',
        })}
      >
        De gezelligste<br />platenzaak van ‘s-<br />Hertogenbosch
      </h1>
      <p style={abs({ left: 72, top: 500, width: 560, fontSize: 17, lineHeight: '28px', color: '#e8e8e8' })}>
        Struin rustig door honderden zorgvuldig uitgezochte platen. Kom<br />langs en laat je verrassen, Jos helpt je graag op weg.
      </p>
      <div
        style={abs({
          left: 71,
          top: 602,
          width: 250,
          height: 49,
          borderRadius: 3,
          background: ORANGE,
          color: DARK,
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: '0.3px',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        Bekijk openingstijden
      </div>

      {/* Over de winkel */}
      <img
        src="/langspeelplaat/jos.jpg"
        alt=""
        style={abs({ left: 51, top: 850, width: 503, height: 373, borderRadius: 12 })}
      />
      <p style={abs({ left: 640, top: 912, fontSize: 13, lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase', color: ORANGE })}>
        Over de winkel
      </p>
      <h2 style={abs({ left: 640, top: 942, fontSize: 36, lineHeight: '50px', fontWeight: 700, letterSpacing: '-0.5px' })}>
        Gerund met liefde, door Jos
      </h2>
      <p style={abs({ left: 640, top: 990, width: 560, fontSize: 17, lineHeight: '26px', color: '#444' })}>
        We verkopen niet online, dus kom langs, blader door de bakken en<br />ontdek platen die je nergens anders vindt!
      </p>
      <p style={abs({ left: 640, top: 1070, width: 540, fontSize: 17, lineHeight: '26px', color: '#444' })}>
        Een praatje maken, een plaat aanraden, of gewoon samen mijmeren<br />over muziek, Jos vindt het allemaal even leuk. Kom binnen, vertel wat<br />je zoekt, en hij duikt met je de bakken in.
      </p>

      <img src="/langspeelplaat/terras.jpg" alt="" style={abs({ left: 0, top: 1330, width: SITE_WIDTH, height: 543 })} />

      {/* Reviews */}
      <div style={abs({ left: 0, top: 1873, width: SITE_WIDTH, height: 273, background: '#dedede' })} />
      <h2 style={abs({ left: 125, top: 1961, width: 560, fontSize: 30, lineHeight: '34px', fontWeight: 700, letterSpacing: '-0.4px' })}>
        De best beoordeelde platenzaak van<br />‘s-Hertogenbosch
      </h2>
      <p style={abs({ left: 125, top: 2041, width: 540, fontSize: 16, lineHeight: '24px', color: '#444' })}>
        Onze klanten waarderen de sfeer, de collectie en het persoonlijke advies.<br />Lees zelf wat ze over ons zeggen op{' '}
        <span style={{ fontWeight: 700, textDecoration: 'underline', color: '#1c1c1c' }}>Google</span>.
      </p>
      <div
        style={abs({
          left: 889,
          top: 1935,
          width: 267,
          height: 149,
          borderRadius: 16,
          background: '#fff',
          textAlign: 'center',
        })}
      >
        <p style={abs({ left: 0, right: 0, top: 22, fontSize: 42, lineHeight: '48px', fontWeight: 300 })}>4.9</p>
        <p style={abs({ left: 0, right: 0, top: 83, fontSize: 18, lineHeight: '22px', letterSpacing: '2px', color: ORANGE })}>
          ★★★★★
        </p>
        <p style={abs({ left: 0, right: 0, top: 122, fontSize: 12.5, lineHeight: '16px', color: '#444' })}>
          uit 160+ Google reviews
        </p>
      </div>

      {/* Openingstijden & locatie */}
      <p style={abs({ left: 71, top: 2303, fontSize: 13, lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase', color: ORANGE })}>
        Openingstijden &amp; locatie
      </p>
      <h2 style={abs({ left: 71, top: 2328, fontSize: 36, lineHeight: '50px', fontWeight: 700, letterSpacing: '-0.5px' })}>
        Kom gezellig langs!
      </h2>
      <p style={abs({ left: 71, top: 2419, fontSize: 15, lineHeight: '20px' })}>MAANDAG – ZATERDAG</p>
      <p style={abs({ left: 302, top: 2419, fontSize: 15, lineHeight: '20px', color: '#333' })}>16:00 – 20:00</p>
      <p style={abs({ left: 71, top: 2465, fontSize: 15, lineHeight: '20px' })}>ZONDAG</p>
      <p style={abs({ left: 302, top: 2465, fontSize: 15, lineHeight: '20px', color: '#777' })}>Gesloten</p>
      <p style={abs({ left: 71, top: 2531, fontSize: 15, lineHeight: '20px' })}>ADRES</p>
      <p style={abs({ left: 71, top: 2560, fontSize: 15, lineHeight: '20px', color: '#444' })}>
        Hinthamereinde 71, 5211 PM ‘s-Hertogenbosch
      </p>
      <img src="/langspeelplaat/kaart.jpg" alt="" style={abs({ left: 604, top: 2262, width: 534, height: 409, borderRadius: 4 })} />

      {/* Contact */}
      <div style={abs({ left: 0, top: 2769, width: SITE_WIDTH, height: 317, background: ORANGE })} />
      <h2 style={abs({ left: 71, top: 2858, width: 560, fontSize: 32, lineHeight: '36px', fontWeight: 300, color: '#1c1c1c' })}>
        Op zoek naar iets speciaals?<br />Vraag het ons!
      </h2>
      <p style={abs({ left: 71, top: 2953, width: 520, fontSize: 16, lineHeight: '25px', color: '#1c1c1c' })}>
        Bel, mail of loop gewoon binnen. Als we het niet op voorraad hebben<br />bestellen we het graag voor je.
      </p>
      <p style={abs({ left: 853, top: 2871, fontSize: 13, lineHeight: '20px', textTransform: 'uppercase', color: '#1c1c1c' })}>Telefoon</p>
      <p style={abs({ left: 853, top: 2892, fontSize: 18, lineHeight: '24px', color: '#1c1c1c' })}>073–6147727</p>
      <p style={abs({ left: 1001, top: 2871, fontSize: 13, lineHeight: '20px', textTransform: 'uppercase', color: '#1c1c1c' })}>E-mail</p>
      <p style={abs({ left: 1001, top: 2892, fontSize: 18, lineHeight: '24px', color: '#1c1c1c' })}>info@delangspeelplaat.nl</p>
      <div
        style={abs({
          left: 853,
          top: 2940,
          width: 168,
          height: 43,
          borderRadius: 22,
          background: '#191a19',
          color: '#fff',
          fontSize: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        })}
      >
        Neem contact op <span style={{ fontSize: 12 }}>↗</span>
      </div>
    </div>
  )
}
