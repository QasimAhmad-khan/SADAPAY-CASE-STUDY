import Image from 'next/image';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  CirclePause,
  FileSearch,
  Lock,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

const currentFlow = [
  'Trigger',
  'Evidence',
  'Report',
  'Debit Gate',
  'Investigation',
  'Status',
  'Resolution',
  'Learning',
];

const scenarios = [
  {
    id: '01',
    title: 'Sent, Not Received',
    state: 'Debit known',
    outcome: 'Retry locked',
    tone: 'coral',
    steps: [
      'Qasim sends Ali Rs 25,000',
      'Receipt and history evidence',
      'Ali says money not received',
      'Problem with transaction',
      'Money not received',
      'Do not retry',
      'Under review',
    ],
    note: 'SadaPay investigates, then resolves as delivered, reversed, or escalated.',
  },
  {
    id: '02',
    title: 'Internet Drop',
    state: 'No debit captured',
    outcome: 'Safe retry',
    tone: 'blue',
    steps: [
      'User confirms transfer',
      'Internet drops before debit',
      'Debit check',
      'No debit captured',
      'Lock-screen reconnect notice',
      'Safe retry CTA',
    ],
    note: 'The retry appears only after the system confirms no debit happened.',
  },
  {
    id: '03',
    title: 'Service Unavailable',
    state: 'Rail response unknown',
    outcome: 'Service recovered',
    tone: 'amber',
    steps: [
      'User confirms transfer',
      'SadaPay cannot confirm rail response',
      'Sending is paused',
      'Retry locked',
      'Lock-screen recovery notice',
      'Safe send again',
    ],
    note: 'The product waits for service health before inviting another attempt.',
  },
  {
    id: '04',
    title: 'Bank Not Responding',
    state: 'Credit uncertain',
    outcome: 'Escalate cleanly',
    tone: 'mint',
    steps: [
      'User confirms transfer',
      'Recipient bank does not confirm credit',
      'Still checking sheet',
      'Lock-screen reminder',
      'Retry remains locked',
      'Support escalation',
      'Resolved',
    ],
    note: 'Support takes over when the bank state remains unresolved.',
  },
];

const wireframes = [
  'Recipient lookup',
  'Amount entry',
  'Confirm transfer',
  'Processing',
  'Receipt',
  'History',
  'Issue reason',
  'Under review',
  'Bottom sheet',
  'Lock screen',
  'Safe retry',
];

