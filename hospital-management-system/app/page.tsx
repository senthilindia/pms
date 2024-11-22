import { PatientForm } from "@/components/forms/PatientForm";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO:Opt varification */}
      <section className=" remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
        </div>
        <PatientForm />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justtify-items-end text-dark-600 xl:text-left">
            &#169; 2024 Smartra
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        src={"/assets/images/onboarding-img.png"}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
