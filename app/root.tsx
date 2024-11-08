import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import AthletifyIcon from "~/assets/athletify-icon-union-white.svg";
import "./tailwind.css";
import { PROTOTYPE_FEATURE } from "./constants";
import { Menu } from "react-daisyui";
import clsx from "clsx";
import { TbClock } from "react-icons/tb";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Index() {
  return (
    <div className="flex h-screen">
      <aside className="flex flex-col min-w-[200px] bg-primary-dark items-center text-white p-2">
        <div>
          <img
            src={AthletifyIcon}
            alt="logo"
            className="h-6 my-2 mx-3 text-white"
            color="white"
          />

          <div className="w-full flex justify-center mb-2">
            <div className="bg-yellow-500 text-black px-2 pt-0.5 text-xs rounded">
              {PROTOTYPE_FEATURE.toUpperCase()}
            </div>
          </div>

          <Menu className="dark">
            <Menu.Item>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  clsx({ pending: isPending, active: isActive })
                }
              >
                <TbClock size={16} strokeWidth="1" />
                {PROTOTYPE_FEATURE}
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </aside>
      <main className="flex-1 h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
