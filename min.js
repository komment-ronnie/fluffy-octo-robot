"use client";

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
/**
 * @description generates high-quality documentation for code given to it, providing
 * an array of routes and an `onNavigate` function that enables navigation between them.
 * 
 * @returns { HTML div element with a class definition containing multiple properties
 * and values, defined within the curly braces of the return statement. } a CSS class
 * component that renders a list of navigation routes on a sidebar, each represented
 * by an icon and label.
 * 
 * 		- `div`: This is the outermost container div of class "space-y-4 flex flex-col
 * h-full text-primary bg-secondary", which contains all the other elements.
 * 		- `<div className="p-3 flex-1 flex justify-center">`: This div has a padding of
 * 3px, is a flex container with a flex direction of row, and has a justify content
 * of center.
 * 		- `<div className="space-y-2">`: This div has a spacing of 2 pixels between elements.
 * 		- `<div className="group flex p-3 w-full justify-start font-medium cursor-pointer
 * hover:text-primary hover:bg-primary/10 rounded-lg transition">`: This div is a
 * group container with a padding of 3 pixels, has a flex direction of column, and
 * has a justify content of start. It also has a font weight of bold, a font size of
 * medium, a cursor type of pointer, and hover effects for text and background color
 * changes.
 * 		- `<route.icon className="h-5 w-5"></route.icon>`: This is an icon element of
 * class "h-5 w-5", which contains the route icons for each navigation link.
 * 		- `<div className="flex flex-col gap-y-2 items-center flex-1">`: This div has a
 * flex direction of column and a justify content of center. It also has a gap between
 * elements of 2 pixels.
 * 		- `{routes.map((route)=>(
 * 	                        <div key={route.href} onClick={()=> onNavigate(route.href,
 * route.pro)} className={cn("text-muted-foreground text-xs group flex p-3 w-full
 * justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10
 * rounded-lg transition", pathname === route.href && "bg-primary/10 text-primary")}>
 * 	                            <div className="flex flex-col gap-y-2 items-center flex-1">
 * 	                                <route.icon className="h-5 w-5"></route.icon>
 * 	                                {route.label}
 * 	                            </div>
 * 	                        </div>
 * 	                    ))}`: This is a mapping function that iterates over the
 * `routes` array and creates an icon link for each route. The `route.href` and
 * `route.pro` properties are used to determine the URL and whether it is the current
 * path or not, respectively. The `pathname` property is also used to check if the
 * current path matches any of the routes.
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
                 * @description maps through an array of routes and renders a button for each route.
                 * When clicked, the function calls the `onNavigate` function with the route's URL
                 * and properties.
                 * 
                 * @param { string } className - class name for each item in the array of routes, and
                 * it is used to style the elements with flexbox layout, justify-start alignment, and
                 * hover effects.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description renders a clickable component with a specific class name that depends
                     * on the value of `pathname`. When clicked, it calls the `onNavigate()` function
                     * with the current URL as an argument.
                     * 
                     * @param { `HTMLElement` } key - reference to the HTML element that the route is
                     * associated with, and is used to identify the element when the route is clicked.
                     * 
                     * 		- `key`: The `key` property is a string that serves as the identifier for the
                     * element. It is used to assign the event handler to the desired element in React.
                     * 		- `href`: The `href` property is a string that represents the URL of the link
                     * or anchor tag. It is the path of the URL that the `onClick` event handler will
                     * navigate to when the element is clicked.
                     * 		- `pro`: The `pro` property is an object that represents the props (properties)
                     * for the component. In this case, it contains a single property, `pathname`, which
                     * is a string that represents the current path of the URL.
                     * 
                     * 	Note: The `onNavigate` function is not explicitly defined in the code snippet
                     * provided, so it cannot be explained further.
                     * 
                     * @param { function reference. } onClick - click event handler that is called when
                     * the element with the class `text-muted-foreground text-xs group flex p-3 w-full
                     * justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10
                     * rounded-lg transition` is clicked.
                     * 
                     * 		- `className`: This property specifies a class name for the `onClick` event handler.
                     * 		- `onClick`: This property is the event handler itself, which will be called
                     * when the element is clicked.
                     * 		- `pathname`: This property is the path of the current URL.
                     * 
                     * @param { string } className - class name for an element and is used to assign a
                     * specific CSS class to the element when it is rendered.
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
