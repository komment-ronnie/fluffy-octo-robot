"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

/**
 * @description provides a sidebar with a list of links to navigate to different pages
 * within an application. Each link displays an icon and label, and can be clicked
 * to navigate to the corresponding page using the provided router object.
 * 
 * @returns { HTML division element. } a CSS class string for a sidebar element with
 * icons and labels for navigation links.
 * 
 * 		- `div`: A container div element that wraps the entire sidebar content.
 * 		- `className`: The class name of the container div element, which includes a set
 * of styles defined in the CSS file.
 * 		- `onClick`: An event handler function that is called when the sidebar items are
 * clicked. It takes no arguments and calls the `onNavigate` function with the clicked
 * item's href and whether it is a professional (pro) page or not.
 * 		- `routes`: An array of route objects that define the different sidebar items.
 * Each route object has several properties:
 * 		+ `icon`: The icon component to display in the sidebar item, which can be a
 * functional component or a static image.
 * 		+ `href`: The URL path of the linked page, including any query parameters or
 * fragment identifiers.
 * 		+ `label`: The text label to display for the sidebar item, which can be a string
 * or a function that returns a string.
 * 		+ `pro`: A boolean flag indicating whether the link is a professional (pro) page
 * or not.
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
                 * @description maps through an array of objects, each representing a route. The `div`
                 * component displays each route's icon and label when clicked on, routing to the
                 * associated URL using the `onNavigate` function.
                 * 
                 * @param { string } className - class attribute of an element and defines the classes
                 * for an HTML element based on the corresponding value in the route object.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description generates high-quality documentation for given code.
                     * 
                     * @param { string } key - href of the component being navigated to.
                     * 
                     * @param { object } onClick - function to be called when the element is clicked.
                     * 
                     * @param { string } className - CSS class name for the element, which can be used
                     * to apply custom styles to the component.
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
