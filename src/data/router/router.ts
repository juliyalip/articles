export interface IRout {
    path: string,
    label: string,
    id: number
}

export const routers: IRout[] = [
    {path: "/", label: "All ", id: 1 },
{path: "/poland", label: "Poland", id: 2},
{path: "/germany", label: "Germany", id:3},
{path: "/slovenia", label: "Slovenia", id: 4},
{path: "/create-article", label: "add article", id: 5}

]