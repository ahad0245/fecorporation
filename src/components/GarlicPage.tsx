import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Download,
  Leaf,
  PhoneCall,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import "./GarlicPage.css";

const deckUrl = "/downloads/FE_Garlic_Phase1_Capital_Raise.pptx";
const inquiryEmail =
  "mailto:info@fecorporation.ca?subject=Garlic%20Phase%201%20Investment%20Inquiry";

const marketCards = [
  {
    metric: "26,453 t",
    title: "Fresh garlic imports",
    copy: "2024 Canadian fresh garlic import volume used in the market case."
  },
  {
    metric: "2,077 t",
    title: "Domestic production",
    copy: "Reported 2024 Canadian production, showing the scale of the supply gap."
  },
  {
    metric: "1,000 t/yr",
    title: "Mature output target",
    copy: "Year 12 bulb production target plus scape and specialty byproduct revenue."
  },
  {
    metric: "51%",
    title: "CDC control target",
    copy: "Indigenous community ownership/control target, subject to approvals and definitive agreements."
  }
];

const returnCards = [
  {
    year: "0-12 months",
    title: "Capital deployment and asset build",
    copy: "Funds are used for site readiness, seed stock, storage and curing infrastructure, operating team, certification start, insurance, governance, and buyer validation. This period is mainly value creation, not distribution."
  },
  {
    year: "12-36 months",
    title: "First proof and potential mark-up event",
    copy: "After planting, harvest, storage results, buyer feedback, and trial sales, investors may see value through a Phase 2 financing event, strategic follow-on capital, or negotiated secondary or liquidity option if approved."
  },
  {
    year: "Years 4-7",
    title: "Commercial scale return window",
    copy: "Phase 2 is the more realistic window for stronger investor return potential: buyer contracts, second-site expansion, working-capital facilities, and operating proof can support revaluation, distributions, or refinancing discussions."
  }
];

const capitalStack = [
  ["Investor capital already raised", "Raised / committed", "$4,500,000"],
  ["GP participation", "Acting GP contribution", "$200,000"],
  ["Remaining investor allocation", "Open for close", "$300,000"],
  ["Total Phase 1 capital", "Target close", "$5,000,000"]
];

const useOfFunds = [
  [
    "Pilot site, land access, water and field preparation",
    "Site file, soil/water diligence, drainage, beds, irrigation and readiness.",
    "$900K"
  ],
  [
    "Seed stock and biosecurity",
    "Disease-tested planting stock, sourcing, sanitation, testing and handling protocols.",
    "$950K"
  ],
  [
    "Storage, curing and equipment",
    "Controlled curing/storage, handling, small equipment and post-harvest infrastructure.",
    "$1.150M"
  ],
  [
    "Agricultural operating team and labour",
    "COO/operator, agronomy, seasonal labour, training and field execution.",
    "$825K"
  ],
  [
    "Certification, legal, governance and insurance",
    "Organic transition, CDC/FPIC pathway, counsel, insurance and compliance.",
    "$475K"
  ],
  [
    "Buyer validation, packaging and market development",
    "Samples, buyer outreach, LOIs, packaging mockups and pricing validation.",
    "$300K"
  ],
  [
    "Working capital and contingency",
    "Operating reserve, seasonal timing, unexpected capex and crop-risk buffer.",
    "$400K"
  ],
  ["Total Phase 1 budget", "", "$5.000M"]
];

const phases = [
  {
    title: "Phase 1: Proof of Concept",
    timing: "Years 1-3 | CAD $5.0M",
    copy: "Pilot site, seed stock, storage/equipment, operating team, certification start, agronomy and working capital."
  },
  {
    title: "Phase 2: Commercial Scale",
    timing: "Years 4-7 | CAD $7.5M planning case",
    copy: "Second site, buyer contracts, organic certification, larger storage and initial processing capability."
  },
  {
    title: "Phase 3: National Platform",
    timing: "Years 8-12 | CAD $12.5M planning case",
    copy: "Multi-site platform, institutional capital pathway, climate-controlled storage and national market scale."
  }
];

