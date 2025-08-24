import { PinContainer } from "./3d-pin";

export function Animatedpin({ title, img, desc, iconlist, link }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
      <PinContainer title={desc} href={link}>
        <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold px-5 py-2 text-base text-slate-100">
            {title}
          </h3>

          {Array.isArray(iconlist) && iconlist.length > 0 && (
            <div className="text-base font-normal px-4 flex flex-wrap text-slate-500">
              {iconlist.map((icon, index) => (
                <span key={index} className="mr-1">
                  {icon}
                  {index < iconlist.length - 1 && ","}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </PinContainer>
    </div>
  );
}