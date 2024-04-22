"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

/**
 * @description creates and renders a sidebar with links to different pages. When a
 * link is clicked, the `onNavigate` function is called to push the corresponding URL
 * to the router.
 * 
 * @returns { HTML division element. } a CSS class component that renders a sidebar
 * with icons and labels for different routes.
 * 
 * 		- `className`: This is an string attribute that represents the class name of the
 * outermost div element in the return value. The value of this attribute is "space-y-4
 * flex flex-col h-full text-primary bg-secondary".
 * 		- `onNavigate`: This is a function attribute that represents the onNavigate
 * function. This function takes two arguments: (url: string, pro: boolean). It maps
 * over the routes array and sets the background color of each route to "bg-primary/10"
 * when the url matches the href property of that route.
 * 		- `routes`: This is an array attribute that represents the routes object. This
 * object contains three properties: icon, href, and label. Each property has a string
 * value representing the pathname, icon, and label of each route, respectively.
 * 		- `<div className="p-3 flex-1 flex justify-center">`: This is a HTML element
 * with a class name attribute "flex" set to "justify-center". The rest of the
 * attributes are explained below:
 * 		+ `className`: This is an string attribute that represents the class name of the
 * div element. The value of this attribute is "group flex p-3 w-full justify-start
 * font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition".
 * 		+ `onClick`: This is a function attribute that represents the onClick event
 * handler for the div element. The function takes no arguments and maps over the
 * routes array to call the onNavigate function with the corresponding route's href
 * property as the url argument and the route's pro property set to false.
 * 		+ `key`: This is an integer attribute that represents a unique key for each route
 * in the routes array. The value of this attribute is the corresponding route's href
 * property.
 * 		+ `<div className="flex flex-col gap-y-2 items-center flex-1">`: This is a HTML
 * element with a class name attribute "group" set to "text-muted-foreground text-xs".
 * The rest of the attributes are explained below:
 * 			- `className`: This is an string attribute that represents the class name of
 * the inner div element. The value of this attribute is "text-muted-foreground text-xs
 * group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary
 * hover:bg-primary/10 rounded-lg transition".
 * 			- `gap`: This is a CSS property that represents the vertical gap between the
 * inner div element and its parent element. The value of this attribute is "y-2".
 * 			- `<route.icon className="h-5 w-5"></route.icon>`: This is an HTML element with
 * a class name attribute "h-5 w-5". The element represents an icon for each route
 * in the routes array.
 * 			- `label`: This is a string attribute that represents the label for each route
 * in the routes array.
 * 			- `pro`: This is a boolean attribute that represents whether the corresponding
 * route is the current route (i.e., the route being rendered). The value of this
 * attribute is false for all routes except the current one.
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
                 * @description maps the `routes` array and renders a list of routes on the page,
                 * each with an icon and label.
                 * 
                 * @param { string } className - CSS class name of the component element being rendered,
                 * which can be customized to control the styling and appearance of the component.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description generates high-quality documentation for code given to it.
                     * 
                     * @param { string } key - href of the current route and is used to identify the
                     * correct element to navigate when the user clicks on the component.
                     * 
                     * @param { functions call. } onClick - handler function to be called when the element
                     * is clicked.
                     * 
                     * 		- `key`: The `key` attribute specifies a unique identifier for each item in the
                     * menu, used to distinguish between different menu items when the user hovers over
                     * them.
                     * 		- `onClick`: This is the event handler that will be called when the user clicks
                     * on the menu item. It takes no arguments and has no properties.
                     * 
                     * @param { string } className - class name of an element.
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
