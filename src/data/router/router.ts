export interface Irout {
    path: string,
    title: string,
    id: number
}

export const routers: Irout[] = [
    {path: "/", title: "All countries", id: 1 },
{path: "/poland", title: "Poland", id: 2},
{path: "/germany", title: "Germany", id:3},
{path: "/slovenia", title: "Slovenia", id: 4}

]