import AthletifyIcon from "./assets/athletify-icon-union-white.svg";
import { PROTOTYPE_FEATURE } from "./constants";
import { Menu } from "react-daisyui";
import { TbClock } from "react-icons/tb";
import Feature from "./Feature";

export default function Index() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="flex flex-col min-w-[200px] bg-primary-dark text-white p-2">
        <img
          src={AthletifyIcon}
          alt="logo"
          className="h-6 my-2 text-white"
          color="white"
        />

        <div>
          <div className="w-full flex justify-center mb-2">
            <div className="bg-yellow-500 text-black px-2 pt-0.5 text-xs rounded">
              {PROTOTYPE_FEATURE.toUpperCase()}
            </div>
          </div>

          <Menu className="dark">
            <Menu.Item>
              <a href="/">
                <TbClock size={16} strokeWidth="1" />
                {PROTOTYPE_FEATURE}
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </aside>
      <main className="flex-1 h-screen overflow-hidden">
        <Feature />
      </main>
    </div>
  );
}
