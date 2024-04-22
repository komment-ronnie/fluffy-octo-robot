"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

/**
 * @description generates high-quality documentation for code provided, listing routes
 * and handling click events to navigate to specified links.
 * 
 * @returns { HTML division element. } a HTML component that displays a list of
 * navigation routes using an array of objects containing icon, href, and label properties.
 * 
 * 		- `className`: This attribute sets the class name of the wrapping div element
 * to "space-y-4 flex flex-col h-full text-primary bg-secondary".
 * 		- `<div className="p-3 flex-1 flex justify-center">`: This inner div element has
 * a class name of "p-3 flex-1 flex justify-center", which sets its padding, flexibility,
 * and alignment.
 * 		- `<div className="space-y-2">`: This inner div element has a class name of
 * "space-y-2", which sets its margin spacing.
 * 		- `<map>`(): This is an HTML map element that displays an array of routes.
 * 		- `{routes.map((route) => (...))}`: This mapping function takes each route object
 * in the `routes` array and creates a map element for each one, using the `onClick`
 * event to navigate to the corresponding URL when clicked.
 * 		- `<div className="flex flex-col gap-y-2 items-center flex-1">`: This inner div
 * element has a class name of "flex flex-col gap-y-2 items-center flex-1", which
 * sets its layout and alignment.
 * 		- `<route.icon>`(): This is an SVG icon element representing each route's icon.
 * 		- `{route.label}`: This text element displays the label for each route.
 * 
 * 	In summary, the `Sidebar` function generates a sidebar menu with multiple routes
 * that can be navigated to using an onClick event. The menu is styled with a secondary
 * background color and a margin spacing of 2 spaces. Each route has an icon representing
 * it and a corresponding label displayer below its icon.
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
                 * @description maps a list of routes to an array of `div` elements, each representing
                 * a single route. The elements are styled with CSS classes based on their pathname
                 * and an internal `onNavigate` function is called when an element is clicked.
                 * 
                 * @param { string } className - class name of the element that is being rendered,
                 * which is used to apply additional styles to the element through the use of CSS classes.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description renders a div element with an icon and a label. The icon is displayed
                     * in the left corner of the div, while the label is displayed beneath it. When the
                     * user hovers over the div, the icon changes color and the background of the div
                     * changes to a darker shade of blue.
                     * 
                     * @param { string } key - element's unique identifier, which is used to attach event
                     * listeners and identify it in subsequent code.
                     * 
                     * @param { JavaScript function. } onClick - function to be called when the element
                     * is clicked.
                     * 
                     * 		- `onClick`: a reference to a function that takes no arguments.
                     * 
                     * @param { string } className - class attribute value for the navigation link element,
                     * which is set to either "text-muted-foreground text-xs group flex p-3 w-full
                     * justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10
                     * rounded-lg transition" or "bg-primary/10 text-primary" depending on the value of
                     * `pathname`.
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
