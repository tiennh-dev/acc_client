import { SortRequest } from './base.request';

export interface OrderListRequest extends SortRequest {
    keyword: string;
}
export interface OrderDetailListRequest extends SortRequest {
    orderId: number;
    keyword: string;
}
export interface OrderWorkflowRequest {
    id: number;
    message: string;
}

export interface OrderWorkflowManyRequest {
    id: string[];
    message: string;
}

export interface OrderMessageGetByOrderIdRequest {
    orderId: number;
}

export interface OrderUpdateRequest {
    id: number;
    tracking: string;
    warehouse: string;
    shippingFee: number | null;
    surcharge: number | null;
    surchargeNote: string;
    weight: number | null;
    width: number | null;
    hight: number | null;
    length: number | null;
    deliveryFee: number | null;
    deliveryPartner: string;
}

export interface OrderUpdateTrackingRequest {
    id: number;
    tracking: string;
}

export interface OrderUpdateShippingFreeRequest {
    id: number;
    shippingfree: string;
}

export interface OrderUpdateNoteRequest {
    id: number;
    Note: string;
}

export interface OrderUpdatesurchargeRequest {
    id: number;
    surcharge: string;
}

export interface OrderUpdateWareHouseRequest {
    id: number;
    warehouse: string;
}
export interface OrderUpdateOrderNumberRequest {
    id: number;
    orderNumber: string;
}
export interface OrderUpdatePaymentAccountRequest {
    id: number;
    paymentAccountId: string;
}


export interface OrderPreUpdateRequest {
    id: number;
    warehouse: string;
    shippingFee: number | null;
    status: number;
}

export interface OrderPreUpdateStatusRequest {
    id: number;
    status: number;
}

export interface OrderUpdateShippingFeeRequest {
    id: number;
    shippingFee: number | null;
}

export interface OrderUpdateShippingFeeAndWarehouseRequest {
    id: number;
    shippingFee: number | null;
    warehouse: string;
}
export interface OrderUpdateWarehouseRequest {
    id: number;
    warehouse: string;
}

export interface OrderPaymentsRequest {
    ids: string[];
}

export interface OrderPaysRequest {
    orderIds: string[];
    minPayment: number;
    description: string;
}

export interface GetShippingInfoRequest {
    orderId: number;
}

export interface GetTrackingNumberRequest {
    orderId: number;
}

export interface UpdateBidStatusRequest {
    idorderdetail: number;
    bidstatus: boolean;
}

export interface OrderSplitRequest {
    orderId: number;
    orderSplitInfos: OrderSplitInfoRequest[];
}

export interface OrderSplitInfoRequest {
    orderSplitItems: OrderSplitItemRequest[];
}

export interface OrderSplitItemRequest {
    orderDetailId: number;
    quantity: number;
}

export interface OrderSplitInfo {
    key: number;
    orderSplitItems: OrderSplitItem[];
}

export interface OrderSplitItem {
    orderDetailId: number;
    ref: string;
    productName: string;
    productLink: string;
    previewImage: string;
    quantity: number;
}

export interface AuctionTransactionDetailRequest {
    orderCode: string;
}

export interface AuctionCheckDeletedBidRequest {
    orderCode: string;
}

export interface SendMessageTDRequest {
    orderCode: string;
    message: string;
}

export interface OrderDetailUpdateStatusRequest {
    orderId: number;
    orderDetailId: number;
    note: string;
    status: number;
}