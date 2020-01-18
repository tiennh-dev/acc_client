export interface KeyValue {
    key: string;
    value: string;
}

export interface PagingConfig {
    collectionSize: number;
    pageSize: number;
    pageIndex: number;
    maxSize: number;
}
