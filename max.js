"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
/**
 * @description returns a component that renders a sidebar with links to different
 * routes. Each link is represented by an icon and its corresponding label, and can
 * be navigated to by clicking on it.
 * 
 * @returns { HTML element div. } a React component that renders a list of routes
 * with icons and labels, which can be navigated to using the `onNavigate` function.
 * 
 * 		- `className`: The class name applied to the outermost div element, which is set
 * to `"space-y-4 flex flex-col h-full text-primary bg-secondary"`.
 * 		- `routes`: An array of objects, each representing a route, with properties such
 * as `icon`, `href`, `label`, and `pro`.
 * 		- `onNavigate`: A function that takes a `url` string and a `pro` boolean as
 * arguments, and uses the `router.push()` method to navigate to the provided URL.
 * 		- `div`: An inner div element with a className of `"flex flex-col h-full
 * text-primary bg-secondary"`, which contains the `routes` array maped to create a
 * list of route buttons.
 */
export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const routes = [
        {
            icon: Home,
            href:"/",
            label:"Home",
            pro: false
        },
            icon: Plus,
            href:"/sage/new",
            label:"Create",
            pro: false
        },
        {
            icon: Settings,
            href:"/settings",
            label:"Settings",
            pro: false
        }
        
    ];

    const onNavigate = (url: string, pro:boolean) => router.push(url);

    return (
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary" >
            <div className="p-3 flex-1 flex justify-center">

                {/**
                 * @description maps a array of routes to a HTML list, where each route is represented
                 * as a button with an icon and a label. When a button is clicked, the `onNavigate`
                 * function is called with the route's URL and properties.
                 * 
                 * @param { string } className - class name of each element to which the function
                 * applies, which is used to customize the layout and appearance of the navigation
                 * links based on the current pathname.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description generates high-quality documentation for code given to it.
                     * 
                     * @param { HTMLClass element reference. } key - href of the current route and is
                     * used to identify the correct route to navigate to when the component is clicked.
                     * 
                     * 		- `className`: The value of this property is either `"text-muted-foreground
                     * text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary
                     * hover:bg-primary/10 rounded-lg transition"` or `"bg-primary/10 text-primary"`
                     * depending on the value of `pathname`.
                     * 		- `onClick`: This is an event handler function that gets called when the element
                     * is clicked. The function takes no arguments.
                     * 		- `route.href`: This property contains the URL path of the route that this
                     * component is defined for.
                     * 		- `route.icon`: This property contains the icon component definition for the
                     * current route.
                     * 		- `route.label`: This property contains the label text for the current route.
                     * 
                     * @param { Function. } onClick - function to be executed when the component is
                     * clicked, providing an alternative to using the `onMouseDown` or `onTouchEnd` events.
                     * 
                     * 		- `onClick`: The function passed as the value of the `onClick` attribute is
                     * called when the element is clicked. It takes no arguments and returns nothing.
                     * 
                     * @param { string } className - CSS class to be applied to the component when the
                     * event is triggered.
                     */}
                    {routes.map((route)=>(
                        <div key={route.href} onClick={()=> onNavigate(route.href, route.pro)} className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition", pathname === route.href && "bg-primary/10 text-primary")}>
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5"></route.icon>
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             </div>
    )
}
