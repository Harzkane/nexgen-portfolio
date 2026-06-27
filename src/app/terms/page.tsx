import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-white/50">Effective Date: June 27, 2026</p>

        <div className="mt-12 space-y-10 text-sm leading-8 text-white/70">
          <section>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the{" "}
              <strong>AfriX – Digital Commerce</strong> mobile application ("App") and website located
              at{" "}
              <a href="https://nexgentech.dev" className="text-[#d7ff64] hover:underline">
                https://nexgentech.dev
              </a>{" "}
              ("Website"), developed and operated by <strong>NexGen Tech Innovations</strong> ("Company,"
              "we," "us," or "our").
            </p>
            <p className="mt-4">
              By creating an account, accessing, or using AfriX, you agree to be bound by these Terms.
              If you do not agree to these Terms, please do not access or use the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">1. Description of Services</h2>
            <p className="mt-3">AfriX is a digital commerce, wallet, and peer-to-peer (P2P) settlement platform. The App facilitates:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Multi-Token Digital Wallets:</strong> Access, balance viewing, and peer-to-peer transfers of supported tokens (including NT, CT, and USDT).
              </li>
              <li>
                <strong>P2P Marketplace (Mint & Burn):</strong> Users can buy digital tokens (mint) or sell digital tokens (burn) through a network of independent Agents.
              </li>
              <li>
                <strong>Escrow Protection:</strong> To secure burn transactions, tokens are temporarily locked in a digital escrow system until the user verifies the receipt of fiat funds from the Agent.
              </li>
              <li>
                <strong>Merchant Payments:</strong> Users can pay for products or services at registered merchant outlets using supported tokens.
              </li>
              <li>
                <strong>Educational Hub:</strong> Access to educational modules regarding digital wallet usage and transaction security.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-[#f4c98b]">
              No Investment Advisory: AfriX is a platform for utility token transfers and digital commerce. We do not provide financial investment, cryptocurrency trading, or speculative investment services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">2. Account Registration and KYC</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old and possess the full legal capacity to enter into these Terms.
              </li>
              <li>
                <strong>Verification (KYC):</strong> certain roles (Agents and Merchants) and transaction limits require Identity Verification (KYC). You agree to provide accurate, complete, and updated documentation.
              </li>
              <li>
                <strong>Security:</strong> You are responsible for keeping your login credentials, password, and 2FA private.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">3. P2P Marketplace and Escrow Rules</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Relationship of Parties:</strong> P2P Mint and Burn requests are transactions executed directly between a User and an independent Agent. NexGen Tech Innovations is not a party to these transactions and acts only as an escrow and routing infrastructure provider.
              </li>
              <li>
                <strong>Mint Request (Buying):</strong> When you submit a Mint request, you must transfer the specified fiat amount to the Agent’s bank details and upload a valid transaction receipt (Proof of Payment).
              </li>
              <li>
                <strong>Burn Request & Escrow (Selling):</strong> When you submit a Burn request, the corresponding tokens are locked in our escrow system. The Agent will transfer fiat funds to your specified bank account.
              </li>
              <li>
                <strong>Finalization:</strong> Once you confirm receipt of fiat funds, the escrowed tokens are released to the Agent's wallet. If a dispute arises, either party can open a Dispute.
              </li>
              <li>
                <strong>Disputes:</strong> Disputes are reviewed and resolved by platform Administrators based on verified bank transfer proofs and transaction receipts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">4. Fees and Settlement</h2>
            <p className="mt-3">Use of the AfriX platform is subject to standard processing fees:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><strong>P2P Transfer Fee:</strong> 0.5% on peer-to-peer token transfers.</li>
              <li><strong>Token Swap Fee:</strong> 1.5% on token-to-token conversions.</li>
              <li><strong>Merchant Collection Fee:</strong> 2.0% on payment requests processed by merchants.</li>
              <li><strong>Agent Facilitation Fee:</strong> 1.0% on Mint/Burn P2P transactions.</li>
            </ul>
            <p className="mt-3">All fees are automatically deducted from the transaction amount at the time of processing.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">5. Disclaimers and Limitation of Liability</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>"As-Is" Basis:</strong> The App and services are provided on an "as-is" and "as-available" basis without warranties of any kind.
              </li>
              <li>
                <strong>Blockchain & Network Risk:</strong> We are not liable for delayed transactions, gas fee volatility, or blockchain node failures.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> In no event shall NexGen Tech Innovations, its directors, employees, or affiliates, be liable for any direct, indirect, incidental, special, or consequential damages.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">6. Contact Us</h2>
            <p className="mt-3">
              If you have any questions, concerns, or disputes regarding these Terms, please contact the appropriate department:
            </p>
            <div className="mt-4 space-y-3">
              {[
                { label: "General Support", email: "support@nexgentech.dev", note: "General questions, account issues, dispute follow-ups" },
                { label: "Legal & Compliance", email: "legal@nexgentech.dev", note: "Legal inquiries, regulatory compliance, formal disputes" },
                { label: "Billing", email: "billing@nexgentech.dev", note: "Fee disputes, billing reconciliation" },
                { label: "Security", email: "security@nexgentech.dev", note: "Reporting fraud or suspicious activity" },
                { label: "Partnerships", email: "partnerships@nexgentech.dev", note: "Merchant partnerships and platform integrations" },
                { label: "Press & Media", email: "press@nexgentech.dev", note: "Media coverage and press inquiries" },
              ].map((item) => (
                <a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  className="flex items-start justify-between rounded-2xl border border-white/5 bg-white/3 px-5 py-4 hover:border-[#d7ff64]/20 hover:bg-[#d7ff64]/5 transition-colors"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/38">{item.label}</p>
                    <p className="mt-1 font-semibold text-[#d7ff64]">{item.email}</p>
                    <p className="mt-1 text-xs text-white/50">{item.note}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/5 bg-white/3 p-5">
              <p><strong>Company:</strong> NexGen Tech Innovations</p>
              <p><strong>Website:</strong>{" "}
                <a href="https://nexgentech.dev" className="text-[#d7ff64] hover:underline">nexgentech.dev</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
