export interface PagingRequest {
    pageIndex: number;
    pageSize: number;
}
export interface SortRequest extends PagingRequest {
    sortBy: string;
    sortDirection: string;
    sorts: any;
}
