"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
/**
 * @description generates a sidebar with navigation links to specified routes, handling
 * URL navigation and rendering the links with icons and labels.
 * 
 * @returns { HTML element (div). } a component that displays a list of routes on a
 * hover-responsive layout.
 * 
 * 		- `div`: This is the outermost div element that contains all the other elements.
 * It has a class of "space-y-4 flex flex-col h-full text-primary bg-secondary",
 * indicating that it should be displayed in a horizontal layout with a small margin
 * between elements, and its height should be full (filling the entire container).
 * 		- ` className`: This is an attribute that specifies the class name of the element.
 * The value of this attribute is "text-primary bg-secondary", which sets the text
 * color to primary and the background color to secondary.
 * 		- `<div className="p-3 flex-1 flex justify-center">`: This is a nested div element
 * with the class "p-3" (meaning padding of 3 pixels), "flex-1" (meaning flexible
 * layout), "flex" (meaning flexible layout), and "justify-center" (meaning center alignment).
 * 		- `<div className="group flex p-3 w-full justify-start font-medium cursor-pointer
 * hover:text-primary hover:bg-primary/10 rounded-lg transition">`: This is another
 * nested div element with the class "group" (meaning group elements), "flex" (meaning
 * flexible layout), "p-3" (meaning padding of 3 pixels), "w-full" (meaning full
 * width), "justify-start" (meaning start alignment), "font-medium" (meaning medium
 * font size), "cursor-pointer" (meaning pointer cursor when hovered), "hover:text-primary"
 * (meaning text color changes to primary on hover), "hover:bg-primary/10" (meaning
 * background color changes to primary/10 on hover), "rounded-lg" (meaning rounded
 * corners with a large size), and "transition" (meaning transition effect when moving
 * between states).
 * 		- `<route.icon className="h-5 w-5"></route.icon>`: This is an SVG icon element
 * representing the home, plus, or settings icons, respectively. The `className`
 * attribute specifies the class name of the icon element, which can be either "Home",
 * "Plus", or "Settings".
 * 		- `<div className="flex flex-col gap-y-2 items-center flex-1">`: This is another
 * nested div element with the class "flex" (meaning flexible layout), "flex-col"
 * (meaning column layout), "gap-y-2" (meaning 2 pixels of gap between elements
 * vertically), "items-center" (meaning centering content horizontally), and "flex-1"
 * (meaning fill the full container width).
 * 		- `<div className="text-muted-foreground text-xs group flex p-3 w-full justify-start
 * font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg
 * transition">`: This is another nested div element with the class "text-muted-foreground"
 * (meaning muted background color), "text-xs" (meaning text size is x-small), "group"
 * (meaning group elements), "flex" (meaning flexible layout), "p-3" (meaning padding
 * of 3 pixels), "w-full" (meaning full width), "justify-start" (meaning start
 * alignment), "font-medium" (meaning medium font size), "cursor-pointer" (meaning
 * pointer cursor when hovered), "hover:text-primary" (meaning text color changes to
 * primary on hover), and "hover:bg-primary/10" (meaning background color changes to
 * primary/10 on hover).
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
                 * @description maps the `routes` array to render a list of navigation links. Each
                 * link is rendered as a `div` with an `onClick` event handler that navigates to the
                 * corresponding route when clicked.
                 * 
                 * @param { string } className - CSS class to apply to each navigational element when
                 * the `onClick` event is triggered.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description is designed to generate high-quality documentation for code provided
                     * to it, with a focus on formality, neutrality, and brevity. It does not repeat the
                     * question, make any first-person statements, or refer to any personal pronouns. The
                     * response is limited to less than 50 words and is structured in passive voice.
                     * 
                     * @param { string } key - react-routing-dom `Key` object, which is used to identify
                     * and map routes to specific components.
                     * 
                     * @param { object } onClick - event handler that will be called when the component
                     * is clicked, and it takes an anonymous function as its value.
                     * 
                     * @param { string } className - class name of the component element being rendered,
                     * and is used to set the CSS class of the element accordingly.
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
