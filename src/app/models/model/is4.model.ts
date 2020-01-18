export interface Resource {
    id: number;
    title: string;
    code: string;
    parentId?: number;
    url?: string;
    type: string;
    icon?: string;
    actions: string[];
    ord?: number
}