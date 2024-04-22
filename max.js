"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

/**
 * @description maps and renders navigation routes to a sidebar, handling link clicks
 * using `onNavigate`. It takes advantage of functional programming principles by
 * returning an immutable representation of the component state.
 * 
 * @returns { HTML div element. } a div element with a vertical list of links to
 * navigate to different routes.
 * 
 * 		- `className`: A class string defining the CSS style for the main container
 * element. It includes values such as "space-y-4", "flex", "flex-col", "h-full",
 * "text-primary", "bg-secondary".
 * 		- `onNavigate`: A function that takes a `url` (string) and a `pro` (boolean) as
 * inputs and pushes the `url` onto the router using the `router.push()` method.
 * 		- `routes`: An array of route objects, each representing a navigation link. Each
 * route object has the following properties:
 * 		+ `icon`: A string defining the icon to display before the label. It can be
 * either a font-awesome icon name or a custom SVG path.
 * 		+ `href`: A string representing the URL to navigate to when the link is clicked.
 * 		+ `label`: A string representing the text to display for the navigation link.
 * 		+ `pro`: A boolean indicating whether the link is a "Pro" link, which is displayed
 * in a different color.
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
                 * @description maps the `routes` array and renders a list of links for navigating
                 * to different routes, each link representing a path and its corresponding label.
                 * 
                 * @param { string } className - CSS class name to be applied to the component element,
                 * which is used to style the layout and appearance of the navigation links.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description maps a route to a component and handles the transition between routes
                     * by providing a smooth animation when hovering over the component's parent element.
                     * 
                     * @param { string } key - react element that will receive the event when the component
                     * is clicked, allowing for efficient handling of the event within the `onNavigate()`
                     * function.
                     * 
                     * @param { functions call. } onClick - event handler that will be triggered when the
                     * element is clicked, which in turn will call the `onNavigate` function with the
                     * current URL and `route.pro`.
                     * 
                     * 		- `key`: a unique identifier for each navigation link, typically a combination
                     * of the URL hash and the page title.
                     * 		- `onClick`: a reference to a function that is called when the user clicks on
                     * the link. This function can be destructured into several properties/attributes:
                     * 		+ `pro`: an object containing additional information about the navigate action,
                     * such as the destination URL or a flag indicating whether the navigation was triggered
                     * by a user gesture.
                     * 		+ `icon`: an icon element representing the navigate button.
                     * 		+ `label`: a string label for the link, usually displayed next to the icon.
                     * 
                     * @param { string } className - class name to assign to the clicked element.
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
