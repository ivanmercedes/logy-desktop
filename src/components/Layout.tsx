import { useState } from "react";
import ButtonNav from "./ButtonNav";
import Drawer from "./Drawer";
import "../style/style.css";

function Layout({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogs, setIsLogs] = useState(false);

  return (
    <>
      <div className="bg-logy-browm h-screen">
        <header className="max-w-[1144px] w-full m-auto p-5 flex items-center justify-between">
          <button onClick={() => setIsOpen(true)}>
            <img src="setting.svg" title="setting" />
          </button>

          <div className="text-white flex gap-3">
            <ButtonNav color="border-logy-green" />
            <ButtonNav color="border-logy-yellow" />
            <ButtonNav color="border-logy-red" />
            <ButtonNav color="border-logy-blue" />
          </div>

          <button onClick={() => setIsLogs(true)} className="text-white flex items-center gap-3">
            <img src="clean.svg" className="w-[30px]" title="clean logs" />
          </button>
        </header>

        <div className="max-w-[1144px] max-height m-auto p-5 flex flex-col gap-5">{children}</div>
      </div>

      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} title="Setting" className="p-5">
        <div className="p-5 flex flex-col gap-5">
          <div className="checkbox-wrapper-40">
            <fieldset className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-xl">Keep on top</span>
            </fieldset>
          </div>

          <fieldset className="flex flex-col">
            <label htmlFor="shorcut" className="text-lg font-light leading-10 tracking-widest">
              Show and Hide shortcut
            </label>
            <input
              id="shortcut"
              type="text"
              placeholder="Shift + Window + L"
              className="font-semibold max-w-[400px] p-2 rounded-xl bg-logy-card outline-none"
            />
          </fieldset>
        </div>

        <button className="bg-logy-orange p-2 w-[150px] rounded-2xl text-logy-browm font-bold">Save</button>
      </Drawer>

      <Drawer setIsOpen={setIsLogs} isOpen={isLogs} title="Clean Logs">
        screen logs
      </Drawer>
    </>
  );
}

export default Layout;
