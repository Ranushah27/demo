import { Link } from "react-router-dom";

type Props = {
  whatsappUrl: string;
};

export function SuccessScreen({ whatsappUrl }: Props) {
  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-black px-6">
      <div className="max-w-lg w-full text-center">
        <span className="gold-line-center mx-auto block" />
        <p className="eyebrow mt-6 justify-center">Enquiry Sent</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ivory mt-6 leading-[1.1] text-balance">
          Your table is one step closer.
        </h1>
        <p className="text-grey mt-6 leading-relaxed">
          Thank you. Your dining request has been received. Chef Maddy will review your enquiry and get back to you
          with availability, menu recommendations and next steps. You can also continue on WhatsApp to connect with
          him directly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold w-full sm:w-auto">
            Continue On WhatsApp
          </a>
          <Link to="/" className="btn-outline w-full sm:w-auto">
            Back To Maddy Cooks
          </Link>
        </div>
      </div>
    </div>
  );
}