const principles = [
  'Avoid blame',
  'Show what is known',
  'Name what is unknown',
  'Protect against duplicate loss',
  'Give the next safe action',
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="study-section" aria-labelledby={eyebrow}>
      <div className="section-label" id={eyebrow}>
        {eyebrow}
      </div>
      <div className="section-body">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function PhoneFrame({
  variant,
}: {
  variant: 'receipt' | 'lock' | 'retry' | 'review';
}) {
  const isLock = variant === 'lock';

  return (
    <div className={`phone ${isLock ? 'phone-lock' : ''}`}>
      <div className="phone-status">
        <span>9:41</span>
        <span className="island" />
      </div>
      {variant === 'receipt' && (
        <>
          <div className="phone-hero">
            <span className="send-mark">up</span>
            <strong>Rs 25,000</strong>
            <small>to Ali Raza</small>
          </div>
          <div className="phone-card">
            <span>From</span>
            <strong>Qasim</strong>
            <span>To</span>
            <strong>Ali Raza</strong>
          </div>
          <button className="quiet-button">Problem with transaction</button>
        </>
      )}
      {variant === 'lock' && (
        <>
          <div className="lock-time">9:42</div>
          <div className="lock-date">Tuesday, 9 September</div>
          <div className="notification-card">
            <span className="app-dot">S</span>
            <div>
              <strong>SadaPay</strong>
              <p>Your transfer needs attention.</p>
              <small>Open SadaPay when you are ready.</small>
            </div>
            <span>now</span>
          </div>
        </>
      )}
      {variant === 'retry' && (
        <>
          <div className="phone-hero compact">
            <strong>Safe to retry</strong>
            <small>No debit was captured.</small>
          </div>
          <div className="phone-card">
            <strong>Reference ID</strong>
            <span>TRX-25K-A</span>
          </div>
          <button className="primary-button">Send again</button>
          <button className="quiet-button">Cancel</button>
        </>
      )}
      {variant === 'review' && (
        <>
          <div className="phone-hero compact">
            <strong>Under review</strong>
            <small>Rs 25,000 to Ali Raza</small>
          </div>
          <div className="phone-card timeline-card">
            <span>Reported</span>
            <span>Checking bank</span>
            <span>Resolution</span>
          </div>
          <button className="quiet-button">Chat with support</button>
        </>
      )}
      <span className="home-indicator" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="Case study sections">
          <a href="#problem">Problem</a>
          <a href="#scenarios">Scenarios</a>
          <a href="#wireframes">Wireframes</a>
          <a href="#outcome">Outcome</a>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="kicker">Product design case study</p>
            <h1>SadaPay Transaction Recovery</h1>
            <p className="hero-copy">
              A minimal proposal for protecting users when a transfer is sent,
              delayed, interrupted, or uncertain.
            </p>
          </div>
          <div className="hero-panel" aria-label="Project summary">
            <div>
              <span>Source</span>
              <strong>Figma and Lucid</strong>
            </div>
            <div>
              <span>Scope</span>
              <strong>Recovery flows</strong>
            </div>
            <div>
              <span>Rule</span>
              <strong>No unsafe retry</strong>
            </div>
          </div>
        </div>
      </header>

      <Section eyebrow="problem" title="Problem">
        <p className="lead">
          When Ali does not receive money, SadaPay must explain uncertainty
          without creating duplicate loss.
        </p>
        <div className="problem-grid">
          <div>
            <FileSearch aria-hidden="true" />
            <h3>Evidence first</h3>
            <p>Receipt, history, amount, recipient, and reference ID stay easy to find.</p>
          </div>
          <div>
            <Lock aria-hidden="true" />
            <h3>Retry gated</h3>
            <p>Retry stays unavailable until the debit state is known and safe.</p>
          </div>
          <div>
            <ShieldCheck aria-hidden="true" />
            <h3>Trust preserved</h3>
            <p>The product shows the next safest step, not a vague failure state.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="current-flow" title="Current Flow">
        <div className="flow-strip" role="list" aria-label="Recovery flow">
          {currentFlow.map((item, index) => (
            <div className="flow-step" role="listitem" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              {index < currentFlow.length - 1 && <ArrowRight aria-hidden="true" />}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="scenarios" title="Four Recovery Scenarios">
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <article className={`scenario-card ${scenario.tone}`} key={scenario.id}>
              <div className="scenario-head">
                <span>{scenario.id}</span>
                <div>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.state}</p>
                </div>
              </div>
              <ol>
                {scenario.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="scenario-foot">
                <strong>{scenario.outcome}</strong>
                <p>{scenario.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="safe-retry" title="Safe Retry Logic">
        <div className="logic-grid">
          <div className="logic-rule">
            <CirclePause aria-hidden="true" />
            <h3>Locked</h3>
            <p>Debit captured, rail response unknown, or credit uncertain.</p>
          </div>
          <div className="logic-rule">
            <RefreshCw aria-hidden="true" />
            <h3>Retry</h3>
            <p>No debit captured, hold expired, and the system can safely start again.</p>
          </div>
          <div className="logic-rule">
            <Bell aria-hidden="true" />
            <h3>Notify</h3>
            <p>Scenarios 02 to 04 use the phone lock screen, not in-app nudges.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="wireframes" title="Wireframes">
        <div className="wireframe-layout">
          <div className="wireframe-copy">
            <p>
              The Figma board keeps the sending timelines separate and shows
              receipt, history, reporting, review, lock screen, and retry states.
            </p>
            <div className="wireframe-tags">
              {wireframes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="wireframe-image">
            <Image
              src="/figma-four-timelines.png"
              alt="Figma board showing four separate SadaPay transaction recovery timelines"
              width={3820}
              height={4100}
              priority
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="notifications" title="Lock Screen">
        <div className="phone-row">
          <PhoneFrame variant="receipt" />
          <div className="phone-note">
            <Smartphone aria-hidden="true" />
            <h3>Outside SadaPay</h3>
            <p>
              Scenarios 02, 03, and 04 return on the phone lock screen. The app
              does not create a hidden in-app alert that the user might miss.
            </p>
          </div>
          <PhoneFrame variant="lock" />
        </div>
      </Section>

      <Section eyebrow="trust" title="Trust Principles">
        <ul className="principle-list">
          {principles.map((principle) => (
            <li key={principle}>
              <CheckCircle2 aria-hidden="true" />
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="outcome" title="Final Outcome">
        <div className="outcome">
          <PhoneFrame variant="retry" />
          <div>
            <p className="lead">
              A recovery model that separates user action, money-state logic,
              interface response, and support escalation.
            </p>
            <div className="outcome-grid">
              <PhoneFrame variant="review" />
              <div>
                <h3>Resolved cleanly</h3>
                <p>
                  Each case ends as credited, reversed, safe to retry, or
                  escalated with a visible support trail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
