import Navbar from "@/components/navBar/Navbar";

export default function publicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <h1 className="flex flex-col items-center">Hello Root Layout public</h1>
      <div className="flex flex-col items-center p-24">
        {children}
      </div>
    </>
  );
}