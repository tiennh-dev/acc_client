import { KeyValue } from '../model/base.model';

export interface BaseResponse {
    status: boolean;
    errorCode: string;
    parameters: KeyValue[];
}
export interface BaseEntityResponse<TEntity> extends BaseResponse {
    data: TEntity;
}
export interface DataTableResponse<TEntity> {
    data: TEntity[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}
export interface PagingResponse<TEntity> extends BaseEntityResponse<TEntity> {
    total: number;
    pageIndex: number;
    pageSize: number;
}
export interface FileUploadResponse extends BaseResponse {
    fullUrl: string;
    url: string;
    name: string;
    fileName: string;
    path: string;
    hostName: string;
    uploaded: number;
}
export class PagingModel {
    public pageSize;
    public pageIndex;
    public totalCount;
    public totalPages;

    public static create(pageIndex = 0, pageSize = 20): PagingModel {
        const model = new PagingModel();
        model.pageIndex = pageIndex;
        model.pageSize = pageSize;

        return model;
    }

    public static fromResponse(xPaginationHeader: any): PagingModel {
        const model = new PagingModel();
        model.totalCount = xPaginationHeader.totalCount;
        model.pageIndex = xPaginationHeader.pageIndex;
        model.pageSize = xPaginationHeader.pageSize;
        model.totalPages = xPaginationHeader.totalPages;

        return model;
    }

    public static createNextPage(pageIndex: number, pageSize = 20): PagingModel {
        const model = new PagingModel();
        model.pageIndex = pageIndex + 1;
        model.pageSize = pageSize;

        return model;
    }

    public static createPreviousPage(pageIndex: number, pageSize: number): PagingModel {
        const model = new PagingModel();
        model.pageIndex = pageIndex - 1;
        model.pageSize = pageSize;

        return model;
    }
}
