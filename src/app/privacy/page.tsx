import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-white/50">Effective Date: June 27, 2026</p>

        <div className="mt-12 space-y-10 text-sm leading-8 text-white/70">
          <section>
            <p>
              Welcome to <strong>AfriX – Digital Commerce</strong> ("AfriX," "we," "us," or "our"),
              owned and operated by <strong>NexGen Tech Innovations</strong> ("Company"). We are
              committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile application ("App")
              and our website located at{" "}
              <a href="https://nexgentech.dev" className="text-[#d7ff64] hover:underline">
                https://nexgentech.dev
              </a>{" "}
              ("Website").
            </p>
            <p className="mt-4">
              Please read this Privacy Policy carefully. By accessing or using the App or Website, you
              agree to be bound by the terms of this Privacy Policy. If you do not agree with the
              terms of this Privacy Policy, please do not access or use the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">1. Information We Collect</h2>
            <p className="mt-3">
              To provide a secure and functional digital wallet, peer-to-peer (P2P) escrow marketplace,
              and merchant payment platform, we collect several categories of information:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information You Provide to Us:</strong> Account credentials (name, email
                address, password, phone number, and physical country of residence), verification data
                (KYC uploads like government IDs or selfies for Agent/Merchant compliance), and bank/mobile
                money details for handling deposit/withdrawal requests.
              </li>
              <li>
                <strong>Transactional Data:</strong> Details of P2P transfers, mint/burn history, token
                swaps, merchant payments, transaction amounts, timestamps, and communications within active
                escrow disputes.
              </li>
              <li>
                <strong>Automatically Collected Information:</strong> Device ID, operating system version,
                diagnostics (crash logs), usage history, and approximate location (used toSuggest regional
                currencies and comply with regional compliance rules).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p className="mt-3">We use the collected information for the following purposes:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Providing, managing, and maintaining digital wallets, swaps, P2P networks, and merchant payment systems.</li>
              <li>Verifying user, agent, and merchant identities (KYC) to enforce anti-fraud and compliance measures.</li>
              <li>Delivering transactional emails, receipts, push notifications, and security alerts.</li>
              <li>Troubleshooting application stability, analyzing crash reports, and optimising user experiences.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">3. How We Share Your Information</h2>
            <p className="mt-3">
              We do not sell your personal data. We only share information in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>P2P counterparties:</strong> When executing a P2P transaction, payment details (e.g.
                bank details) are shared with the agent to facilitate the cash transfer.
              </li>
              <li>
                <strong>Service Providers:</strong> Secure database, cloud storage (Cloudflare R2), and notification
                infrastructure providers (Twilio, Firebase).
              </li>
              <li>
                <strong>Legal Authorities:</strong> To comply with regulatory or judicial requests, or to prevent
                illicit financial activity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">4. Data Security</h2>
            <p className="mt-3">
              We implement industry-standard administrative, technical, and physical security measures to
              protect your personal and financial information. This includes password hashing (bcrypt), TLS
              encryption for API calls, and secure biometric authentication (Face ID/Touch ID) stored locally
              on your device.
            </p>
            <p className="mt-3">
              However, please be aware that no security system is 100% impenetrable. We cannot guarantee the
              absolute security of our databases or network transmissions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">5. Your Rights & Data Deletion</h2>
            <p className="mt-3">
              You have the right to access, correct, or delete your personal data. You can request the deletion
              of your account through settings or by emailing{" "}
              <a href="mailto:support@nexgentech.dev" className="text-[#d7ff64] hover:underline">
                support@nexgentech.dev
              </a>
              . Please note that we are legally required to retain transaction histories and KYC documents for a
              minimum compliance retention period under local financial regulations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">6. Contact Us</h2>
            <p className="mt-3">
              If you have any questions or concerns about this Privacy Policy, please reach out to us at:
            </p>
            <div className="mt-4 rounded-2xl border border-white/5 bg-white/3 p-5">
              <p><strong>Developer:</strong> NexGen Tech Innovations</p>
              <p><strong>Email:</strong> support@nexgentech.dev</p>
              <p><strong>Website:</strong> https://nexgentech.dev</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