const riskControls = [
  [
    "Operator gate",
    "Qualified agricultural COO or operating partner before planting capital is drawn."
  ],
  [
    "Site gate",
    "Pilot site, soil, water, insurance and land-access diligence documented before major spend."
  ],
  [
    "Buyer gate",
    "Buyer feedback, trial orders, LOIs and pricing validation before Phase 2 assumptions are used."
  ],
  [
    "Community gate",
    "CDC structure, FPIC pathway, governance and reserved matters formally documented."
  ]
];

function GarlicPage() {
  useEffect(() => {
    document.title =
      "FE Corporation Canada | Garlic Phase 1 Investor Opportunity";
  }, []);

  return (
    <div className="garlic-page">
      <header className="garlic-topbar">
        <nav className="garlic-nav" aria-label="Garlic page navigation">
          <Link className="garlic-brand" to="/">
            FE Corporation Canada
            <small>Real-world asset structuring</small>
          </Link>

          <div className="garlic-navlinks">
            <a href="#return">Return Path</a>
            <a href="#funding">Funding</a>
            <a href="#use-of-funds">Use of Funds</a>
            <a className="garlic-nav-cta" href="#download">
              Download Deck
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="garlic-hero">
          <div className="garlic-hero-inner">
            <div className="garlic-hero-copy-wrap">
              <Link className="garlic-back-link" to="/">
                <ArrowLeft aria-hidden="true" />
                Main site
              </Link>
              <div className="garlic-eyebrow">Phase 1 investor opportunity</div>
              <h1>
                The final $300K allocation in a Canadian garlic infrastructure
                platform.
              </h1>
              <p className="garlic-hero-copy">
                FE Corporation Canada is advancing a milestone-gated
                agricultural infrastructure platform built around premium
                domestic garlic, disease-tested planting stock, controlled
                curing/storage, and Indigenous community-led ownership.
              </p>

              <ul className="garlic-hero-points">
                <li>
                  CAD $5.0M Phase 1 close with CAD $4.7M already raised or
                  committed.
                </li>
                <li>
                  Designed to create first proof-of-concept evidence over Years
                  1-3 before larger institutional capital.
                </li>
                <li>
                  Management model targets Year 12 revenue of CAD $10.48M and
                  EBITDA of CAD $3.78M at platform maturity.
                </li>
              </ul>

              <div className="garlic-cta-row">
                <a className="garlic-btn garlic-btn-primary" href={deckUrl} download>
                  <Download aria-hidden="true" />
                  Download Investor Deck
                </a>
                <a className="garlic-btn garlic-btn-secondary" href={inquiryEmail}>
                  <PhoneCall aria-hidden="true" />
                  Request Investor Call
                </a>
              </div>
            </div>

            <aside className="garlic-deal-card" aria-label="Phase 1 funding status">
              <div className="garlic-deal-label">Almost closed</div>
              <div className="garlic-big-number">$300K</div>
              <p className="garlic-muted garlic-no-margin">
                remaining to complete the CAD $5.0M Phase 1 capital package.
              </p>
              <div className="garlic-progress-wrap" aria-hidden="true">
                <div className="garlic-progress-fill" />
              </div>
              <p className="garlic-funded-note">
                94% funded: CAD $4.7M already raised or committed.
              </p>
              <div className="garlic-funding-grid">
                <div className="garlic-mini">
                  <strong>$5.0M</strong>
                  <span>Phase 1 close</span>
                </div>
                <div className="garlic-mini">
                  <strong>$4.7M</strong>
                  <span>Raised</span>
                </div>
                <div className="garlic-mini">
                  <strong>$300K</strong>
                  <span>Open allocation</span>
                </div>
              </div>
              <div className="garlic-close-note">
                Investor message: this is not a blank-start raise. The open
                amount is the final close needed to execute Phase 1 properly.
              </div>
            </aside>
          </div>
        </section>

        <section className="garlic-strip" aria-label="Investment highlights">
          <div className="garlic-container garlic-strip-grid">
            <div className="garlic-strip-card">
              <CalendarDays aria-hidden="true" />
              <strong>Years 1-3</strong>
              <span>
                Target window to build the pilot, complete first harvest
                evidence, validate buyers, and prepare Phase 2 decisioning.
              </span>
            </div>
            <div className="garlic-strip-card">
              <TrendingUp aria-hidden="true" />
              <strong>22% target IRR</strong>
              <span>
                Sponsor-model equity IRR target, subject to validation,
                diligence, structure, timing, and execution.
              </span>
            </div>
            <div className="garlic-strip-card">
              <ShieldCheck aria-hidden="true" />
              <strong>36% EBITDA</strong>
              <span>
                Year 12 management-case EBITDA margin at platform maturity,
                before treating upside as guaranteed.
              </span>
            </div>
          </div>
        </section>

        <section className="garlic-section" id="opportunity">
          <div className="garlic-container">
            <div className="garlic-section-head">
              <div className="garlic-kicker">Why this deal is attractive</div>
              <h2>A domestic food-security opportunity with real-asset discipline.</h2>
              <p>
                Canada has limited domestic garlic production relative to import
                volume. The opportunity is not to compete as a low-cost commodity
                supplier; it is to build premium, traceable, controlled, domestic
                supply with infrastructure-quality governance and stage gates.
              </p>
            </div>

            <div className="garlic-cards">
              {marketCards.map((card) => (
                <article className="garlic-card" key={card.title}>
                  <div className="garlic-metric">{card.metric}</div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="garlic-section garlic-dark" id="return">
          <div className="garlic-container">
            <div className="garlic-section-head">
              <div className="garlic-kicker">When investors may see return</div>
              <h2>
                Return pathway: early evidence in Years 1-3, stronger value
                creation after Phase 2 scale.
              </h2>
              <p>
                This is a development-stage agriculture infrastructure
                investment. The return profile is expected to come from
                execution milestones, commercial sales evidence, valuation
                uplift at Phase 2 financing, and later cash-flow/refinancing
                potential as the platform matures.
              </p>
            </div>

            <div className="garlic-return-grid">
              {returnCards.map((card) => (
                <article className="garlic-return-card" key={card.year}>
                  <span>{card.year}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
            <p className="garlic-return-note">
              Important: return timing is a target pathway, not a guarantee.
              Actual return depends on crop yield, disease control, buyer
              demand, financing availability, legal structure, tax treatment,
              investor terms, and formal documentation.
            </p>
          </div>
        </section>

        <section className="garlic-section" id="funding">
          <div className="garlic-container garlic-split">
            <div className="garlic-highlight-box">
              <div className="garlic-kicker">Funding status</div>
              <h2>Phase 1 is nearly closed. The last cheque completes the execution budget.</h2>
              <p>
                The immediate opportunity is the final CAD $300K needed to
                complete the CAD $5.0M Phase 1 close. This gives the project
                enough capital to execute the proof-of-concept properly instead
                of underfunding the pilot.
              </p>
              <div className="garlic-progress-wrap">
                <div className="garlic-progress-fill" />
              </div>
              <p>
                <strong>CAD $4.7M raised</strong> through existing investors and
                GP participation. <strong>CAD $300K remains open</strong> for
                the final close.
              </p>
            </div>

            <div className="garlic-capital-stack" aria-label="Phase 1 capital stack">
              {capitalStack.map(([label, note, amount], index) => (
                <div
                  className={`garlic-stack-row ${
                    index === capitalStack.length - 1 ? "garlic-stack-total" : ""
                  }`}
                  key={label}
                >
                  <div>
                    <b>{label}</b>
                    <small>{note}</small>
                  </div>
                  <div className="garlic-amount">{amount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="garlic-section" id="use-of-funds">
          <div className="garlic-container garlic-split">
            <div>
              <div className="garlic-kicker">Use of funds</div>
              <h2>CAD $5.0M to move from opportunity to operating proof.</h2>
              <p className="garlic-lead">
                The budget is deliberately practical: site, seed, storage,
                operator, certification, buyer validation and contingency.
                Investors are funding the evidence required for later scale, not
                a full CAD $25M buildout upfront.
              </p>
            </div>

            <div className="garlic-highlight-box garlic-use-list">
              {useOfFunds.map(([label, note, amount]) => (
                <div className="garlic-use-item" key={label}>
                  <div>
                    <strong>{label}</strong>
                    {note && <span>{note}</span>}
                  </div>
                  <div className="garlic-amount">{amount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="garlic-section">
          <div className="garlic-container">
            <div className="garlic-section-head">
              <div className="garlic-kicker">Growth plan</div>
              <h2>A CAD $25M platform plan, released only after milestones.</h2>
              <p>
                The project is designed as a staged platform. Phase 1 proves the
                model; Phase 2 scales commercially; Phase 3 prepares the platform
                for bank, pension-fund, strategic or project-finance capital.
              </p>
            </div>

            <div className="garlic-timeline">
              {phases.map((phase, index) => (
                <article className="garlic-phase" key={phase.title}>
                  <span>{index + 1}</span>
                  <h3>{phase.title}</h3>
                  <p>
                    <strong>{phase.timing}</strong>
                    {phase.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="garlic-section garlic-dark">
          <div className="garlic-container garlic-split">
            <div>
              <div className="garlic-kicker">Risk controls</div>
              <h2>A better investment story because the gates are clear.</h2>
              <p>
                Agriculture is never risk-free. The goal is to control what can
                be controlled: operator quality, site readiness, clean seed,
                storage discipline, buyer validation, insurance, and Indigenous
                governance approvals.
              </p>
            </div>

            <div className="garlic-risk-grid">
              {riskControls.map(([title, copy]) => (
                <div className="garlic-risk" key={title}>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="garlic-section garlic-final-cta" id="download">
          <div className="garlic-container">
            <Leaf className="garlic-final-icon" aria-hidden="true" />
            <div className="garlic-kicker">Investor package</div>
            <h2>Review the full Phase 1 investor close deck.</h2>
            <p>
              The deck summarizes the raise, market opportunity, use of funds,
              return pathway, stage-gated execution plan, risk controls and next
              steps for investors considering the final CAD $300K allocation.
            </p>
            <div className="garlic-cta-row garlic-centered">
              <a className="garlic-btn garlic-btn-primary" href={deckUrl} download>
                <Download aria-hidden="true" />
                Download PowerPoint Deck
              </a>
              <a
                className="garlic-btn garlic-btn-dark"
                href="mailto:info@fecorporation.ca?subject=Garlic%20Investor%20Deck%20Follow-up"
              >
                <PhoneCall aria-hidden="true" />
                Book a Confidential Discussion
              </a>
            </div>
            <div className="garlic-contact-card">
              For investors: request the data room, Phase 1 terms,
              use-of-funds detail, stage-gate package, and return structure for
              review.
            </div>
          </div>
        </section>
      </main>

      <footer className="garlic-footer">
        <div className="garlic-container">
          <strong>FE Corporation Canada</strong>
          <div className="garlic-disclaimer">
            Confidential investor discussion only. This page and downloadable
            materials are not an offering memorandum, prospectus, loan
            commitment, guarantee approval, offtake commitment, tax/legal advice,
            or binding proposal. All investment, financing, site, buyer,
            community, legal, securities, agronomic, tax, regulatory and
            operating matters remain subject to due diligence, approvals and
            definitive documentation. Forward-looking targets, return timing,
            IRR, revenue, EBITDA, valuation, refinancing and distribution
            references are management planning assumptions only and are not
            guaranteed.
          </div>
        </div>
      </footer>

      <div className="garlic-mobile-sticky" aria-label="Mobile investor actions">
        <a className="garlic-btn garlic-btn-primary" href={deckUrl} download>
          <Download aria-hidden="true" />
          Download Deck
        </a>
        <a className="garlic-btn garlic-btn-secondary" href={inquiryEmail}>
          <PhoneCall aria-hidden="true" />
          Investor Call
        </a>
      </div>
    </div>
  );
}

export default GarlicPage;
