import ContactForm from "@/components/features/contact-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col p-24 justify-center items-center h-screen">
      <ContactForm />
    </div>
  );
}
