import { type Metadata } from "next";
import ContactPage from "~/components/contact-page";

export const metadata: Metadata = {
  title: "Contact Ayden: Your Developer",
  description:
    "If you have a vision you want to realize, or you are ready to embark your digital journey, come in contact as a valued partner.",
  icons: ["/favicon.ico"],
};

export default function Contact() {
  return <ContactPage />;
}
