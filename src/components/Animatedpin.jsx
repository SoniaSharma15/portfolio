import { PinContainer } from "./3d-pin";

export function Animatedpin({ title, img, desc, iconlist, link }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer title={desc} href={link}>
        <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold px-5 py-2 text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal ">
            <span className="text-slate-500 px-4 flex flex-wrap">
              {Array.isArray(iconlist) &&
                iconlist.map((icon, index) => (
                  <span key={index} className="mr-1 text-slate-500">
                    {icon}
                    {index < iconlist.length - 1 && ","}
                  </span>
                ))}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative" />
          <img src={img} alt="" className="w-full h-full" />
        </div>
      </PinContainer>
    </div>
  );
}
