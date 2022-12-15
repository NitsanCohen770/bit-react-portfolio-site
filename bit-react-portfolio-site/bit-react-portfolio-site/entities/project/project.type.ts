export type ProjectType = {
    id: string;
    name: string,
    description: string,
    tags: string[],
    image: string,
    type: ProjectKind,
    links: { [key: string]: string }
}

export type ProjectKind = 'monolithic' | 'component-based';