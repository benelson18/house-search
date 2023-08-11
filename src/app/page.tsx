import FancyTitle from "@/components/FancyTitle";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <FancyTitle text={"WELCOME"} className="text-5xl sm:text-7xl md:text-9xl"></FancyTitle>
    </div>
  );
}
