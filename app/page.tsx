export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate invoices from{" "}
          <span className="text-[#58a6ff]">time tracking</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Toggl, Harvest, or Clockify. InvoiceAuto turns your tracked
          hours into polished invoices, sends payment reminders, and keeps tabs
          on what you&apos;re owed — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $9 / mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Toggl integration",
            "Harvest integration",
            "Clockify integration",
            "Auto invoice generation",
            "Payment reminders",
            "Payment tracking"
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-sm text-[#6e7681] mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices",
              "3 time tracker integrations",
              "Automated email reminders",
              "Payment status dashboard",
              "PDF invoice export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Which time trackers are supported?</h3>
            <p className="text-sm text-[#8b949e]">
              InvoiceAuto connects to Toggl Track, Harvest, and Clockify via their official APIs.
              More integrations are on the roadmap.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How are payment reminders sent?</h3>
            <p className="text-sm text-[#8b949e]">
              Reminders are sent automatically by email on a schedule you configure — 7 days before
              due, on the due date, and 3 days after if still unpaid.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">
              Yes. Cancel with one click from your billing portal. You keep access until the end of
              your billing period with no questions asked.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} InvoiceAuto. All rights reserved.
      </footer>
    </main>
  );
}
