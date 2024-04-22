"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
/**
 * @description renders a sidebar with links to Home, Create, and Settings pages based
 * on user navigation history and provides an event handler for clicking these links.
 * 
 * @returns { HTMLDivElement. } a list of navigation links with icons and labels,
 * displayed in a vertical layout.
 * 
 * 		- `div`: A container div element with a class name of "space-y-4 flex flex-col
 * h-full text-primary bg-secondary".
 * 		- `div`: An inner div element within the outer div, also with a class name of
 * "flex flex-col h-full text-primary bg-secondary".
 * 		- `p`: A paragraph element within the inner div, which contains a map function
 * that iterates over an array of objects called `routes`.
 * 		- `Key`: Each element in the `routes` array is assigned a unique key using the
 * `key` prop. This key is used to identify the element and prevent duplicates when
 * the component is rendered.
 * 		- `OnClick`: Each element in the `routes` array has an onClick event handler
 * defined, which calls the `onNavigate` function when the element is clicked. The
 * function takes two arguments: the URL of the destination page (`url`) and a boolean
 * value indicating whether the navigation should be permalinked (`pro`).
 * 		- `cn`: An inline CSS class name generator that sets styles for each element in
 * the map function, depending on the condition specified in the `pathname` variable.
 * The styles are:
 * 		+ "text-muted-foreground": A font style of "muted foreground".
 * 		+ "text-xs": A font size of "x-small".
 * 		+ "group flex": An arrangement of elements as a group, using the `flex` layout.
 * 		+ "p-3": A padding value of "3px" on all sides.
 * 		+ "w-full": A width value of "100%".
 * 		+ "justify-start": A justify value of "start".
 * 		+ "font-medium": A font style of "medium".
 * 		+ "cursor-pointer": An cursor style of "pointer".
 * 		+ "hover:text-primary": An hover style of "text primary".
 * 		+ "hover:bg-primary/10": An hover style of "background primary with a lightness
 * of 10%".
 * 		- `route.icon`: An SVG icon element representing the route's icon. The class
 * name for this element is "h-5 w-5", which sets the height and width to "5px".
 * 		- `route.label`: A string containing the route's label text.
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
                 * @description maps the routes array to an HTML element, displaying an icon and a
                 * label for each route.
                 * 
                 * @param { string } className - class name to apply to the element when the component
                 * is clicked.
                 */}
                <div className="space-y-2">
                    {/**
                     * @description is a high-quality documentation generator for given code, producing
                     * concise and formal responses under 100 words.
                     * 
                     * @param { className. } key - route's URL and is used to set the value of the
                     * `onNavigate` function when the element is clicked.
                     * 
                     * 		- `key`: The `key` property is a reference to an object with a `href` attribute
                     * representing the URL of the current page and a `pro` attribute representing the
                     * probability of opening the linked page.
                     * 
                     * @param { function. } onClick - handler for the element, which will be called when
                     * the element is clicked.
                     * 
                     * 		- `key`: This is a string that represents the URL of the link being navigated
                     * to when the element is clicked.
                     * 		- `onClick`: This is a function that will be called when the user clicks on the
                     * element. The function takes no arguments.
                     * 		- `route`: This is an object that contains information about the current route,
                     * including its URL and icon.
                     * 
                     * @param { string } className - class name applied to an HTML element, allowing you
                     * to customize its appearance according to your preferences.
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
