import { ToastrService } from 'ngx-toastr';
import { KeyValue } from '../models/model/base.model';
import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable()
export class UtilityService {
    @BlockUI() blockUI: NgBlockUI;

    public errorCodeDefineMessage = [
        { key: "UnknowError", value: "Lỗi không xác định"},
        { key: "NOT_FOUND", value: "Không tìm thấy dữ liệu"},
        { key: "NotFound", value: "Không tìm thấy dữ liệu"},
        { key: "DEPOSIT_DATA_CHANGED", value: "Dữ liệu nạp tiền đã thay đổi"},
        { key: "DEPOSIT_AMOUNT_MUST_GT_MINIMUM_VALUE", value: "Số tiền bạn nhập không được nhỏ hơn 100.000đ"},
        { key: "DEPOSIT_WALLET_NOT_EXISTING", value: "Ví không tồn tại"},
        { key: "EXIST_DEPOSIT_WAITING", value: "Đang tồn tại giao dịch nạp tiền chờ xử lý"},
        { key: "WITHDRAW_AMOUNT_MUST_GT_MINIMUM_VALUE", value: "Số tiền rút phải lớn hơn giá trị tối thiểu" },
        { key: "WITHDRAW_BANK_NAME_MUST_INPUT", value: "Thiếu thông tin tên ngân hàng" },
        { key: "WITHDRAW_ACCOUNT_NUMBER_MUST_INPUT", value: "Thiếu thông tin số tài khoản ngân hàng" },
        { key: "WITHDRAW_ACCOUNT_NAME_MUST_INPUT", value: "Thiếu thông tin tên tài khoản ngân hàng" },
        { key: "WITHDRAW_BRANCH_MUST_INPUT", value: "Thiếu thông tin chi nhánh ngân hàng" },
        { key: "WITHDRAW_PROVINCE_MUST_INPUT", value: "Thiếu thông tin tỉnh, thành phố" },
        { key: "WITHDRAW_WALLET_NOT_EXISTING", value: "Ví rút tiền không tồn tại" },
        { key: "WITHDRAW_YOUR_BALANCE_NOT_ENOUGH", value: "Số dư để rút tiền không đủ" },
        { key: "WITHDRAW_PROCESSING", value: "Đang xử lý rút tiền" },
        { key: "WITHDRAW_PROCESSED", value: "Đã xử lý rút tiền" },
        { key: "WITHDRAW_CANCELED", value: "Đã hủy rút tiền" },
        { key: "WITHDRAW_DATA_CHANGED", value: "Dữ liệu rút tiền đã thay đổi" },
        { key: "CANNOT_COMPLETE_THE_TRANSACTION", value: "Chưa thể hoàn thành giao dịch" },

        { key: "FREEZE_TEMPORARY_DEPOSIT_NOT_EXISTING", value: "Không tồn tại lệnh tạm giữ tiền vip!" },
        { key: "FREEZE_DATA_CHANGED", value: "Thông tin lệnh tạm giữ đã bị thay đổi, bạn vui lòng báo IT để kiểm tra!" },
        { key: "FREEZE_WALLET_NOT_EXISTING", value: "Không tồn tại ví, bạn vui lòng liên hệ IT để kiểm tra!" },
        { key: "FREEZE_TEMPORARY_DEPOSIT_VIP_EXISTING", value: "Khách hàng này đã kích hoạt tính năng đấu giá vip (đang tồn tại lệnh tạm giữ vip)" },
        { key: "FREEZE_TEMPORARY_DEPOSIT_VIP_YOUR_BALANCE_NOT_ENOUGH", value: "Số tiện của KH không đủ để kích hoạt tính năng đấu giá vip, Số tiền yêu cầu = {TemporaryDepositValue}" },

        { key: "PAYMENT_REFUND_FOR_PAYMENT_EXISTING", value: "Lệnh thanh toán này đã được tạo lệnh hoàn tiền!" },
        { key: "PAYMENT_PROCESSED_NOT_YET_CANT_REFUND", value: "Lệnh thanh toán đang chờ xử lý không thể tạo lệnh hoàn tiền!" },

        { key: "ORDER_GET_SHIPPING_FEE_ORDER_DETAIL_MULTI", value: "Đơn hàng có nhiều sản phẩm không thể xác định được sản phẩm cần lấy thông tin kho và phí ship!" },
        { key: "ORDER_GET_SHIPPING_FEE_JUST_SUPPORT_AUCTION", value: "Tính năng tự động lấy thông tin kho và phí ship chỉ hỗ trợ đơn hàng AUCTION (AUC, DGS)!" },

        { key: "ORDER_GET_TRACKING_NUMBER_ORDER_DETAIL_MULTI", value: "Đơn hàng có nhiều sản phẩm không thể xác định được sản phẩm cần lấy tracking number!" },
        { key: "ORDER_GET_TRACKING_NUMBER_JUST_SUPPORT_AUCTION", value: "Tính năng tự động lấy mã tracking number chỉ hỗ trợ đơn hàng AUCTION (AUC, DGS)!" },
        { key: "ORDER_GET_TRACKING_NUMBER_FAIL_OR_TRACKING_NUMBER_NOT_EXISTING", value: "Không tồn tại mã tracking number hoặc không thành công, bạn vui lòng kiểm tra trực tiếp bên auction!" }
    ];

    constructor(private toastrService: ToastrService) {
    }

    public showError(errorCode: string,
        parameters: any = null): void {
        // TODO: get error message by error code
        let message = "Lỗi không xác định";
        const err = this.errorCodeDefineMessage.filter(obj => 
            Object.values(obj).findIndex(g => g == errorCode) > -1
        );
        
        if (err != null && err.length > 0) {
            message = err[0].value;
        } else if (errorCode != null || errorCode != '') {
            message = errorCode;
        }

        if(parameters) {
            for(var key in parameters) {
                message = message.replace('{' + key + '}', parameters[key]);
            }
        }

        this.toastrService.error(message);
    }

    public showErrorMessage(message: string): void {        
        this.toastrService.error(message);
    }

    public showMessage(message: string): void {
        this.toastrService.success(message);
    }

    public showWarning(message: string) {
        this.toastrService.warning(message);
    }

    public showProcessing(blockUIBlock: NgBlockUI): void {
        //this.blockUI.start('Loading...');
        blockUIBlock.start('Loading...');
    }

    public cancelProcessing(blockUIBlock: NgBlockUI): void {
        // this.blockUI.stop();
        blockUIBlock.stop();
    }
}
