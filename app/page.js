import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <section className="grid grid-cols-2 h-[480px]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-bold text-slate-800">
          Shrink it, share it, done
          </p>
          <p className="text-lg text-slate-600">
            Because life's too short for long links.
          </p>
        </div>
        <div className="flex justify-start relative">
        <Image className="mix-blend-darken" src={"/team.png"} fill={true} alt="Image" />
        </div>
      </section>
    </main>
  );
}
