import { content } from './../shared/routes/content.routes';
import { environment as env } from '../../environments/environment';
import { PermissionService } from '../services/permission.service';

export class ConfigSetting {
    public static CMS_API_URL = env.baseUrl.cmsApi;
    public static CDN_URL = env.baseUrl.cdnUrl;

    public static SSO_AUTHORITY = env.sso.authority;
    public static SSO_CLIENTID = env.sso.clientId;
    public static SSO_SCOPE = env.sso.scope;
    public static SSO_SILENT_REFRESH_URL = env.sso.silentRefreshUrl;
    public static SSO_REDIRECT_URL = env.sso.redirectUrl;
    public static SSO_POST_LOGOUT_REDIRECT_URI = env.sso.postLogoutRedirectUri;

    public static LOCAL_STORAGE_AUTHEN_KEY = 'access_token';
    public static LOCAL_REFRESH_KEY = 'refresh_token';

    public static IMAGE_UPLOAD = env.baseUrl.cmsApi + '/File/UploadImage';


    public static CET_JTABLE_ACCOUNTINGACCOUNTS = env.baseUrl.cmsApi + '/Account/GetJtable';


    public static GET_JTABLE_BANK_ACCOUNT = env.baseUrl.cmsApi + '/BankAccount/GetJtable';
    public static ADD_NEW_BANK_ACCOUNT = env.baseUrl.cmsApi + '/BankAccount/AddBankAccount';
    
    






    public static CATEGORY_YAHOO_AUCTION_LIST = env.baseUrl.cmsApi + '/CategoryYahooauctions/GetList';
    public static CATEGORY_YAHOO_AUCTION_LIST_JTABLE = env.baseUrl.cmsApi + '/CategoryYahooauctions/GetJTable';
    public static CATEGORY_YAHOO_AUCTION_ADD = env.baseUrl.cmsApi + '/CategoryYahooauctions/Add';
    public static CATEGORY_YAHOO_AUCTION_UPDATE = env.baseUrl.cmsApi + '/CategoryYahooauctions/Update';
    public static CATEGORY_YAHOO_AUCTION_GET_DETAIL = env.baseUrl.cmsApi + '/CategoryYahooauctions/GetDetail';
    public static CATEGORY_YAHOO_AUCTION_DELETE = env.baseUrl.cmsApi + '/CategoryYahooauctions/Delete';
    public static CATEGORY_YAHOO_AUCTION_UPDATE_SORT = env.baseUrl.cmsApi + '/CategoryYahooauctions/UpdateSort';
    public static CATEGORY_YAHOO_AUCTION_CACHE_ALL = env.baseUrl.cmsApi + '/CategoryYahooauctions/CacheAll';
    public static CATEGORY_YAHOO_AUCTION_AUTO_LOAD_NEW_CATEGORY = env.baseUrl.cmsApi + '/CategoryYahooauctions/AutoLoadCategory';
    public static CATEGORY_YAHOO_AUCTION_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CategoryYahooauctions/GetDetailByLanguage';
    public static CATEGORY_YAHOO_AUCTION_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CategoryYahooauctions/UpdateByLanguage';

    public static CATEGORY_YAHOO_SHOPPING_LIST = env.baseUrl.cmsApi + '/CTYahooShoping/GetList';
    public static CATEGORY_YAHOO_SHOPPING_LIST_JTABLE = env.baseUrl.cmsApi + '/CTYahooShoping/GetJTable';
    public static CATEGORY_YAHOO_SHOPPING_ADD = env.baseUrl.cmsApi + '/CTYahooShoping/Add';
    public static CATEGORY_YAHOO_SHOPPING_UPDATE = env.baseUrl.cmsApi + '/CTYahooShoping/Update';
    public static CATEGORY_YAHOO_SHOPPING_GET_DETAIL = env.baseUrl.cmsApi + '/CTYahooShoping/GetDetail';
    public static CATEGORY_YAHOO_SHOPPING_DELETE = env.baseUrl.cmsApi + '/CTYahooShoping/Delete';
    public static CATEGORY_YAHOO_SHOPPING_UPDATE_SORT = env.baseUrl.cmsApi + '/CTYahooShoping/UpdateSort';
    public static CATEGORY_YAHOO_SHOPPING_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTYahooShoping/GetDetailByLanguage';
    public static CATEGORY_YAHOO_SHOPPING_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTYahooShoping/UpdateByLanguage';
    public static CATEGORY_YAHOO_SHOPPING_CACHE_ALL = env.baseUrl.cmsApi + '/CTYahooShoping/CacheAll';
    public static CATEGORY_YAHOO_SHOPPING_AUTO_LOAD_NEW_CATEGORY = env.baseUrl.cmsApi + '/CTYahooShoping/AutoLoadCategory';

    public static CATEGORY_RAKUTEN_LIST = env.baseUrl.cmsApi + '/CTRakuten/GetList';
    public static CATEGORY_RAKUTEN_LIST_JTABLE = env.baseUrl.cmsApi + '/CTRakuten/GetJTable';
    public static CATEGORY_RAKUTEN_ADD = env.baseUrl.cmsApi + '/CTRakuten/Add';
    public static CATEGORY_RAKUTEN_UPDATE = env.baseUrl.cmsApi + '/CTRakuten/Update';
    public static CATEGORY_RAKUTEN_GET_DETAIL = env.baseUrl.cmsApi + '/CTRakuten/GetDetail';
    public static CATEGORY_RAKUTEN_DELETE = env.baseUrl.cmsApi + '/CTRakuten/Delete';
    public static CATEGORY_RAKUTEN_UPDATE_SORT = env.baseUrl.cmsApi + '/CTRakuten/UpdateSort';
    public static CATEGORY_RAKUTEN_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTRakuten/GetDetailByLanguage';
    public static CATEGORY_RAKUTEN_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTRakuten/UpdateByLanguage';
    public static CATEGORY_RAKUTEN_CACHE_ALL = env.baseUrl.cmsApi + '/CTRakuten/CacheAll';
    public static CATEGORY_RAKUTEN_AUTO_LOAD_NEW_CATEGORY = env.baseUrl.cmsApi + '/CTRakuten/AutoLoadCategory';

    public static CATEGORY_AMAZON_JP_LIST = env.baseUrl.cmsApi + '/CTAmazonJp/GetList';
    public static CATEGORY_AMAZON_JP_LIST_JTABLE = env.baseUrl.cmsApi + '/CTAmazonJp/GetJTable';
    public static CATEGORY_AMAZON_JP_ADD = env.baseUrl.cmsApi + '/CTAmazonJp/Add';
    public static CATEGORY_AMAZON_JP_UPDATE = env.baseUrl.cmsApi + '/CTAmazonJp/Update';
    public static CATEGORY_AMAZON_JP_GET_DETAIL = env.baseUrl.cmsApi + '/CTAmazonJp/GetDetail';
    public static CATEGORY_AMAZON_JP_DELETE = env.baseUrl.cmsApi + '/CTAmazonJp/Delete';
    public static CATEGORY_AMAZON_JP_UPDATE_SORT = env.baseUrl.cmsApi + '/CTAmazonJp/UpdateSort';
    public static CATEGORY_AMAZON_JP_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTAmazonJp/GetDetailByLanguage';
    public static CATEGORY_AMAZON_JP_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTAmazonJp/UpdateByLanguage';

    public static ABOUT_LIST = env.baseUrl.cmsApi + '/About/GetList';
    public static ABOUT_LIST_JTABLE = env.baseUrl.cmsApi + '/About/GetJTable';
    public static ABOUT_ADD = env.baseUrl.cmsApi + '/About/Add';
    public static ABOUT_UPDATE = env.baseUrl.cmsApi + '/About/Update';
    public static ABOUT_GET_DETAIL = env.baseUrl.cmsApi + '/About/GetDetail';
    public static ABOUT_DELETE = env.baseUrl.cmsApi + '/About/Delete';
    public static ABOUT_UPDATE_SORT = env.baseUrl.cmsApi + '/About/UpdateSort';
    public static ABOUT_CACHE_ALL = env.baseUrl.cmsApi + '/About/CacheAll';
    public static ABOUT_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/About/GetDetailByLanguage';
    public static ABOUT_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/About/UpdateByLanguage';

    public static POLICY_LIST = env.baseUrl.cmsApi + '/Policy/GetList';
    public static POLICY_LIST_JTABLE = env.baseUrl.cmsApi + '/Policy/GetJTable';
    public static POLICY_ADD = env.baseUrl.cmsApi + '/Policy/Add';
    public static POLICY_UPDATE = env.baseUrl.cmsApi + '/Policy/Update';
    public static POLICY_GET_DETAIL = env.baseUrl.cmsApi + '/Policy/GetDetail';
    public static POLICY_DELETE = env.baseUrl.cmsApi + '/Policy/Delete';
    public static POLICY_UPDATE_SORT = env.baseUrl.cmsApi + '/Policy/UpdateSort';
    public static POLICY_CACHE_ALL = env.baseUrl.cmsApi + '/Policy/CacheAll';
    public static POLICY_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/Policy/GetDetailByLanguage';
    public static POLICY_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/Policy/UpdateByLanguage';

    public static RECRUITMENT_LIST = env.baseUrl.cmsApi + '/Recruitment/GetList';
    public static RECRUITMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/Recruitment/GetJTable';
    public static RECRUITMENT_ADD = env.baseUrl.cmsApi + '/Recruitment/Add';
    public static RECRUITMENT_UPDATE = env.baseUrl.cmsApi + '/Recruitment/Update';
    public static RECRUITMENT_GET_DETAIL = env.baseUrl.cmsApi + '/Recruitment/GetDetail';
    public static RECRUITMENT_DELETE = env.baseUrl.cmsApi + '/Recruitment/Delete';
    public static RECRUITMENT_CACHE_ALL = env.baseUrl.cmsApi + '/Recruitment/CacheAll';
    public static RECRUITMENT_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/Recruitment/GetDetailByLanguage';
    public static RECRUITMENT_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/Recruitment/UpdateByLanguage';

    public static GUIDELINES_LIST = env.baseUrl.cmsApi + '/Guidelines/GetList';
    public static GUIDELINES_LIST_JTABLE = env.baseUrl.cmsApi + '/Guidelines/GetJTable';
    public static GUIDELINES_ADD = env.baseUrl.cmsApi + '/Guidelines/Add';
    public static GUIDELINES_UPDATE = env.baseUrl.cmsApi + '/Guidelines/Update';
    public static GUIDELINES_GET_DETAIL = env.baseUrl.cmsApi + '/Guidelines/GetDetail';
    public static GUIDELINES_DELETE = env.baseUrl.cmsApi + '/Guidelines/Delete';
    public static GUIDELINES_UPDATE_SORT = env.baseUrl.cmsApi + '/Guidelines/UpdateSort';
    public static GUIDELINES_CACHE_ALL = env.baseUrl.cmsApi + '/Guidelines/CacheAll';
    public static GUIDELINES_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/Guidelines/GetDetailByLanguage';
    public static GUIDELINES_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/Guidelines/UpdateByLanguage';

    public static CATEGORY_NEWS_LIST = env.baseUrl.cmsApi + '/CTNews/GetList';
    public static CATEGORY_NEWS_LIST_JTABLE = env.baseUrl.cmsApi + '/CTNews/GetJTable';
    public static CATEGORY_NEWS_ADD = env.baseUrl.cmsApi + '/CTNews/Add';
    public static CATEGORY_NEWS_UPDATE = env.baseUrl.cmsApi + '/CTNews/Update';
    public static CATEGORY_NEWS_GET_DETAIL = env.baseUrl.cmsApi + '/CTNews/GetDetail';
    public static CATEGORY_NEWS_DELETE = env.baseUrl.cmsApi + '/CTNews/Delete';
    public static CATEGORY_NEWS_UPDATE_SORT = env.baseUrl.cmsApi + '/CTNews/UpdateSort';
    public static CATEGORY_NEWS_CACHE_ALL = env.baseUrl.cmsApi + '/CTNews/CacheAll';
    public static CATEGORY_NEWS_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTNews/GetDetailByLanguage';
    public static CATEGORY_NEWS_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTNews/UpdateByLanguage';

    public static NEWS_LIST = env.baseUrl.cmsApi + '/News/GetList';
    public static NEWS_LIST_JTABLE = env.baseUrl.cmsApi + '/News/GetJTable';
    public static NEWS_ADD = env.baseUrl.cmsApi + '/News/Add';
    public static NEWS_UPDATE = env.baseUrl.cmsApi + '/News/Update';
    public static NEWS_GET_DETAIL = env.baseUrl.cmsApi + '/News/GetDetail';
    public static NEWS_DELETE = env.baseUrl.cmsApi + '/News/Delete';
    public static NEWS_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/News/GetDetailByLanguage';
    public static NEWS_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/News/UpdateByLanguage';
    public static CATEGORY_NEWS_LIST_ALL = env.baseUrl.cmsApi + '/News/GetListAllCategory';

    public static CATEGORY_ICHIBA_PLACE_LIST = env.baseUrl.cmsApi + '/CTIchibaPlace/GetList';
    public static CATEGORY_ICHIBA_PLACE_LIST_JTABLE = env.baseUrl.cmsApi + '/CTIchibaPlace/GetJTable';
    public static CATEGORY_ICHIBA_PLACE_ADD = env.baseUrl.cmsApi + '/CTIchibaPlace/Add';
    public static CATEGORY_ICHIBA_PLACE_UPDATE = env.baseUrl.cmsApi + '/CTIchibaPlace/Update';
    public static CATEGORY_ICHIBA_PLACE_GET_DETAIL = env.baseUrl.cmsApi + '/CTIchibaPlace/GetDetail';
    public static CATEGORY_ICHIBA_PLACE_DELETE = env.baseUrl.cmsApi + '/CTIchibaPlace/Delete';
    public static CATEGORY_ICHIBA_PLACE_UPDATE_SORT = env.baseUrl.cmsApi + '/CTIchibaPlace/UpdateSort';
    public static CATEGORY_ICHIBA_PLACE_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTIchibaPlace/GetDetailByLanguage';
    public static CATEGORY_ICHIBA_PLACE_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/CTIchibaPlace/UpdateByLanguage';

    public static CUSTOMERS_ACCOUNT_LIST = env.baseUrl.cmsApi + '/Account/GetList';
    public static CUSTOMERS_ACCOUNT_LIST_JTABLE = env.baseUrl.cmsApi + '/Account/GetJTable';
    public static CUSTOMERS_ACCOUNT_ADD = env.baseUrl.cmsApi + '/Account/Add';
    public static CUSTOMERS_ACCOUNT_GET_DETAIL = env.baseUrl.cmsApi + '/Account/GetDetail';
    public static CUSTOMERS_ACCOUNT_JP_DELETE = env.baseUrl.cmsApi + '/Account/Delete';
    public static CUSTOMERS_ACCOUNT_UPDATE_SORT = env.baseUrl.cmsApi + '/Account/UpdateSort';

    public static BANKINFO_LIST_JTABLE = env.baseUrl.cmsApi + '/BankInfo/GetJTable';
    public static BANKINFO_ADD = env.baseUrl.cmsApi + '/BankInfo/Add';
    public static BANKINFO_UPDATE = env.baseUrl.cmsApi + '/BankInfo/Update';
    public static BANKINFO_DELETE = env.baseUrl.cmsApi + '/BankInfo/Delete';
    public static BANKINFO_GET_DETAIL = env.baseUrl.cmsApi + '/BankInfo/GetDetail';
    public static BANK_ACTIVE = env.baseUrl.cmsApi + '/BankInfo/OnActive';
    public static BANK_FOR_DEPOSITE = env.baseUrl.cmsApi + '/BankInfo/ForDiposite';
    public static BANK_WITHDRAWAL = env.baseUrl.cmsApi + '/BankInfo/ForWITHDRAWAL';
    public static UPDATE_BANK_TYPE = env.baseUrl.cmsApi + '/BankInfo/UpdateBankType';
    
    
    

    public static BANK_TRANS_HISTORY_LIST_JTABLE = env.baseUrl.cmsApi + '/BankTransactionHistory/GetJTable';
    public static BANK_INFO_LIST = env.baseUrl.cmsApi + '/BankTransactionHistory/GetAllBankInfo';
    public static BANK_TRANS_GET_DETAIL = env.baseUrl.cmsApi + '/BankTransactionHistory/GetDetail';
    public static BANK_TRANS_UPDATE = env.baseUrl.cmsApi + '/BankTransactionHistory/Update';

    public static WAREHOUSE_LIST_JTABLE = env.baseUrl.cmsApi + '/Warehouse/GetJTable';
    public static WAREHOUSE_ADD = env.baseUrl.cmsApi + '/Warehouse/Add';
    public static WAREHOUSE_UPDATE = env.baseUrl.cmsApi + '/Warehouse/Update';
    public static WAREHOUSE_DELETE = env.baseUrl.cmsApi + '/Warehouse/Delete';
    public static WAREHOUSE_GET_DETAIL = env.baseUrl.cmsApi + '/Warehouse/GetDetail';
    public static WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/Warehouse/ChangeStatus';
    public static WAREHOUSE_LIST = env.baseUrl.cmsApi + '/Warehouse/GetList';
    public static WAREHOUSE_SORT = env.baseUrl.cmsApi + '/Warehouse/UpdateSort';
    

    public static LEVEL_LIST_JTABLE = env.baseUrl.cmsApi + '/Level/GetJTable';
    public static LEVEL_UPDATE = env.baseUrl.cmsApi + '/Level/Update';
    public static LEVEL_GET_DETAIL = env.baseUrl.cmsApi + '/Level/GetDetail';

    public static WAREHOUSE_EMP_LIST_JTABLE = env.baseUrl.cmsApi + '/WarehouseEmp/GetJTable';
    public static GET_WAREHOUSE_LIST = env.baseUrl.cmsApi + '/WarehouseEmp/GetWarehouseList';
    public static GET_LIST_EMP = env.baseUrl.cmsApi + '/WarehouseEmp/GetListEmployee';
    public static ADD_WH = env.baseUrl.cmsApi + '/WarehouseEmp/Add';
    public static DELETE_WH = env.baseUrl.cmsApi + '/WarehouseEmp/Delete';

    public static PRODUCT_YAHOO_AUCTIONS_LIST_JTABLE = env.baseUrl.cmsApi + '/PYahooAuctions/GetJTable';
    public static PRODUCT_YAHOO_AUCTIONS_LIST = env.baseUrl.cmsApi + '/PTopYahooAuctions/GetListYahooAuctions';
    public static PRODUCT_TOP_YAHOO_AUCTIONS_LIST = env.baseUrl.cmsApi + '/PTopYahooAuctions/GetListTopYahooAuctions';
    public static PRODUCT_TOP_YAHOO_AUCTIONS_ADD = env.baseUrl.cmsApi + '/PTopYahooAuctions/Add';
    public static PRODUCT_TOP_YAHOO_AUCTIONS_DELETE = env.baseUrl.cmsApi + '/PTopYahooAuctions/Delete';
    public static PRODUCT_TOP_YAHOO_AUCTIONS_UPDATE_SORT = env.baseUrl.cmsApi + '/PTopYahooAuctions/UpdateSort';
    public static PRODUCT_TOP_YAHOO_AUCTIONS_CACHE_ALL = env.baseUrl.cmsApi + '/PTopYahooAuctions/CacheAll';

    public static ADV_BANNER_LIST = env.baseUrl.cmsApi + '/AdvBanner/GetList';
    public static ADV_BANNER_LIST_JTABLE = env.baseUrl.cmsApi + '/AdvBanner/GetJTable';
    public static ADV_BANNER_ADD = env.baseUrl.cmsApi + '/AdvBanner/Add';
    public static ADV_BANNER_UPDATE = env.baseUrl.cmsApi + '/AdvBanner/Update';
    public static ADV_BANNER_GET_DETAIL = env.baseUrl.cmsApi + '/AdvBanner/GetDetail';
    public static ADV_BANNER_DELETE = env.baseUrl.cmsApi + '/AdvBanner/Delete';
    public static ADV_BANNER_UPDATE_SORT = env.baseUrl.cmsApi + '/AdvBanner/UpdateSort';
    public static ADV_BANNER_CACHE_ALL = env.baseUrl.cmsApi + '/AdvBanner/CacheAll';
    public static ADV_BANNER_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/AdvBanner/GetDetailByLanguage';
    public static ADV_BANNER_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/AdvBanner/UpdateByLanguage';

    public static ADV_GROUP_LIST = env.baseUrl.cmsApi + '/AdvGroup/GetList';
    public static ADV_GROUP_LIST_JTABLE = env.baseUrl.cmsApi + '/AdvGroup/GetJTable';
    public static ADV_GROUP_ADD = env.baseUrl.cmsApi + '/AdvGroup/Add';
    public static ADV_GROUP_UPDATE = env.baseUrl.cmsApi + '/AdvGroup/Update';
    public static ADV_GROUP_GET_DETAIL = env.baseUrl.cmsApi + '/AdvGroup/GetDetail';
    public static ADV_GROUP_DELETE = env.baseUrl.cmsApi + '/AdvGroup/Delete';
    public static ADV_GROUP_UPDATE_SORT = env.baseUrl.cmsApi + '/AdvGroup/UpdateSort';
    public static ADV_GROUP_LIST_ALL = env.baseUrl.cmsApi + '/AdvPosition/GetAllListGroup';

    public static ADV_POSITION_LIST = env.baseUrl.cmsApi + '/AdvPosition/GetList';
    public static ADV_POSITION_LIST_JTABLE = env.baseUrl.cmsApi + '/AdvPosition/GetJTable';
    public static ADV_POSITION_ADD = env.baseUrl.cmsApi + '/AdvPosition/Add';
    public static ADV_POSITION_UPDATE = env.baseUrl.cmsApi + '/AdvPosition/Update';
    public static ADV_POSITION_GET_DETAIL = env.baseUrl.cmsApi + '/AdvPosition/GetDetail';
    public static ADV_POSITION_DELETE = env.baseUrl.cmsApi + '/AdvPosition/Delete';
    public static ADV_POSITION_LIST_ALL = env.baseUrl.cmsApi + '/AdvBanner/GetAllListPosition';

    public static WEB_LINK_GROUP_LIST = env.baseUrl.cmsApi + '/WeblinkGroup/GetList';
    public static WEB_LINK_GROUP_LIST_JTABLE = env.baseUrl.cmsApi + '/WeblinkGroup/GetJTable';
    public static WEB_LINK_GROUP_ADD = env.baseUrl.cmsApi + '/WeblinkGroup/Add';
    public static WEB_LINK_GROUP_UPDATE = env.baseUrl.cmsApi + '/WeblinkGroup/Update';
    public static WEB_LINK_GROUP_GET_DETAIL = env.baseUrl.cmsApi + '/WeblinkGroup/GetDetail';
    public static WEB_LINK_GROUP_DELETE = env.baseUrl.cmsApi + '/WeblinkGroup/Delete';
    public static WEB_LINK_GROUP_UPDATE_SORT = env.baseUrl.cmsApi + '/WeblinkGroup/UpdateSort';
    public static WEB_LINK_GROUP_CACHE_ALL = env.baseUrl.cmsApi + '/WeblinkGroup/CacheAll';
    public static WEB_LINK_GROUP_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/WeblinkGroup/GetDetailByLanguage';
    public static WEB_LINK_GROUP_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/WeblinkGroup/UpdateByLanguage';

    public static WEB_LINK_LIST = env.baseUrl.cmsApi + '/Weblink/GetList';
    public static WEB_LINK_LIST_JTABLE = env.baseUrl.cmsApi + '/Weblink/GetJTable';
    public static WEB_LINK_ADD = env.baseUrl.cmsApi + '/Weblink/Add';
    public static WEB_LINK_UPDATE = env.baseUrl.cmsApi + '/Weblink/Update';
    public static WEB_LINK_GET_DETAIL = env.baseUrl.cmsApi + '/Weblink/GetDetail';
    public static WEB_LINK_DELETE = env.baseUrl.cmsApi + '/Weblink/Delete';
    public static WEB_LINK_UPDATE_SORT = env.baseUrl.cmsApi + '/Weblink/UpdateSort';
    public static WEB_LINK_CACHE_ALL = env.baseUrl.cmsApi + '/Weblink/CacheAll';
    public static WEB_LINK_GET_DETAIL_BY_LANGUAGE = env.baseUrl.cmsApi + '/Weblink/GetDetailByLanguage';
    public static WEB_LINK_UPDATE_BY_LANGUAGE = env.baseUrl.cmsApi + '/Weblink/UpdateByLanguage';

    public static CUSTOMER_LIST = env.baseUrl.cmsApi + '/Customer/GetList';
    public static CUSTOMER_LIST_JTABLE = env.baseUrl.cmsApi + '/Customer/GetJTable';
    public static CUSTOMER_LIST_TRANSPORT_WAIT_FOR_ACTIVATION_JTABLE = env.baseUrl.cmsApi + '/Customer/ListTransportWaitForActivation';
    public static CUSTOMER_ADD = env.baseUrl.cmsApi + '/Customer/Add';
    public static CUSTOMER_UPDATE = env.baseUrl.cmsApi + '/Customer/Update';
    public static CUSTOMER_GET_DETAIL = env.baseUrl.cmsApi + '/Customer/GetDetail';
    public static CUSTOMER_DELETE = env.baseUrl.cmsApi + '/Customer/Delete';
    public static CUSTOMER_LEVEL_LIST_ALL = env.baseUrl.cmsApi + '/Customer/GetListCustomerLevel';
    public static CUSTOMER_LIST_ALL = env.baseUrl.cmsApi + '/Customer/GetMapSuccessfulBid';
    public static CUSTOMER_ACTIVE = env.baseUrl.cmsApi + '/Customer/ChangeAllowBid';
    public static CUSTOMER_ACTIVE_TRANCODE = env.baseUrl.cmsApi + '/Customer/ActiveTranCode';
    public static CUSTOMER_CANCEL_TRANCODE = env.baseUrl.cmsApi + '/Customer/UnActiveTranCode';
    public static LIST_CUSTOMER = env.baseUrl.cmsApi + '/Customer/GetListAll';
    public static MEMBERSHIP_CUSTOMER_ACTIVE = env.baseUrl.cmsApi + '/Customer/MembershipLevelChangeAllowBid';
    public static MEMBERSHIP_LEVEL_DETAIL = env.baseUrl.cmsApi + '/Customer/GetDetailLevel';
    public static CUSTOMER_TEMPORARY_DEPOSIT_VIP = env.baseUrl.cmsApi + '/Customer/TemporaryDepositVIP';
    public static CUSTOMER_TEMPORARY_DEPOSIT_VIP_CANCEL = env.baseUrl.cmsApi + '/Customer/TemporaryDepositVIPCancel';

    public static LOAD_MEMBERSHIP = env.baseUrl.cmsApi + '/Customer/GetCustomerProfile';
    public static CUSTOMER_WALLET = env.baseUrl.cmsApi + '/CustomerWallet/GetDataTable';
    public static LOAD_MEMBERSHIP_LEVEL_LIST = env.baseUrl.cmsApi + '/Customer/GetLevel';
    public static CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/Customer/GetCustomerByAccountId';
    public static CUSTOMER_GET_WALLETS = env.baseUrl.cmsApi + '/Customer/GetWallets';
    public static CUSTOMER_ADD_RECHGE = env.baseUrl.cmsApi + '/Customer/AddRechange';
    public static CUSTOMER_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/Customer/CreateDeposite';
    public static GET_EXPORT_CUSTOMER = env.baseUrl.cmsApi + '/Customer/Export';
    public static CUSTOMER_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/Customer/GetSaler';
    public static CUSTOMER_GROUP = env.baseUrl.cmsApi + '/CustomerGroup/GetList';
    
    
    
    
    
    




    public static DEBT_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTable';
    public static DEBT_AUCPRE_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetTableAucPre';
    public static DEBT_ORDER_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTableWaitingDepositeAuc';
    public static DEBT_ORDER_LIST_JTABLE_BUY_FOR_YOU = env.baseUrl.cmsApi + '/Debt/GetJTableWaitingDepositeBuyForYou';
    public static DEBT_ORDER_LIST_JTABLE_ME = env.baseUrl.cmsApi + '/Debt/GetJTableWaitingDepositeMer';
    public static DEBT_WAITPURCHASE_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTableDebtWaitPurchase';
    public static DEBT_PURCHASED_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTablePurchased';
    public static DEBT_WAITPAYMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTableWaitPayment';
    public static DEBT_PAID_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTablePaid';
    public static DEBT_DELIVERED_LIST_JTABLE = env.baseUrl.cmsApi + '/Debt/GetJTableDeliverd';
    public static DEBT_GET_DEPOSITE = env.baseUrl.cmsApi + '/Debt/GetDeposite';
    public static DEBT_GET_DEPOSITE_RE = env.baseUrl.cmsApi + '/Debt/GetDepositeRe';
    public static DEBT_GET_Withdrawal = env.baseUrl.cmsApi + '/Debt/GetWithDrawal';
    public static DEBT_GET_ORDER = env.baseUrl.cmsApi + '/Debt/GetOrderDetailAccountId';
    public static DEBT_GET_CUSTOMER_WALLET = env.baseUrl.cmsApi + '/Debt/GetCustomerWallet';
    public static DEBT_GET_CUSTOMER_INFOMATION = env.baseUrl.cmsApi + '/Debt/GetInfomation';
    public static DEBT_GET_PAYMENT = env.baseUrl.cmsApi + '/Debt/GetPayment';
    public static DEBT_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/Debt/GetSaler';
    public static GET_EXPORT_DEBT = env.baseUrl.cmsApi + '/Debt/ExportAucPre';
    public static GET_EXPORT_WAITDEPOSITE = env.baseUrl.cmsApi + '/Debt/ExportWaitDeposite';
    public static GET_EXPORT_WAITPURCHASE = env.baseUrl.cmsApi + '/Debt/ExportWaitPurchase';
    public static GET_EXPORT_PURCHASED = env.baseUrl.cmsApi + '/Debt/ExportPurchased';
    public static GET_EXPORT_WAITPAYMENT = env.baseUrl.cmsApi + '/Debt/ExportWaitPayment';
    public static GET_EXPORT_PAID = env.baseUrl.cmsApi + '/Debt/ExportPaid';
    public static GET_EXPORT_DELIVERED = env.baseUrl.cmsApi + '/Debt/ExportDeliverd';
    public static GET_EXPORT_DEBT_DEPOSITE = env.baseUrl.cmsApi + '/Debt/ExportDeposite';
    public static GET_EXPORT_DEBT_WithDrawal = env.baseUrl.cmsApi + '/Debt/ExportWithDrawal';
    public static GET_EXPORT_DEBT_PAYMENT = env.baseUrl.cmsApi + '/Debt/ExportPayment';
    public static GET_EXPORT_DEBT_REFUND_TRANSACTION = env.baseUrl.cmsApi + '/Debt/ExportRefundTransaction';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    public static EMPLOYESS_LIST_ALL = env.baseUrl.cmsApi + '/Customer/GetListEmployess';
    public static GET_EMP_DETAIL = env.baseUrl.cmsApi + '/Customer/GetEmployeeDetail';
    public static UPDATE_CUSTOMER_BY_CAREBY = env.baseUrl.cmsApi + '/Employess/UpdateCareby';
    
    

    public static EMPSUPPORT_LIST_EMPPLOYEES = env.baseUrl.cmsApi + '/EmpSupport/GetListAllEmp';
    public static EMPSUPPORT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/EmpSupport/GetListAll';
    public static EMPSUPPORT_LIST_CUSTOMER_BY_CAREBY = env.baseUrl.cmsApi + '/EmpSupport/GetCustomerByCareBy';
    public static EMPSUPPORT_LIST_ALL_CUSTOMER = env.baseUrl.cmsApi + '/EmpSupport/GetListAllCustomer';
    public static GET_LIST_CUSTOMER_WITH_CAREBY = env.baseUrl.cmsApi + '/EmpSupport/GetListCustomerwithCareBy';
    public static GET_LIST_CUSTOMER_WITHOUT_CAREBY = env.baseUrl.cmsApi + '/EmpSupport/GetListCustomerWithoutCareBy';
    public static EMPS_UPDATE_CUSTOMER_BY_CAREBY = env.baseUrl.cmsApi + '/EmpSupport/UpdateCareby';



    public static CUSTOMER_ADDRESS_LIST = env.baseUrl.cmsApi + '/CustomerAddress/GetList';
    public static CUSTOMER_ADDRESS_LIST_JTABLE = env.baseUrl.cmsApi + '/CustomerAddress/GetJTable';
    public static CUSTOMER_ADDRESS_ADD = env.baseUrl.cmsApi + '/CustomerAddress/Add';
    public static CUSTOMER_ADDRESS_UPDATE = env.baseUrl.cmsApi + '/CustomerAddress/Update';
    public static CUSTOMER_ADDRESS_GET_DETAIL = env.baseUrl.cmsApi + '/CustomerAddress/GetDetail';
    public static CUSTOMER_ADDRESS_DELETE = env.baseUrl.cmsApi + '/CustomerAddress/Delete';
    public static CUSTOMER_ADDRESS_LIST_PROVINCE = env.baseUrl.cmsApi + '/CustomerAddress/GetLocation';
    public static CUSTOMER_ADDRESS_LIST_DISTINS = env.baseUrl.cmsApi + '/CustomerAddress/GetListDistins';
    public static CUSTOMER_ADDRESS_LIST_WARD = env.baseUrl.cmsApi + '/CustomerAddress/GetListWard';
    public static CUSTOMER_ADDRESS_LIST_PROVINCE_DETAIL = env.baseUrl.cmsApi + '/CustomerAddress/Get';
    
    
    
    



    public static CUSTOMER_BANKIGINFO = env.baseUrl.cmsApi + '/CustomerBankingInfo/GetJTable';


    public static CUSTOMER_LEVEL_LIST = env.baseUrl.cmsApi + '/CustomerLevel/GetList';
    public static CUSTOMER_LEVEL_LIST_JTABLE = env.baseUrl.cmsApi + '/CustomerLevel/GetJTable';
    public static CUSTOMER_LEVEL_ADD = env.baseUrl.cmsApi + '/CustomerLevel/Add';
    public static CUSTOMER_LEVEL_UPDATE = env.baseUrl.cmsApi + '/CustomerLevel/Update';
    public static CUSTOMER_LEVEL_GET_DETAIL = env.baseUrl.cmsApi + '/CustomerLevel/GetDetail';
    public static CUSTOMER_LEVEL_DELETE = env.baseUrl.cmsApi + '/CustomerLevel/Delete';
    public static CUSTOMER_LEVEL_UPDATE_SORT = env.baseUrl.cmsApi + '/CustomerLevel/UpdateSort';

    public static EXCHANGERATES_LIST = env.baseUrl.cmsApi + '/Exchangerates/GetList';
    public static EXCHANGERATES_LIST_JTABLE = env.baseUrl.cmsApi + '/Exchangerates/GetJTable';
    public static EXCHANGERATES_ADD = env.baseUrl.cmsApi + '/Exchangerates/Add';
    public static EXCHANGERATES_UPDATE = env.baseUrl.cmsApi + '/Exchangerates/Update';
    public static EXCHANGERATES_GET_DETAIL = env.baseUrl.cmsApi + '/Exchangerates/GetDetail';
    public static EXCHANGERATES_DELETE = env.baseUrl.cmsApi + '/Exchangerates/Delete';
    public static EXCHANGERATES_CACHE_ALL = env.baseUrl.cmsApi + '/Exchangerates/CacheAll';
    public static EXCHANGERATES_UPDATE_NEW_EXCHANGERATES = env.baseUrl.cmsApi + '/Exchangerates/UpdateNewExchangerates';

    public static METACONFIG_LIST = env.baseUrl.cmsApi + '/MetaConfig/GetList';
    public static METACONFIG_LIST_JTABLE = env.baseUrl.cmsApi + '/MetaConfig/GetJTable';
    public static METACONFIG_ADD = env.baseUrl.cmsApi + '/MetaConfig/Add';
    public static METACONFIG_UPDATE = env.baseUrl.cmsApi + '/MetaConfig/Update';
    public static METACONFIG_GET_DETAIL = env.baseUrl.cmsApi + '/MetaConfig/GetDetail';
    public static METACONFIG_DELETE = env.baseUrl.cmsApi + '/MetaConfig/Delete';
    public static METACONFIG_CACHE_ALL = env.baseUrl.cmsApi + '/MetaConfig/CacheAll';
    public static METACONFIG_UPDATE_NEW_METACONFIG = env.baseUrl.cmsApi + '/MetaConfig/UpdateNewMetaConfig';

    public static DEPOSITS_LIST = env.baseUrl.cmsApi + '/Deposits/GetList';
    public static DEPOSITS_LIST_JTABLE = env.baseUrl.cmsApi + '/Deposits/GetJTable';
    public static DEPOSITS_LIST_CUSTOMER = env.baseUrl.cmsApi + '/Deposits/GetListCustomer';
    public static DEPOSITS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/Deposits/GetListTopCustomer';
    public static DEPOSITS_LIST_WALLET = env.baseUrl.cmsApi + '/Deposits/GetListWallet';
    public static DEPOSITS_GET_DETAIL = env.baseUrl.cmsApi + '/Deposits/GetById';
    public static DEPOSITS_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/Deposits/GetStateById';
    public static DEPOSITS_ADD = env.baseUrl.cmsApi + '/Deposits/Add';
    public static DEPOSITS_CONFIRM_STATUS = env.baseUrl.cmsApi + '/Deposits/UpdateConfirmStatus';
    public static CANCEL_PAYEMENT = env.baseUrl.cmsApi + '/Deposits/CancelPayment';
    public static DEPOSITS_APPROVELEVEL1 = env.baseUrl.cmsApi + '/Deposits/ApproveLevel1';
    public static DEPOSITS_APPROVELEVEL2 = env.baseUrl.cmsApi + '/Deposits/ApproveLevel2';
    public static DEPOSITS_APPROVELEVEL3 = env.baseUrl.cmsApi + '/Deposits/ApproveLevel3';
    public static DEPOSITS_REJECT = env.baseUrl.cmsApi + '/Deposits/Reject';
    public static DEPOSITS_CANCEL = env.baseUrl.cmsApi + '/Deposits/Cancel';
    public static DEPOSITS_GET_MESSAGES = env.baseUrl.cmsApi + '/Deposits/GetMessages';
    public static DEPOSITS_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/Deposits/GetCustomerInfo';
    public static DEPOSITS_GET_WALLET_INFO = env.baseUrl.cmsApi + '/Deposits/GetWalletInfo';
    public static DEPOSITS_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/Deposits/GetMemberShipInfo';
    public static DEPOSITS_GET_EMP_INFO = env.baseUrl.cmsApi + '/Deposits/GetEmpInfo';
    public static UPDATE_FTCODE = env.baseUrl.cmsApi + '/Deposits/UpdateFTcode';
    public static DEPOSITE_EXP_EXCEL = env.baseUrl.cmsApi + '/Deposits/Export';
    public static DEPOSITS_GET_BANKINFO_BY_BANKNUMBER = env.baseUrl.cmsApi + '/Deposits/GetBankInfoByBankNumber';
    public static DEPOSITS_GET_LIST_BANKINFO = env.baseUrl.cmsApi + '/Deposits/GetListBankInfoByBankNumber';
    
    



    public static REFUND_TRANSACTION_LIST = env.baseUrl.cmsApi + '/RefundTransaction/GetList';
    public static REFUND_TRANSACTION_LIST_JTABLE = env.baseUrl.cmsApi + '/RefundTransaction/GetJTable';
    public static REFUND_TRANSACTION_LIST_CUSTOMER = env.baseUrl.cmsApi + '/RefundTransaction/GetListCustomer';
    public static REFUND_TRANSACTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/RefundTransaction/GetListTopCustomer';
    public static REFUND_TRANSACTION_LIST_WALLET = env.baseUrl.cmsApi + '/RefundTransaction/GetListWallet';
    public static REFUND_TRANSACTION_GET_DETAIL = env.baseUrl.cmsApi + '/RefundTransaction/GetById';
    public static REFUND_TRANSACTION_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/RefundTransaction/GetStateById';
    public static REFUND_TRANSACTION_ADD = env.baseUrl.cmsApi + '/RefundTransaction/Add';
    public static REFUND_TRANSACTION_CONFIRM_STATUS = env.baseUrl.cmsApi + '/RefundTransaction/UpdateConfirmStatus';
    public static REFUND_TRANSACTION_CANCEL_PAYEMENT = env.baseUrl.cmsApi + '/RefundTransaction/CancelPayment';
    public static REFUND_TRANSACTION_APPROVELEVEL1 = env.baseUrl.cmsApi + '/RefundTransaction/ApproveLevel1';
    public static REFUND_TRANSACTION_APPROVELEVEL2 = env.baseUrl.cmsApi + '/RefundTransaction/ApproveLevel2';
    public static REFUND_TRANSACTION_APPROVELEVEL3 = env.baseUrl.cmsApi + '/RefundTransaction/ApproveLevel3';
    public static REFUND_TRANSACTION_REJECT = env.baseUrl.cmsApi + '/RefundTransaction/Reject';
    public static REFUND_TRANSACTION_CANCEL = env.baseUrl.cmsApi + '/RefundTransaction/Cancel';
    public static REFUND_TRANSACTION_GET_MESSAGES = env.baseUrl.cmsApi + '/RefundTransaction/GetMessages';
    public static REFUND_TRANSACTION_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/RefundTransaction/GetCustomerInfo';
    public static REFUND_TRANSACTION_GET_WALLET_INFO = env.baseUrl.cmsApi + '/RefundTransaction/GetWalletInfo';
    public static REFUND_TRANSACTION_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/RefundTransaction/GetMemberShipInfo';
    public static REFUND_TRANSACTION_GET_EMP_INFO = env.baseUrl.cmsApi + '/RefundTransaction/GetEmpInfo';
    public static REFUND_TRANSACTION_UPDATE_FTCODE = env.baseUrl.cmsApi + '/RefundTransaction/UpdateFTcode';
    public static REFUND_TRANSACTION_EXP_EXCEL = env.baseUrl.cmsApi + '/RefundTransaction/Export';





    public static WAITING_DEPOSITS_LIST = env.baseUrl.cmsApi + '/WaitingDeposite/GetList';
    public static WAITING_DEPOSITS_LIST_JTABLE = env.baseUrl.cmsApi + '/WaitingDeposite/GetJTable';
    public static WAITING_DEPOSITS_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WaitingDeposite/GetListCustomer';
    public static WAITING_DEPOSITS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/WaitingDeposite/GetListTopCustomer';
    public static WAITING_DEPOSITS_LIST_WALLET = env.baseUrl.cmsApi + '/WaitingDeposite/GetListWallet';
    public static WAITING_DEPOSITS_GET_DETAIL = env.baseUrl.cmsApi + '/WaitingDeposite/GetById';
    public static WAITING_DEPOSITS_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/WaitingDeposite/GetStateById';
    public static WAITING_DEPOSITS_ADD = env.baseUrl.cmsApi + '/WaitingDeposite/Add';
    public static WAITING_DEPOSITS_CONFIRM_STATUS = env.baseUrl.cmsApi + '/WaitingDeposite/UpdateConfirmStatus';
    public static WAITING_CANCEL_PAYEMENT = env.baseUrl.cmsApi + '/WaitingDeposite/CancelPayment';
    public static WAITING_DEPOSITS_APPROVELEVEL1 = env.baseUrl.cmsApi + '/WaitingDeposite/ApproveLevel1';
    public static WAITING_DEPOSITS_APPROVELEVEL2 = env.baseUrl.cmsApi + '/WaitingDeposite/ApproveLevel2';
    public static WAITING_DEPOSITS_APPROVELEVEL3 = env.baseUrl.cmsApi + '/WaitingDeposite/ApproveLevel3';
    public static WAITING_DEPOSITS_REJECT = env.baseUrl.cmsApi + '/WaitingDeposite/Reject';
    public static WAITING_DEPOSITS_CANCEL = env.baseUrl.cmsApi + '/WaitingDeposite/Cancel';
    public static WAITING_DEPOSITS_GET_MESSAGES = env.baseUrl.cmsApi + '/WaitingDeposite/GetMessages';
    public static WAITING_DEPOSITS_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/WaitingDeposite/GetCustomerInfo';
    public static WAITING_DEPOSITS_GET_WALLET_INFO = env.baseUrl.cmsApi + '/WaitingDeposite/GetWalletInfo';
    public static WAITING_DEPOSITS_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/WaitingDeposite/GetMemberShipInfo';
    public static WAITING_DEPOSITS_GET_EMP_INFO = env.baseUrl.cmsApi + '/WaitingDeposite/GetEmpInfo';
    public static WAITING_UPDATE_FTCODE = env.baseUrl.cmsApi + '/WaitingDeposite/UpdateFTcode';
    public static WAITING_DEPOSITE_EXP_EXCEL = env.baseUrl.cmsApi + '/WaitingDeposite/Export';



    public static PROCESS_DEPOSITS_LIST = env.baseUrl.cmsApi + '/ProcessDeposite/GetList';
    public static PROCESS_DEPOSITS_LIST_JTABLE = env.baseUrl.cmsApi + '/ProcessDeposite/GetJTable';
    public static PROCESS_DEPOSITS_LIST_CUSTOMER = env.baseUrl.cmsApi + '/ProcessDeposite/GetListCustomer';
    public static PROCESS_DEPOSITS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/ProcessDeposite/GetListTopCustomer';
    public static PROCESS_DEPOSITS_LIST_WALLET = env.baseUrl.cmsApi + '/ProcessDeposite/GetListWallet';
    public static PROCESS_DEPOSITS_GET_DETAIL = env.baseUrl.cmsApi + '/ProcessDeposite/GetById';
    public static PROCESS_DEPOSITS_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/ProcessDeposite/GetStateById';
    public static PROCESS_DEPOSITS_ADD = env.baseUrl.cmsApi + '/ProcessDeposite/Add';
    public static PROCESS_DEPOSITS_CONFIRM_STATUS = env.baseUrl.cmsApi + '/ProcessDeposite/UpdateConfirmStatus';
    public static PROCESS_CANCEL_PAYEMENT = env.baseUrl.cmsApi + '/ProcessDeposite/CancelPayment';
    public static PROCESS_DEPOSITS_APPROVELEVEL1 = env.baseUrl.cmsApi + '/ProcessDeposite/ApproveLevel1';
    public static PROCESS_DEPOSITS_APPROVELEVEL2 = env.baseUrl.cmsApi + '/ProcessDeposite/ApproveLevel2';
    public static PROCESS_DEPOSITS_APPROVELEVEL3 = env.baseUrl.cmsApi + '/ProcessDeposite/ApproveLevel3';
    public static PROCESS_DEPOSITS_REJECT = env.baseUrl.cmsApi + '/ProcessDeposite/Reject';
    public static PROCESS_DEPOSITS_CANCEL = env.baseUrl.cmsApi + '/ProcessDeposite/Cancel';
    public static PROCESS_DEPOSITS_GET_MESSAGES = env.baseUrl.cmsApi + '/ProcessDeposite/GetMessages';
    public static PROCESS_DEPOSITS_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/ProcessDeposite/GetCustomerInfo';
    public static PROCESS_DEPOSITS_GET_WALLET_INFO = env.baseUrl.cmsApi + '/ProcessDeposite/GetWalletInfo';
    public static PROCESS_DEPOSITS_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/ProcessDeposite/GetMemberShipInfo';
    public static PROCESS_DEPOSITS_GET_EMP_INFO = env.baseUrl.cmsApi + '/ProcessDeposite/GetEmpInfo';
    public static PROCESS_UPDATE_FTCODE = env.baseUrl.cmsApi + '/ProcessDeposite/UpdateFTcode';
    public static PROCESS_DEPOSITE_EXP_EXCEL = env.baseUrl.cmsApi + '/ProcessDeposite/Export';
    
    




    public static FREEZE_LIST = env.baseUrl.cmsApi + '/Freeze/GetList';
    public static FREEZE_LIST_JTABLE = env.baseUrl.cmsApi + '/Freeze/GetJTable';
    public static FREEZE_LIST_CUSTOMER = env.baseUrl.cmsApi + '/Freeze/GetListCustomer';
    public static FREEZE_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/Freeze/GetCustomerInfo';
    public static FREEZE_GET_WALLET_INFO = env.baseUrl.cmsApi + '/Freeze/GetWalletInfo';
    public static FREEZE_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/Freeze/GetMemberShipInfo';
    public static FREEZE_GET_EMP_INFO = env.baseUrl.cmsApi + '/Freeze/GetEmpInfo';
    public static FREEZE_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/Freeze/GetListTopCustomer';
    public static FREEZE_GET_WALLET = env.baseUrl.cmsApi + '/Freeze/GetWallets';
    public static ADD_FREEZE = env.baseUrl.cmsApi + '/Freeze/AddFreeZe';
    public static FREEZE_UPDATE_STATUS = env.baseUrl.cmsApi + '/Freeze/UpdateStatus';





    public static WITHDRAWAL_LIST = env.baseUrl.cmsApi + '/Withdrawal/GetList';
    public static WITHDRAWAL_LIST_JTABLE = env.baseUrl.cmsApi + '/Withdrawal/GetJTable';
    public static WITHDRAWAL_LIST_CUSTOMER = env.baseUrl.cmsApi + '/Withdrawal/GetListCustomer';
    public static WITHDRAWAL_GET_DETAIL = env.baseUrl.cmsApi + '/Withdrawal/GetById';
    public static WITHDRAWAL_CONFIRM_STATUS = env.baseUrl.cmsApi + '/Withdrawal/UpdateConfirmStatus';
    public static WITHDRAWAL_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/Withdrawal/GetListTopCustomer';
    public static WITHDRAWAL_LIST_WALLET = env.baseUrl.cmsApi + '/Withdrawal/GetListWallet';
    public static WITHDRAWAL_ADD = env.baseUrl.cmsApi + '/Withdrawal/Add';
    public static WITHDRAWAL_APPROVELEVEL1 = env.baseUrl.cmsApi + '/Withdrawal/ApproveLevel1';
    public static WITHDRAWAL_APPROVELEVEL2 = env.baseUrl.cmsApi + '/Withdrawal/ApproveLevel2';
    public static WITHDRAWAL_APPROVELEVEL3 = env.baseUrl.cmsApi + '/Withdrawal/ApproveLevel3';
    public static WITHDRAWAL_REJECT = env.baseUrl.cmsApi + '/Withdrawal/Reject';
    public static WITHDRAWAL_GET_MESSAGES = env.baseUrl.cmsApi + '/Withdrawal/GetMessages';
    public static WITHDRAWAL_TRANSFERRED = env.baseUrl.cmsApi + '/Withdrawal/Transferred';
    public static WITHDRAWAL_CANCEL = env.baseUrl.cmsApi + '/Withdrawal/Cancel';
    public static WITHDRAWAL_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/Withdrawal/GetStateById';
    public static WITHDRAWAL_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/Withdrawal/GetCustomerInfo';
    public static WITHDRAWAL_GET_WALLET_INFO = env.baseUrl.cmsApi + '/Withdrawal/GetWalletInfo';
    public static WITHDRAWAL_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/Withdrawal/GetMemberShipInfo';
    public static WITHDRAWAL_GET_EMP_INFO = env.baseUrl.cmsApi + '/Withdrawal/GetEmpInfo';









    public static WALLETTRANS_LIST = env.baseUrl.cmsApi + '/WalletTrans/GetList';
    public static WALLETTRANS_LIST_JTABLE = env.baseUrl.cmsApi + '/WalletTrans/GetJTable';
    public static WALLETTRANS_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WalletTrans/GetListCustomer';
    public static WALLETTRANS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/WalletTrans/GetListTopCustomer';
    

    public static PAYMENT_LIST = env.baseUrl.cmsApi + '/Payment/GetList';
    public static PAYMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/Payment/GetJTable';
    public static PAYMENT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/Payment/GetListCustomer';
    public static PAYMENT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/Payment/GetListTopCustomer';
    public static PAYMENT_CUSTOMER_DETAIL = env.baseUrl.cmsApi + '/Payment/GetCustomerbyAccountId';
    public static PAYMENT_APPROVELEVEL1 = env.baseUrl.cmsApi + '/Payment/ApproveLevel1';
    public static PAYMENT_APPROVELEVEL2 = env.baseUrl.cmsApi + '/Payment/ApproveLevel2';
    public static PAYMENT_APPROVELEVEL3 = env.baseUrl.cmsApi + '/Payment/ApproveLevel3';
    public static PAYMENT_REJECT = env.baseUrl.cmsApi + '/Payment/Reject';
    public static PAYMENT_CANCEL = env.baseUrl.cmsApi + '/Payment/Cancel';
    public static PAYMENT_GET_MESSAGES = env.baseUrl.cmsApi + '/Payment/GetMessages';
    public static PAYMENT_GET_STATE_BY_ID = env.baseUrl.cmsApi + '/Payment/GetStateById';
    public static PAYMENT_GET_WALLET = env.baseUrl.cmsApi + '/Payment/GetWallets';
    public static PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/Payment/AddPayment';
    public static GET_ORDER_DETAIL = env.baseUrl.cmsApi + '/Payment/GetOrderDetail';
    public static GET_LIST_ORDER_DETAIL = env.baseUrl.cmsApi + '/Payment/GeListOrderDetail';
    public static GET_ORDER_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/Payment/GetOrderDetailPayment';
    public static PAYMENT_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/Payment/GetCustomerInfo';
    public static PAYMENT_GET_WALLET_INFO = env.baseUrl.cmsApi + '/Payment/GetWalletInfo';
    public static PAYMENT_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/Payment/GetMemberShipInfo';
    public static PAYMENT_GET_EMP_INFO = env.baseUrl.cmsApi + '/Payment/GetEmpInfo';
    public static PAYMENT_REFUND = env.baseUrl.cmsApi + '/Payment/Refund';
    public static PAYMENT_CHECK_REFUND_EXISTING = env.baseUrl.cmsApi + '/Payment/CheckRefundFromPaymentExisting';
    public static PAYMENT_UPDATE_PRIORITY = env.baseUrl.cmsApi + '/Payment/UpdatePriority';
    




    public static FAVORITE_PRODUCT_LIST = env.baseUrl.cmsApi + '/FavoriteProduct/GetList';
    public static FAVORITE_PRODUCT_LIST_JTABLE = env.baseUrl.cmsApi + '/FavoriteProduct/GetJTable';
    public static FAVORITE_PRODUCT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/FavoriteProduct/GetListCustomer';
    public static FAVORITE_PRODUCT_DELETE = env.baseUrl.cmsApi + '/FavoriteProduct/Delete';
    public static FAVORITE_PRODUCT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/FavoriteProduct/GetListTopCustomer';
    


    public static FAVORITE_SELLER_LIST = env.baseUrl.cmsApi + '/FavoriteSeller/GetList';
    public static FAVORITE_SELLER_LIST_JTABLE = env.baseUrl.cmsApi + '/FavoriteSeller/GetJTable';
    public static FAVORITE_SELLER_LIST_CUSTOMER = env.baseUrl.cmsApi + '/FavoriteSeller/GetListCustomer';
    public static FAVORITE_SELLER_DELETE = env.baseUrl.cmsApi + '/FavoriteSeller/Delete';
    public static FAVORITE_SELLER_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/FavoriteSeller/GetListTopCustomer';
    


    public static PRICE_QUOTE_LAST_TIME_LIST = env.baseUrl.cmsApi + '/PriceQuoteLastTime/GetList';
    public static PRICE_QUOTE_LAST_TIME_LIST_JTABLE = env.baseUrl.cmsApi + '/PriceQuoteLastTime/GetJTable';
    public static PRICE_QUOTE_LAST_TIME_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PriceQuoteLastTime/GetListCustomer';
    public static PRICE_QUOTE_LAST_TIME_DELETE = env.baseUrl.cmsApi + '/PriceQuoteLastTime/Delete';
    public static PRICE_QUOTE_LAST_TIME_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PriceQuoteLastTime/GetListTopCustomer';
    


    public static ORDER_LIST_DETAIL = env.baseUrl.cmsApi + '/Order/GetListOrderDetail';
    public static ORDER_LIST_JTABLE = env.baseUrl.cmsApi + '/Order/GetJTable';

    public static ORDERDETAIL_LIST = env.baseUrl.cmsApi + '/OrderDetail/GetList';
    public static ORDER_DETAIL_GET_BY_ORDER_ID = env.baseUrl.cmsApi + '/OrderDetail/GetByOrderId';
    public static ORDERDETAIL_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderDetail/GetJTable';

    public static ORDER_AUCTION_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderAuction/GetJTable';
    public static ORDER_AUCTION_DETAIL = env.baseUrl.cmsApi + '/OrderAuction/GetOrderDetail';
    public static ORDER_AUCTION_ORDER_PAYMENT = env.baseUrl.cmsApi + '/OrderAuction/GetPayment';
    public static ORDER_AUCTION_ORDERDETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderAuction/GetOrderDetailPayment';
    public static ORDER_AUCTION_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuction/GetListCustomer';
    public static ORDER_AUCTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuction/GetListTopCustomer';
    public static ORDER_AUCTION_UPDATE_STATUS_ORDER_DETAIL = env.baseUrl.cmsApi + '/OrderAuction/UpdateStatusOrderDetail';
    public static ORDER_AUCTION_UPDATE_STATUS_ORDER = env.baseUrl.cmsApi + '/OrderAuction/UpdateStatusOrder';
    public static ORDER_AUCTION_UPDATE_STATUS_AUTION = env.baseUrl.cmsApi + '/OrderAuction/ChangeAutionStatus';
    public static ORDER_AUCTION_GET_DETAIL = env.baseUrl.cmsApi + '/OrderAuction/GetDetail';
    public static ORDER_AUCTION_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderAuction/GetMessages';
    public static ORDER_AUCTION_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderAuction/GetPaymentProfile';
    public static ORDER_AUCTION_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/OrderAuction/GetwalletByaccountId';
    public static ORDER_AUCTION_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/OrderAuction/GetWalletbyId';
    public static ORDER_AUCTION_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderAuction/AddPayment';
    public static ORDER_AUCTION_GET_WALLETS = env.baseUrl.cmsApi + '/OrderAuction/GetWallets';
    public static ORDER_AUCTION_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderAuction/PreUpdate';
    public static ORDER_AUCTION_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderAuction/GetAllWarehouseActive';
    public static ORDER_BUY_FOR_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderAuction/AddPaymentOrderBuyForyou';

    public static ORDER_AUCTION_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderAuction/RequestCancelOrder';
    public static ORDER_AUCTION_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/OrderAuction/RequestApproveTempDeposit';
    public static GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetCustomerInfo';
    public static GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetWalletInfo';
    public static GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetMemberShipInfo';
    public static GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetEmpInfo';
    public static GET_LIST_ORDER = env.baseUrl.cmsApi + '/OrderAuction/GetListOrder';
    public static APPROVE_MANY = env.baseUrl.cmsApi + '/OrderAuction/RequestApproveManyTempDeposit';
    public static GET_LIST_MESSAGES_MANY = env.baseUrl.cmsApi + '/OrderAuction/GetMessagesMany';
    public static ORDERAUTION_RECHAGE = env.baseUrl.cmsApi + '/OrderAuction/AddRechange';
    public static ORDER_AUTION_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderAuction/GetCustomerByAccountId';
    public static ORDER_AUTION_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/OrderAuction/GetOrderPayments';
    public static ORDER_AUTION_PAY_ORDERS = env.baseUrl.cmsApi + '/OrderAuction/PayOrders';
    public static ORDER_AUTION_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderAuction/GetSaler';
    public static ORDER_AUTION_LIST_WALLET = env.baseUrl.cmsApi + '/OrderAuction/GetListWallet';
    public static ORDER_AUTION_ADDRECHANGE = env.baseUrl.cmsApi + '/OrderAuction/AddRechange';
    public static ORDER_AUTION_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/OrderAuction/createDeposite';
    public static ORDER_AUTION_BIDCLIENT = env.baseUrl.cmsApi + '/OrderAuction/GetBidClient';
    public static GET_EXPORT_ORDER_AUCTION = env.baseUrl.cmsApi + '/OrderAuction/Export';
    
    






    public static WAITING_ORDER_AUCTION_AUC_LIST_JTABLE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetJTable';
    public static WAITING_ORDER_AUCTION_AUC_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetOrderDetail';
    public static WAITING_ORDER_AUCTION_AUC_PAYMENT = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetPayment';
    public static WAITING_ORDER_AUCTION_AUC_ORDERDETAIL_PAYMENT = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetOrderDetailPayment';
    public static WAITING_ORDER_AUCTION_AUC_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetListCustomer';
    public static WAITING_ORDER_AUCTION_AUC_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetListTopCustomer';
    public static WAITING_ORDER_AUCTION_AUC_UPDATE_STATUS_ORDER_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/UpdateStatusOrderDetail';
    public static WAITING_ORDER_AUCTION_AUC_UPDATE_STATUS_ORDER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/UpdateStatusOrder';
    public static WAITING_ORDER_AUCTION_AUC_UPDATE_STATUS_AUTION = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/ChangeAutionStatus';
    public static WAITING_ORDER_AUCTION_AUC_GET_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetDetail';
    public static WAITING_ORDER_AUCTION_AUC_GET_MESSAGES = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetMessages';
    public static WAITING_ORDER_AUCTION_AUC_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetPaymentProfile';
    public static WAITING_ORDER_AUCTION_AUC_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetwalletByaccountId';
    public static WAITING_ORDER_AUCTION_AUC_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetWalletbyId';
    public static WAITING_ORDER_AUCTION_AUC_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/AddPayment';
    public static WAITING_ORDER_AUCTION_AUC_GET_WALLETS = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetWallets';
    public static WAITING_ORDER_AUCTION_AUC_PRE_UPDATE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/PreUpdate';
    public static WAITING_ORDER_AUCTION_AUC_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetAllWarehouseActive';
    public static WAITING_ORDER_AUCTION_AUC_ADD_REQUEST = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/AddPaymentOrderBuyForyou';
    public static WAITING_ORDER_AUCTION_AUC_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/RequestCancelOrder';
    public static WAITING_ORDER_AUCTION_AUC_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/RequestApproveTempDeposit';
    public static WAITING_ORDER_AUCTION_AUC_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetCustomerInfo';
    public static WAITING_ORDER_AUCTION_AUC_GET_WALLET_INFO = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetWalletInfo';
    public static WAITING_ORDER_AUCTION_AUC_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetMemberShipInfo';
    public static WAITING_ORDER_AUCTION_AUC_GET_EMP_INFO = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetEmpInfo';
    public static WAITING_ORDER_AUCTION_AUC_GET_LIST_ORDER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetListOrder';
    public static WAITING_ORDER_AUCTION_AUC_APPROVE_MANY = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/RequestApproveManyTempDeposit';
    public static WAITING_ORDER_AUCTION_AUC_GET_LIST_MESSAGES_MANY = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetMessagesMany';
    public static WAITING_ORDER_AUCTION_AUC_ORDERAUTION_RECHAGE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/AddRechange';
    public static WAITING_ORDER_AUCTION_AUC_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetCustomerByAccountId';
    public static WAITING_ORDER_AUCTION_AUC_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetOrderPayments';
    public static WAITING_ORDER_AUCTION_AUC_PAY_ORDERS = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/PayOrders';
    public static WAITING_ORDER_AUCTION_AUC_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetSaler';
    public static WAITING_ORDER_AUCTION_AUC_LIST_WALLET = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetListWallet';
    public static WAITING_ORDER_AUTION_ADDRECHANGE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/AddRechange';
    public static WAITING_ORDER_AUTION_CREATEDEPOSITE = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/createDeposite';
    public static WAITING_ORDER_AUCTION_AUC_AUTION_BIDCLIENT = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/GetBidClient';
    public static GET_EXPORT_WAITING_ORDER_AUCTION_AUC = env.baseUrl.cmsApi + '/WaitingOrderAutionAuc/Export';
    
    
    
    
    
    
    
    




    public static ORDER_AUCTION_DGS_P_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderAutionDgs/GetJTable';
    public static ORDER_AUCTION_DGS_P_DETAIL = env.baseUrl.cmsApi + '/OrderAutionDgs/GetOrderDetail';
    public static ORDER_AUCTION_DGS_P_ORDER_PAYMENT = env.baseUrl.cmsApi + '/OrderAutionDgs/GetPayment';
    public static ORDER_AUCTION_DGS_P_ORDERDETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderAutionDgs/GetOrderDetailPayment';
    public static ORDER_AUCTION_DGS_P_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderAutionDgs/GetListCustomer';
    public static ORDER_AUCTION_DGS_P_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAutionDgs/GetListTopCustomer';
    public static ORDER_AUCTION_DGS_P_UPDATE_STATUS_ORDER_DETAIL = env.baseUrl.cmsApi + '/OrderAutionDgs/UpdateStatusOrderDetail';
    public static ORDER_AUCTION_DGS_P_UPDATE_STATUS_ORDER = env.baseUrl.cmsApi + '/OrderAutionDgs/UpdateStatusOrder';
    public static ORDER_AUCTION_DGS_P_UPDATE_STATUS_AUTION = env.baseUrl.cmsApi + '/OrderAutionDgs/ChangeAutionStatus';
    public static ORDER_AUCTION_DGS_P_GET_DETAIL = env.baseUrl.cmsApi + '/OrderAutionDgs/GetDetail';
    public static ORDER_AUCTION_DGS_P_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderAutionDgs/GetMessages';
    public static ORDER_AUCTION_DGS_P_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderAutionDgs/GetPaymentProfile';
    public static ORDER_AUCTION_DGS_P_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/OrderAutionDgs/GetwalletByaccountId';
    public static ORDER_AUCTION_DGS_P_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/OrderAutionDgs/GetWalletbyId';
    public static ORDER_AUCTION_DGS_P_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderAutionDgs/AddPayment';
    public static ORDER_AUCTION_DGS_P_GET_WALLETS = env.baseUrl.cmsApi + '/OrderAutionDgs/GetWallets';
    public static ORDER_AUCTION_DGS_P_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderAutionDgs/PreUpdate';
    public static ORDER_AUCTION_DGS_P_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderAutionDgs/GetAllWarehouseActive';
    public static ORDER_AUTION_DGS_RECHAGE = env.baseUrl.cmsApi + '/OrderAutionDgs/AddRechangeDgs';
    public static ORDER_AUTION_DGS_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderAutionDgs/GetCustomerByAccountId';
    public static ORDER_AUTION_DGS_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/OrderAutionDgs/GetOrderPayments';
    public static ORDER_AUTION_DGS_PAY_ORDERS = env.baseUrl.cmsApi + '/OrderAutionDgs/PayOrders';
    public static ORDER_AUTION_DGS_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderAutionDgs/GetSaler';
    public static ORDER_AUTION_DGS_LIST_WALLET = env.baseUrl.cmsApi + '/OrderAutionDgs/GetListWallet';
    public static ORDER_AUTION_DGS_ADD_RECHGER_DEPOSITE = env.baseUrl.cmsApi + '/OrderAutionDgs/AddRechangeDgs';
    public static ORDER_AUTION_DGS_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/OrderAutionDgs/createDeposite';
    public static ORDER_AUTION_DGS_AUTION_BIDCLIENT = env.baseUrl.cmsApi + '/OrderAutionDgs/GetBidClient';
    public static GET_EXPORT_ORDER_AUCTION_DGS = env.baseUrl.cmsApi + '/OrderAutionDgs/Export';
    
    
    
    
    
    
    //public static ORDER_BUY_FOR_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderAuction/AddPaymentOrderBuyForyou';

    public static ORDER_AUCTION_DGS_P_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderAutionDgs/RequestCancelOrder';
    public static ORDER_AUCTION_DGS_P_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/OrderAutionDgs/RequestApproveTempDeposit';
    //public static GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetCustomerInfo';
    //public static GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetWalletInfo';
    //public static GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetMemberShipInfo';
    //public static GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderAuction/GetEmpInfo';
    //public static GET_LIST_ORDER = env.baseUrl.cmsApi + '/OrderAuction/GetListOrder';
    //public static APPROVE_MANY = env.baseUrl.cmsApi + '/OrderAuction/RequestApproveManyTempDeposit';
    //public static GET_LIST_MESSAGES_MANY = env.baseUrl.cmsApi + '/OrderAuction/GetMessagesMany';





    public static WAITING_PAYMENT_DGS_P_LIST_JTABLE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetJTable';
    public static WAITING_PAYMENT_DGS_P_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetOrderDetail';
    public static WAITING_PAYMENT_DGS_P_ORDER_PAYMENT = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetPayment';
    public static WAITING_PAYMENT_DGS_P_ORDERDETAIL_PAYMENT = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetOrderDetailPayment';
    public static WAITING_PAYMENT_DGS_P_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetListCustomer';
    public static WAITING_PAYMENT_DGS_P_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetListTopCustomer';
    public static WAITING_PAYMENT_DGS_P_UPDATE_STATUS_ORDER_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/UpdateStatusOrderDetail';
    public static WAITING_PAYMENT_DGS_P_UPDATE_STATUS_ORDER = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/UpdateStatusOrder';
    public static WAITING_PAYMENT_DGS_P_UPDATE_STATUS_AUTION = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/ChangeAutionStatus';
    public static WAITING_PAYMENT_DGS_P_GET_DETAIL = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetDetail';
    public static WAITING_PAYMENT_DGS_P_GET_MESSAGES = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetMessages';
    public static WAITING_PAYMENT_DGS_P_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetPaymentProfile';
    public static WAITING_PAYMENT_DGS_P_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetwalletByaccountId';
    public static WAITING_PAYMENT_DGS_P_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetWalletbyId';
    public static WAITING_PAYMENT_DGS_P_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/AddPayment';
    public static WAITING_PAYMENT_DGS_P_GET_WALLETS = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetWallets';
    public static WAITING_PAYMENT_DGS_P_PRE_UPDATE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/PreUpdate';
    public static WAITING_PAYMENT_DGS_P_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetAllWarehouseActive';
    public static WAITING_PAYMENT_DGS_RECHAGE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/AddRechangeDgs';
    public static WAITING_PAYMENT_DGS_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetCustomerByAccountId';
    public static WAITING_PAYMENT_DGS_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetOrderPayments';
    public static WAITING_PAYMENT_DGS_PAY_ORDERS = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/PayOrders';
    public static WAITING_PAYMENT_DGS_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetSaler';
    public static WAITING_PAYMENT_DGS_LIST_WALLET = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetListWallet';
    public static WAITING_PAYMENT_DGS_ADDRECHNGEDG = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/AddRechangeDgs';
    public static WAITING_PAYMENT_DGS_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/createDeposite';
    public static WAITING_PAYMENT_DGS_P_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/RequestCancelOrder';
    public static WAITING_PAYMENT_DGS_P_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/RequestApproveTempDeposit';
    public static WAITING_PAYMENT_DGS_AUTION_BIDCLIENT = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/GetBidClient';
    public static GET_EXPORT_WAITING_ORDER_AUCTION_DGS = env.baseUrl.cmsApi + '/WaitingOrderAutionDgs/Export';
    
    
    





    public static ORDER_AUCTION_PRETREATMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetJTable';
    public static ORDER_AUCTION_PRETREATMENT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetListTopCustomer';
    public static ORDER_AUCTION_PRETREATMENT_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetOrderDetailPayment';
    public static ORDER_AUCTION_PRETREATMENT_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/PreUpdate';
    public static ORDER_AUCTION_PRETREATMENT_PRE_UPDATE_SHIPPINGFREE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/PreUpdateShippingFree';
    public static ORDER_AUCTION_PRETREATMENT_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetAllWarehouseActive';
    public static AUTION_PRETREATMENT_PRE_UPDATE_STATUS = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/UpdateStatus';
    public static AUTION_PRETREATMENTALL_LIST = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetAllList';
    public static AUTION_PRETREATMENTAL_BIDCLIENT = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetBidClient';
    public static AUTION_PRETREATMENTALL_REQUESTCANCELORDER = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/RequestCancelOrder';
    public static ORDER_AUCTION_PRETREATMENT_GET_SHIPPING_INFO = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetShippingInfo';
    public static ORDER_AUCTION_PRETREATMENT_GET_DETAIL = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetDetail';
    public static ORDER_AUCTION_PRETREATMENT_UPDATE_COD = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/UpdateCOD';
    public static ORDER_AUCTION_PRETREATMENT_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetProductType';
    public static ORDER_AUCTION_PRETREATMENT_UPDATE_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/UpdateProductType';
    public static ORDER_AUCTION_PRETREATMENT_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetAllProductOrigin';
    public static ORDER_AUCTION_PRETREATMENT_UPDATE_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/UpdateProductOrigin';
    public static ORDER_AUCTION_PRETREATMENT_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/GetSaler';
    public static GET_EXPORT_AUC_PRE = env.baseUrl.cmsApi + '/OrderAuctionPretreatment/Export';
    
    
    




    public static PRODUCT_CLASSIFICATION_LIST_JTABLE = env.baseUrl.cmsApi + '/ProductClassification/GetJTable';
    public static PRODUCT_CLASSIFICATION_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/ProductClassification/GetAllProductOrigin';
    public static PRODUCTCLASSIFICATION_UPDATE_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/ProductClassification/UpdateProductOrigin';
    public static PRODUCTCLASSIFICATION_UPDATE_PRODUCT_TYPE = env.baseUrl.cmsApi + '/ProductClassification/UpdateProductType';
    public static PRODUCTCLASSIFICATION_UPDATE_PRODUCT_URL = env.baseUrl.cmsApi + '/ProductClassification/GetProductUrl';
    public static PRODUCTCLASSIFICATION_UPDATE_ORDER_DETAIL_FROM_URL = env.baseUrl.cmsApi + '/ProductClassification/UpdateProductFromUrl';
    public static GET_EXPORT_PROCLASS_PRE = env.baseUrl.cmsApi + '/ProductClassification/Export';
    
    
    
    
    
    
    
    
    



    public static ORDER_AUCTION_DGS_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetJTable';
    public static ORDER_AUCTION_DGS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetListTopCustomer';
    public static ORDER_AUCTION_DGS_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetOrderDetailPayment';
    public static ORDER_AUCTION_DGS_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/PreUpdate';
    public static ORDER_AUCTION_DGS_PRETREATMENT_GET_DETAIL = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/PreUpdateShippingFree';
    public static ORDER_AUCTION_DGS_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetAllWarehouseActive';
    public static AUTION_DGS_PRE_UPDATE_STATUS = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/UpdateStatus';
    public static AUTION_DGS_LIST = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetAllList';
    public static AUTION_DGS_PRE_LIST = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetBidClient';
    public static AUTION_DGS_PRETREATMENTAL_BIDCLIENT = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetBidClient';
    public static AUTION_DGS_CANCEL_WORKFLOW = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/RequestCancelOrder';
    public static AUCTION_DGS_PRETREATMENT_GET_DETAIL = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetDetail';
    public static ORDER_AUCTION_DGS_GET_SHIPPING_INFO = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetShippingInfo';
    public static ORDER_AUCTION_PRETREATMENT_DGS_UPDATE_COD = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/UpdateCOD';
    public static ORDER_AUCTION_PRETREATMENT_DGS_UPDATE_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/UpdateProductType';
    public static ORDER_AUCTION_PRETREATMENT_DGS_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetProductType';
    public static ORDER_AUCTION_PRETREATMENT_DGS_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetAllProductOrigin';
    public static ORDER_AUCTION_PRETREATMENT_DGS_UPDATE_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/UpdateProductOrigin';
    public static ORDER_AUCTION_DGS_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/GetSaler';
    public static GET_EXPORT_DGS_PRE = env.baseUrl.cmsApi + '/OrderAutionDgsPretreatment/Export';
    
    
    
    
    
    
    
    
    
    
    
    


    public static PURCHASE_AUCTION_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseAuction/GetJTable';
    public static PURCHASE_AUCTION_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuction/GetOrderDetail';
    public static PURCHASE_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuction/GetPayment';
    public static PURCHASEDETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuction/GetOrderDetailPayment';
    public static PURCHASE_AUCTION_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuction/GetListCustomer';
    public static PURCHASE_AUCTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuction/GetListTopCustomer';
    public static PURCHASE_AUCTION_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuction/GetDetail';
    public static PURCHASE_AUCTION_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseAuction/GetMessages';
    public static PURCHASE_AUCTION_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseAuction/GetAllWarehouseActive';
    public static PURCHASE_AUCTION_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseAuction/Update';
    public static PURCHASE_BUY_YOU_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuction/GetListTopCustomer';
    public static PURCHASE_AUCTION_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseAuction/RequestCancelOrder';
    public static PURCHASE_AUCTION_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseAuction/BuyProduct';
    public static PURCHASE_AUCTION_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuction/UpdateTracking';
    public static PURCHASE_AUCTION_UPDATE_ORDER_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuction/UpdateOrderNumber';
    public static ORDER_AUCTION_PRETREATMENT_PRE_UPDATE_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseAuction/PreUpdate';
    public static PURCHASE_AUCTION_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseAuction/GetCustomerInfo';
    public static PURCHASE_AUCTION_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseAuction/GetWalletInfo';
    public static PURCHASE_AUCTION_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseAuction/GetMemberShipInfo';
    public static PURCHASE_AUCTION_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseAuction/GetEmpInfo';
    public static GET_LIST_ORDER_PURCHASEAUTION = env.baseUrl.cmsApi + '/PurchaseAuction/GetListOrder';
    public static APPROVE_MANY_PURCHASE = env.baseUrl.cmsApi + '/PurchaseAuction/BuyProductMany';
    public static GET_BID = env.baseUrl.cmsApi + '/PurchaseAuction/GetBidClient';
    public static GET_EXPORT_AUC = env.baseUrl.cmsApi + '/PurchaseAuction/Export';
    public static ORDER_AUTION_BOUGHT_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/PurchaseAuction/GetSaler';
    public static PURCHASE_AUCTION_GET_TRACKING_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuction/GetTrackingNumber';
    public static PURCHASE_AUCTION_UPDATE_ORDER_SHIPPINGFREE = env.baseUrl.cmsApi + '/PurchaseAuction/UpdateShippingFree';
    public static PURCHASE_AUCTION_UPDATE_ORDER_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseAuction/UpdateSurcharge';
    public static PURCHASE_AUCTION_UPDATE_ORDER_NOTE = env.baseUrl.cmsApi + '/PurchaseAuction/UpdateNote';
    
    
    
    






    public static PURCHASE_AUCTION_BOUGHT_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetJTable';
    public static PURCHASE_AUCTION_BOUGHT_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetOrderDetail';
    public static PURCHASE_BOUGHT_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetPayment';
    public static PURCHASEDETAIL_BOUGHT_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetOrderDetailPayment';
    public static PURCHASE_AUCTION_BOUGHT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetListCustomer';
    public static PURCHASE_AUCTION_BOUGHT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetListTopCustomer';
    public static PURCHASE_AUCTION_BOUGHT_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetDetail';
    public static PURCHASE_AUCTION_BOUGHT_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetMessages';
    public static PURCHASE_AUCTION_BOUGHT_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetAllWarehouseActive';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/Update';
    public static PURCHASE_BUY_YOU_BOUGHT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetListTopCustomer';
    public static PURCHASE_AUCTION_BOUGHT_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/RequestCancelOrder';
    public static PURCHASE_AUCTION_BOUGHT_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/BuyProduct';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateTracking';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateOrderNumber';
    public static ORDER_AUCTION_BOUGHT_PRETREATMENT_PRE_UPDATE_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/PreUpdate';
    public static PURCHASE_AUCTION_BOUGHT_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetCustomerInfo';
    public static PURCHASE_AUCTION_BOUGHT_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetWalletInfo';
    public static PURCHASE_AUCTION_BOUGHT_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetMemberShipInfo';
    public static PURCHASE_AUCTION_BOUGHT_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetEmpInfo';
    public static GET_LIST_ORDER_BOUGHT_PURCHASEAUTION = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetListOrder';
    public static APPROVE_MANY_PURCHASE_BOUGHT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/BuyProductMany';
    public static GET_BID_BOUGHT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetBidClient';
    public static PUCHASE_AUTION_BOUGHT = env.baseUrl.cmsApi + '/PurchaseAuctionBought/Export';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SHIPPINGFREE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateShippingFree';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateSurcharge';
    public static PURCHASE_AUCTION_BOUGHT_GET_TRACKING_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetTrackingNumber';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateYCComplete';
    public static PURCHASE_AUCTION_BOUGHT_IMPORT_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionBought/ImportTracking';
    public static PURCHASE_AUCTION_BOUGHT_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionBought/UpdateTrackingExcel';
    public static PURCHASE_AUCTION_BOUGHT_GET_TRANSACTION_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionBought/GetTransactionDetail';
    public static PURCHASE_AUCTION_BOUGHT_SEND_MESSAGE_TD = env.baseUrl.cmsApi + '/PurchaseAuctionBought/SendMessageTD';
    
    
    
    



    public static PURCHASE_AUCTION_DGS_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetJTable';
    public static PURCHASE_AUCTION_DGS_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetOrderDetail';
    // public static PURCHASE_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuction/GetPayment';
    // public static PURCHASEDETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseAuction/GetOrderDetailPayment';
    public static PURCHASE_AUCTION_DGS_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetListCustomer';
    public static PURCHASE_AUCTION_DGS_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetListTopCustomer';
    public static PURCHASE_AUCTION_DGS_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetDetail';
    public static PURCHASE_AUCTION_DGS_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetMessages';
    public static PURCHASE_AUCTION_DGS_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetAllWarehouseActive';
    public static PURCHASE_AUCTION_DGS_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/Update';
    //public static PURCHASE_BUY_YOU_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuction/GetListTopCustomer';
    public static PURCHASE_AUCTION_DGS_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/RequestCancelOrder';
    public static PURCHASE_AUCTION_DGS_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/BuyProduct';
    public static PURCHASE_AUCTION_DGS_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/UpdateTracking';
    public static PURCHASE_AUCTION_DGS_UPDATE_ORDER_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/UpdateOrderNumber';
    //public static ORDER_AUCTION_PRETREATMENT_PRE_UPDATE_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseAuction/PreUpdate';
    public static PURCHASE_AUCTION_DGS_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetCustomerInfo';
    public static PURCHASE_AUCTION_DGS_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetWalletInfo';
    public static PURCHASE_AUCTION_DGS_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetMemberShipInfo';
    public static PURCHASE_AUCTION_DGS_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetEmpInfo';
    public static GET_LIST_ORDER_PURCHASEAUTIONDGS = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetListOrder';
    public static APPROVE_MANY_PURCHASE_DGS = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/BuyProductMany';
    public static GET_BID_DGS = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetBidClient';
    public static GET_EXPORT_DGS = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/Export';
    public static PURCHASE_AUCTION_DGS_GET_TRACKING_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/GetTrackingNumber';
    public static PURCHASE_AUCTION_DGS_UPDATE_ORDER_SHIPPINGFREE = env.baseUrl.cmsApi + '/PurchaseAuctionDgs/UpdateShippingFree';




    public static PURCHASE_AUCTION_DGS_BOUGHT_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetJTable';
    public static PURCHASE_AUCTION_DGS_BOUGHT_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetOrderDetail';
    public static PURCHASE_AUCTION_DGS_BOUGHT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetListCustomer';
    public static PURCHASE_AUCTION_DGS_BOUGHT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetListTopCustomer';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetDetail';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetMessages';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetAllWarehouseActive';
    public static PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/Update';
    public static PURCHASE_AUCTION_DGS_BOUGHT_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/RequestCancelOrder';
    public static PURCHASE_AUCTION_DGS_BOUGHT_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/BuyProduct';
    public static PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/UpdateTracking';
    public static PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/UpdateOrderNumber';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetCustomerInfo';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetWalletInfo';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetMemberShipInfo';
    public static PURCHASE_AUCTION_DGS_BOUGHT_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetEmpInfo';
    public static APPROVE_MANY_PURCHASE_DGS_BOUGHT = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/BuyProductMany';
    public static PUCHASE_AUTION_DGS_BOUGHT = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/Export';
    public static PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SURCHAGE = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/UpdateSurcharge';
    public static PUCHASE_AUTION_DGS_BOUGHT_GET_TRACKING_NUMBER = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetTrackingNumber';
    public static PUCHASE_AUTION_DGS_BOUGHT_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/UpdateYCComplete';
    public static PUCHASE_AUTION_DGS_BOUGHT_IMPORT_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/ImportTracking';
    public static PUCHASE_AUTION_DGS_BOUGHT_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/UpdateTrackingExcel';
    public static PUCHASE_AUTION_DGS_BOUGHT_GET_TRANSACTION_DETAIL = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/GetTransactionDetail';
    public static PUCHASE_AUTION_DGS_BOUGHT_SEND_MESSAGE_TD = env.baseUrl.cmsApi + '/PurchaseAuctionDgsBought/SendMessageTD';
    
    
    
    
    



    public static QUOTE_AUCTION_LIST_JTABLE = env.baseUrl.cmsApi + '/QuoteAuction/GetJTable';
    public static QUOTE_AUCTION_DETAIL = env.baseUrl.cmsApi + '/QuoteAuction/GetOrderDetail';
    public static QUOTE_PAYMENT = env.baseUrl.cmsApi + '/QuoteAuction/GetPayment';
    public static QUOTEDETAIL_PAYMENT = env.baseUrl.cmsApi + '/QuoteAuction/GetOrderDetailPayment';
    public static QUOTE_AUCTION_LIST_CUSTOMER = env.baseUrl.cmsApi + '/QuoteAuction/GetListCustomer';
    public static QUOTE_AUCTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/QuoteAuction/GetListTopCustomer';
    public static QUOTE_AUCTION_GET_DETAIL = env.baseUrl.cmsApi + '/QuoteAuction/GetDetail';
    public static QUOTE_AUCTION_GET_MESSAGES = env.baseUrl.cmsApi + '/QuoteAuction/GetMessages';
    public static QUOTE_AUCTION_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/QuoteAuction/GetAllWarehouseActive';
    public static QUOTE_AUCTION_UPDATE_ORDER = env.baseUrl.cmsApi + '/QuoteAuction/Update';
    public static QUOTE_BUY_YOU_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderAuction/GetListTopCustomer';
    public static QUOTE_AUCTION_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/QuoteAuction/RequestCancelOrder';
    public static QUOTE_AUCTION_PAYMENT_ORDER = env.baseUrl.cmsApi + '/QuoteAuction/PaymentOrder';
    public static QUOTE_AUCTION_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/QuoteAuction/UpdateTracking';
    public static QUOTE_AUCTION_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/QuoteAuction/GetCustomerInfo';
    public static QUOTE_AUCTION_GET_WALLET_INFO = env.baseUrl.cmsApi + '/QuoteAuction/GetWalletInfo';
    public static QUOTE_AUCTION_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/QuoteAuction/GetMemberShipInfo';
    public static QUOTE_AUCTION_GET_EMP_INFO = env.baseUrl.cmsApi + '/QuoteAuction/GetEmpInfo';
    public static QUOTE_AUCTION_UPDATE = env.baseUrl.cmsApi + '/QuoteAuction/QuoteAuctionUpdate';
    public static GET_BID_QUOTE_AUCTION = env.baseUrl.cmsApi + '/QuoteAuction/GetBidClient';
    public static AUTION_QUOTE_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/QuoteAuction/GetOrderPayments';
    public static QUOTE_AUCTION_PAYMENT_ORDER_MULTI = env.baseUrl.cmsApi + '/QuoteAuction/PaymentOrderMulti';
    public static AUTION_QUOTE_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/QuoteAuction/UpdateYCComplete';
    public static QUOTE_AUCTION_IMPORT_FILE = env.baseUrl.cmsApi + '/QuoteAuction/ImportFile';
    public static QUOTE_AUCTION_IMPORT_TRACKING = env.baseUrl.cmsApi + '/QuoteAuction/ImportTracking';
    public static QUOTE_AUCTION_CAP_NHAT_FILE = env.baseUrl.cmsApi + '/QuoteAuction/UpdateFile';
    public static QUOTE_AUCTION_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/QuoteAuction/UpdateTrackingExcel';
    public static QUOTE_AUCTION_IMPORT_SURCHARGE = env.baseUrl.cmsApi + '/QuoteAuction/ImportSurcharge';
    public static QUOTE_AUCTION_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/QuoteAuction/UpdateSurcharge';
    public static QUOTE_AUCTION_IMPORT_DELIVERYFEE = env.baseUrl.cmsApi + '/QuoteAuction/ImportDeliveryFee';
    public static QUOTE_AUCTION_UPDATE_DELIVERYFEE = env.baseUrl.cmsApi + '/QuoteAuction/UpdateDeliveryFee';
    public static QUOTE_AUCTION_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/QuoteAuction/GetSaler';
    public static QUOTE_AUCTION_GET_SHIPPING_INFO = env.baseUrl.cmsApi + '/QuoteAuction/GetShippingInfo';
    public static QUOTE_AUCTION_UPDATE_ORDER_SHIPPINGFREE = env.baseUrl.cmsApi + '/QuoteAuction/UpdateShippingFree';
    public static EXPORT_AUCTION_QUOTE = env.baseUrl.cmsApi + '/QuoteAuction/Export';
    
    
    
    
    




    public static QUOTE_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/MercariQuote/GetJTable';
    public static QUOTE_MERCARI_DETAIL = env.baseUrl.cmsApi + '/MercariQuote/GetOrderDetail';
    public static QUOTE_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/MercariQuote/GetPayment';
    public static QUOTEDETAIL_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/MercariQuote/GetOrderDetailPayment';
    public static QUOTE_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/MercariQuote/GetListCustomer';
    public static QUOTE_MERCARI_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/MercariQuote/GetListTopCustomer';
    public static QUOTE_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/MercariQuote/GetDetail';
    public static QUOTE_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/MercariQuote/GetMessages';
    public static QUOTE_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/MercariQuote/GetAllWarehouseActive';
    public static QUOTE_MERCARI_UPDATE_ORDER = env.baseUrl.cmsApi + '/MercariQuote/Update';
    public static QUOTE_MERCARI_BUY_YOU_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/MercariQuote/GetListTopCustomer';
    public static QUOTE_MERCARI_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/MercariQuote/RequestCancelOrder';
    public static QUOTE_MERCARI_PAYMENT_ORDER = env.baseUrl.cmsApi + '/MercariQuote/PaymentOrder';
    public static QUOTE_MERCARI_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/MercariQuote/UpdateTracking';
    public static QUOTE_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/MercariQuote/GetCustomerInfo';
    public static QUOTE_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/MercariQuote/GetWalletInfo';
    public static QUOTE_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/MercariQuote/GetMemberShipInfo';
    public static QUOTE_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/MercariQuote/GetEmpInfo';
    public static QUOTE_MERCARI_UPDATE = env.baseUrl.cmsApi + '/MercariQuote/QuoteAuctionUpdate';
    public static GET_BID_QUOTE_MERCARI = env.baseUrl.cmsApi + '/MercariQuote/GetBidClient';
    public static MERCARI_QUOTE_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/MercariQuote/GetOrderPayments';
    public static QUOTE_MERCARI_PAYMENT_ORDER_MULTI = env.baseUrl.cmsApi + '/MercariQuote/PaymentOrderMulti';
    public static AUTION_MERCARI_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/MercariQuote/UpdateYCComplete';
    public static QUOTE_MERCARI_IMPORT_FILE = env.baseUrl.cmsApi + '/MercariQuote/ImportFile';
    public static QUOTE_MERCARI_IMPORT_TRACKING = env.baseUrl.cmsApi + '/MercariQuote/ImportTracking';
    public static QUOTE_MERCARI_CAP_NHAT_FILE = env.baseUrl.cmsApi + '/MercariQuote/UpdateFile';
    public static QUOTE_MERCARI_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/MercariQuote/UpdateTrackingExcel';
    public static QUOTE_MERCARI_IMPORT_SURCHARGE = env.baseUrl.cmsApi + '/MercariQuote/ImportSurcharge';
    public static QUOTE_MERCARI_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/MercariQuote/UpdateSurcharge';
    public static QUOTE_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/MercariQuote/GetSaler';
    public static QUOTE_MERCARI_GET_SHIPPING_INFO = env.baseUrl.cmsApi + '/MercariQuote/GetShippingInfo';
    public static QUOTE_MERCARI_UPDATE_ORDER_SHIPPINGFREE = env.baseUrl.cmsApi + '/MercariQuote/UpdateShippingFree';
    public static EXPORT_MERCARI_QOUTE = env.baseUrl.cmsApi + '/MercariQuote/Export';
    
    
    
    
    
    
    
    
    
    
    
    

    public static CANCEL_ORDER_LIST_JTABLE = env.baseUrl.cmsApi + '/CancelOrder/GetJTable';
    public static GET_EXPORT_CANCEL_ORDER = env.baseUrl.cmsApi + '/CancelOrder/Export';
    
    




    public static APPROVAL_ORDER_LIST_JTABLE = env.baseUrl.cmsApi + '/ApprovalOrder/GetJTable';
    public static APPROVAL_ORDER_DETAIL = env.baseUrl.cmsApi + '/ApprovalOrder/GetOrderDetail';
    public static APPROVAL_ORDER_PAYMENT = env.baseUrl.cmsApi + '/ApprovalOrder/GetPayment';
    public static APPROVAL_ORDER_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/ApprovalOrder/GetOrderDetailPayment';
    public static APPROVAL_ORDER_LIST_CUSTOMER = env.baseUrl.cmsApi + '/ApprovalOrder/GetListCustomer';
    public static APPROVAL_ORDER_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/ApprovalOrder/GetListTopCustomer';
    public static APPROVAL_ORDER_GET_MESSAGES = env.baseUrl.cmsApi + '/ApprovalOrder/GetMessages';
    public static APPROVAL_ORDER_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/ApprovalOrder/AddPayment';
    public static APPROVAL_ORDER_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/ApprovalOrder/Getpaymentprofile';
    public static APPROVAL_ORDER_GET_WALLETS = env.baseUrl.cmsApi + '/ApprovalOrder/GetWallets';
    public static APPROVAL_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/ApprovalOrder/GetCustomerInfo';
    public static APPROVAL_GET_WALLET_INFO = env.baseUrl.cmsApi + '/ApprovalOrder/GetWalletInfo';
    public static APPROVAL_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/ApprovalOrder/GetMemberShipInfo';
    public static APPROVAL_GET_EMP_INFO = env.baseUrl.cmsApi + '/ApprovalOrder/GetEmpInfo';
    public static APPROVAL_GET_LIST_ORDER = env.baseUrl.cmsApi + '/ApprovalOrder/GetListOrder';
    public static APPROVE_TEMP_DEPOSITE_MULTI = env.baseUrl.cmsApi + '/ApprovalOrder/ApproveTempDepositMulti';
    public static APPROVE_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/ApprovalOrder/GetSaler';
    public static APPROVE_GET_EXPORT = env.baseUrl.cmsApi + '/ApprovalOrder/Export';
    public static APPROVAL_ORDER_CHECK_SHOP_DELETED_BID = env.baseUrl.cmsApi + '/ApprovalOrder/CheckShopDeletedBid';

    public static APPROVAL_ORDER_APPROVED_CANCEL_ORDER = env.baseUrl.cmsApi + '/ApprovalOrder/ApprovedCancelOrder';
    public static APPROVAL_ORDER_REJECT_CANCEL_ORDER = env.baseUrl.cmsApi + '/ApprovalOrder/RejectCancelOrder';
    public static APPROVAL_ORDER_REJECT_REQUEST_APPROVE_TEMPDEPOSIT = env.baseUrl.cmsApi + '/ApprovalOrder/RejectRequestApproveTempDeposit';
    public static APPROVAL_ORDER_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/ApprovalOrder/ApproveTempDeposit';
    public static APPROVAL_ORDER_CUSTOMER_REJECT_PAYMENT = env.baseUrl.cmsApi + '/ApprovalOrder/CustomerRejectPayment';
    public static APPROVAL_ORDER_APPROVE_PAYMENT_ORDER = env.baseUrl.cmsApi + '/ApprovalOrder/ApprovePaymentOrder';
    public static APPROVAL_ORDER_REJECT_PAYMENT_ORDER = env.baseUrl.cmsApi + '/ApprovalOrder/RejectPaymentOrder';
    public static APPROVAL_ORDER_APPROVE_PAYMENT_ORDER_DONE = env.baseUrl.cmsApi + '/ApprovalOrder/ApprovePaymentOrderDone';

    





    public static APPROVAL_ADVANCE_PAYMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetJTable';
    public static APPROVAL_ADVANCE_PAYMENT_ORDER_DETAIL = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetOrderDetail';
    public static APPROVAL_ADVANCE_PAYMENT_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetPayment';
    public static APPROVAL_ADVANCE_ORDER_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetOrderDetailPayment';
    public static APPROVAL_ADVANCE_PAYMENT_LIST_CUSTOMER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetListCustomer';
    public static APPROVAL_ADVANCE_PAYMENT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetListTopCustomer';
    public static APPROVAL_ADVANCE_PAYMENT_GET_MESSAGES = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetMessages';
    public static APPROVAL_ADVANCE_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/AddPayment';
    public static APPROVAL_ADVANCE_PAYMENT_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/Getpaymentprofile';
    public static APPROVAL_ADVANCE_PAYMENT_GET_WALLETS = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetWallets';
    public static APPROVAL_ADVANCE_PAYMENT_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetCustomerInfo';
    public static APPROVAL_ADVANCE_PAYMENT_GET_WALLET_INFO = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetWalletInfo';
    public static APPROVAL_ADVANCE_PAYMENT_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetMemberShipInfo';
    public static APPROVAL_ADVANCE_PAYMENT_GET_EMP_INFO = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetEmpInfo';
    public static APPROVAL_ADVANCE_PAYMENT_GET_LIST_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetListOrder';
    public static APPROVAL_ADVANCE_PAYMENT_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/ApprovalOrder/ApproveTempDeposit';
    public static APPROVAL_ADVANCE_PAYMENT_TEMP_DEPOSITE_MULTI = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApproveTempDepositMulti';
    public static APPROVAL_ADVANCE_PAYMENT_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/GetSaler';
    public static APPROVAL_ADVANCE_PAYMENT_CANCEL_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApprovedCancelOrder';
    public static APPROVAL_ADVANCE_PAYMENT_REJECT_CANCEL_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/RejectCancelOrder';
    public static APPROVAL_ADVANCE_PAYMENT_REJECT_REQUEST_APPROVE_TEMPDEPOSIT = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/RejectRequestApproveTempDeposit';
    public static APPROVAL_ADVANCE_PAYMENT_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApproveTempDeposit';
    public static APPROVAL_ADVANCE_PAYMENT_CUSTOMER_REJECT_PAYMENT = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/CustomerRejectPayment';
    public static APPROVAL_ADVANCE_PAYMENT_APPROVE_PAYMENT_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApprovePaymentOrder';
    public static APPROVAL_ADVANCE_PAYMENT_REJECT_PAYMENT_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/RejectPaymentOrder';
    public static APPROVAL_ADVANCE_PAYMENT_APPROVE_PAYMENT_ORDER_DONE = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApprovePaymentOrderDone';
    public static APPROVAL_ADVANCE_PAYMENT_ORDER = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/RejectPaymentOrder';
    public static APPROVAL_ADVANCE_PAYMENT_DONE = env.baseUrl.cmsApi + '/ApprovalAdvancePayment/ApprovePaymentOrderDone';



    


    public static ORDER_PAYMENT_APPROVAL_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetJTable';
    public static ORDER_PAYMENT_APPROVAL_DETAIL = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetOrderDetail';
    public static ORDER_PAYMENT_APPROVAL_PAYMENT = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetPayment';
    public static ORDER_PAYMENT_APPROVAL_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetOrderDetailPayment';
    public static ORDER_PAYMENT_APPROVAL_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetListCustomer';
    public static ORDER_PAYMENT_APPROVAL_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetListTopCustomer';
    public static ORDER_PAYMENT_APPROVAL_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetMessages';
    public static ORDER_PAYMENT_APPROVAL_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderPaymentApproval/AddPayment';
    public static ORDER_PAYMENT_APPROVAL_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderPaymentApproval/Getpaymentprofile';
    public static ORDER_PAYMENT_APPROVAL_GET_WALLETS = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetWallets';
    public static ORDER_PAYMENT_APPROVAL_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetCustomerInfo';
    public static ORDER_PAYMENT_APPROVAL_GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetWalletInfo';
    public static ORDER_PAYMENT_APPROVAL_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetMemberShipInfo';
    public static ORDER_PAYMENT_APPROVAL_GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetEmpInfo';
    public static ORDER_PAYMENT_APPROVAL_GET_LIST_ORDER = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetListOrder';
    public static ORDER_PAYMENT_APPROVAL_TEMP_DEPOSITE_MULTI = env.baseUrl.cmsApi + '/OrderPaymentApproval/ApproveTempDepositMulti';
    public static ORDER_PAYMENT_APPROVAL_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetSaler';
    public static ORDER_PAYMENT_APPROVAL_REJECT_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderPaymentApproval/RejectCancelOrder';
    public static ORDER_PAYMENT_APPROVAL_REJECT_REQUEST_APPROVE_TEMPDEPOSIT = env.baseUrl.cmsApi + '/OrderPaymentApproval/RejectRequestApproveTempDeposit';
    public static ORDER_PAYMENT_APPROVAL_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/ApprovalOrder/ApproveTempDeposit';
    public static ORDER_PAYMENT_APPROVAL_CUSTOMER_REJECT_PAYMENT = env.baseUrl.cmsApi + '/ApprovalOrder/CustomerRejectPayment';
    public static ORDER_PAYMENT_APPROVAL_DONE = env.baseUrl.cmsApi + '/ApprovalOrder/ApprovePaymentOrderDone';
    public static ORDER_PAYMENT_APPROVAL_GET_DETAIL = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetDetail';
    public static ORDER_PAYMENT_APPROVAL_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/OrderPaymentApproval/GetOrderPayments';
    public static ORDER_PAYMENT_APPROVAL_PAY_ORDERS = env.baseUrl.cmsApi + '/OrderPaymentApproval/PayOrders';
    public static APPROVAL_ORDER_APPROVE_PAYMENT_ORDER_MULTI = env.baseUrl.cmsApi + '/OrderPaymentApproval/ApprovePaymentOrderDoneMulti';
    public static GET_EXPORT_ORDER_PAYMENT_APPROVAL = env.baseUrl.cmsApi + '/OrderPaymentApproval/Export';
    
    
    





    public static ORDER_PAID_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderPaid/GetJTable';
    public static ORDER_PAID_DETAIL = env.baseUrl.cmsApi + '/OrderPaid/GetOrderDetail';
    public static ORDER_PAID_PAYMENT = env.baseUrl.cmsApi + '/OrderPaid/GetPayment';
    public static ORDER_PAID_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderPaid/GetOrderDetailPayment';
    public static ORDER_PAID_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderPaid/GetListCustomer';
    public static ORDER_PAID_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderPaid/GetListTopCustomer';
    public static ORDER_PAID_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderPaid/GetMessages';
    public static ORDER_PAID_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderPaid/AddPayment';
    public static ORDER_PAID_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderPaid/Getpaymentprofile';
    public static OORDER_PAID_GET_WALLETS = env.baseUrl.cmsApi + '/OrderPaid/GetWallets';
    public static ORDER_PAID_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderPaid/GetCustomerInfo';
    public static ORDER_PAIDL_GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderPaid/GetWalletInfo';
    public static ORDER_PAID_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderPaid/GetMemberShipInfo';
    public static ORDER_PAIDL_GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderPaid/GetEmpInfo';
    public static ORDER_PAIDL_GET_LIST_ORDER = env.baseUrl.cmsApi + '/OrderPaid/GetListOrder';
    public static ORDER_PAID_TEMP_DEPOSITE_MULTI = env.baseUrl.cmsApi + '/OrderPaid/ApproveTempDepositMulti';
    public static ORDER_PAID_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderPaid/GetSaler';
    public static ORDER_PAID_REJECT_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderPaid/RejectCancelOrder';
    public static ORDER_PAID_REJECT_REQUEST_APPROVE_TEMPDEPOSIT = env.baseUrl.cmsApi + '/OrderPaid/RejectRequestApproveTempDeposit';
    public static ORDER_PAID_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/OrderPaid/ApproveTempDeposit';
    public static ORDER_PAID_CUSTOMER_REJECT_PAYMENT = env.baseUrl.cmsApi + '/OrderPaid/CustomerRejectPayment';
    public static ORDER_PAID_DONE = env.baseUrl.cmsApi + '/OrderPaid/ApprovePaymentOrderDone';


    

    public static SUCCESSFULBID_LIST = env.baseUrl.cmsApi + '/SuccessfulBid/GetList';
    public static SUCCESSFULBID_LIST_JTABLE = env.baseUrl.cmsApi + '/SuccessfulBid/GetListJTable';
    public static SUCCESSFULBID_LIST_JTABLE_ORDER = env.baseUrl.cmsApi + '/SuccessfulBid/GetListSuccessfulBidJTable';
    public static SUCCESSFULBID_ALL_LIST = env.baseUrl.cmsApi + '/SuccessfulBid/GetAllList';
    public static GET_ALL_LIST_CUSTOMER = env.baseUrl.cmsApi + '/SuccessfulBid/GetMapSuccessfulBid';
    public static SUCCESSFULBID_CHANGE_STATUS = env.baseUrl.cmsApi + '/SuccessfulBid/ChangePaymentStatus';
    public static SUCCESSFULBID_EXP_EXCEL = env.baseUrl.cmsApi + '/SuccessfulBid/ExportExcel';
    


    public static AucAution_LIST = env.baseUrl.cmsApi + '/AucAution/GetList';
    public static AucAution_LIST_JTABLE = env.baseUrl.cmsApi + '/AucAution/GetListJTable';
    public static AucAution_LIST_JTABLE_ORDER = env.baseUrl.cmsApi + '/AucAution/GetListSuccessfulBidJTable';
    public static AucAution_ALL_LIST = env.baseUrl.cmsApi + '/AucAution/GetAllList';
    public static AucAution_BIDCLIENT = env.baseUrl.cmsApi + '/AucAution/GetBidClient';
    //public static GET_ALL_LIST_CUSTOMER = env.baseUrl.cmsApi + '/SuccessfulBid/GetMapSuccessfulBid';
    public static AucAution_CHANGE_STATUS = env.baseUrl.cmsApi + '/AucAution/ChangePaymentStatus';
    public static AucAution_EXP_EXCEL = env.baseUrl.cmsApi + '/AucAution/ExportExcel';
    public static AUCAUTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/AucAution/GetListTopCustomer';
    public static AUCAUTION_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/AucAution/GetSaler';
    public static AUCAUTION_GET_ORDER_BY_CODE = env.baseUrl.cmsApi + '/AucAution/GetOrderByCode';
    public static AUCAUTION_GET_MESSAGE = env.baseUrl.cmsApi + '/AucAution/GetMessages';
    
    



    public static DGSAution_LIST = env.baseUrl.cmsApi + '/DgsAution/GetList';
    public static DGSAution_LIST_JTABLE = env.baseUrl.cmsApi + '/DgsAution/GetListJTable';
    public static DGSAution_LIST_JTABLE_ORDER = env.baseUrl.cmsApi + '/DgsAution/GetListSuccessfulBidJTable';
    public static DGSAution_ALL_LIST = env.baseUrl.cmsApi + '/DgsAution/GetAllList';
    public static DGSAution_BIDCLIENT = env.baseUrl.cmsApi + '/DgsAution/GetBidClient';
    //public static GET_ALL_LIST_CUSTOMER = env.baseUrl.cmsApi + '/SuccessfulBid/GetMapSuccessfulBid';
    public static DGSAution_CHANGE_STATUS = env.baseUrl.cmsApi + '/DgsAution/ChangePaymentStatus';
    public static DGSAution_EXP_EXCEL = env.baseUrl.cmsApi + '/DgsAution/ExportExcel';
    public static DGSAUTION_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/DgsAution/GetListTopCustomer';
    public static DGSAution_GET_ORDER_BY_CODE = env.baseUrl.cmsApi + '/DgsAution/GetOrderByCode';
    public static DGSAution_GET_MESSAGE = env.baseUrl.cmsApi + '/DgsAution/GetMessages';
    




    public static USERBIDPRODUCT_LIST_JTABLE = env.baseUrl.cmsApi + '/UserBidProduct/GetJTable';
    public static USERBIDPRODUCT_GET_LIST_ALL = env.baseUrl.cmsApi + '/UserBidProduct/GetListAll';
    public static GET_LIST_CUSTOMER = env.baseUrl.cmsApi + '/UserBidProduct/GetListCustomer';

    public static BANKCLIENTINFO_LIST = env.baseUrl.cmsApi + '/BankClientInfo/GetList';
    public static GET_CAPCHA = env.baseUrl.cmsApi + '/BankClientInfo/GetCapcha';
    public static LOGIN = env.baseUrl.cmsApi + '/BankClientInfo/Login';

    public static BIDLASTTIME_LIST_JTABLE = env.baseUrl.cmsApi + '/BidLastTime/GetJTable';
    public static BIDLASTTIME_GET_LIST_CUSTOMER = env.baseUrl.cmsApi + '/BidLastTime/GetListCustomer';

    public static GET_LIST_PRODUCTBID = env.baseUrl.cmsApi + '/ProductBid/GetList';

    public static ORDER_BUY_YOU_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderBuyForYou/GetJTable';
    public static ORDER_BUY_YOU_LIST_TABLE = env.baseUrl.cmsApi + '/OrderBuyForYou/gettable';
    public static ORDER_BUY_YOU_DETAIL = env.baseUrl.cmsApi + '/OrderBuyForYou/GetOrderDetail';
    public static ORDER_BUY_YOU_PAYMENT = env.baseUrl.cmsApi + '/OrderBuyForYou/GetPayment';
    public static ORDER_BUY_YOU_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderBuyForYou/GetOrderDetailPayment';
    public static ORDER_BUY_YOU_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderBuyForYou/GetListCustomer';
    public static ORDER_BUY_YOU_UPDATE_DETAIL = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateDetail';
    public static ORDER_BUY_YOU_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateStatusDetail';
    public static ORDER_BUY_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderBuyForYou/Add';
    public static ORDER_BUY_YOU_GET_DETAIL = env.baseUrl.cmsApi + '/OrderBuyForYou/GetDetail';
    public static ORDER_BUY_YOU_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/OrderBuyForYou/GetwalletByaccountId';
    public static ORDER_BUY_YOU_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderBuyForYou/Getpaymentprofile';
    public static ORDER_BUY_YOU_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/OrderBuyForYou/GetWalletbyId';
    public static ORDER_BUY_YOU_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderBuyForYou/GetMessages';
    public static ORDER_BUY_YOU_CANCEL_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/CancelOrderByForYou';
    public static ORDER_BUY_YOU_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderBuyForYou/RequestCancelOrder';
    public static ORDER_BUY_YOU_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/OrderBuyForYou/RequestApproveTempDeposit';
    public static ORDER_BUY_YOU_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderBuyForYou/PreUpdate';
    public static ORDER_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderBuyForYou/GetAllWarehouseActive';
    public static ORDER_BUY_YOU_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderBuyForYou/GetCustomerInfo';
    public static ORDER_BUY_YOU_GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderBuyForYou/GetWalletInfo';
    public static ORDER_BUY_YOU_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderBuyForYou/GetMemberShipInfo';
    public static ORDER_BUY_YOU_GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderBuyForYou/GetEmpInfo';
    public static ORDER_BUY_YOU_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/OrderBuyForYou/GetOrderPayments';
    public static UPDATE_ORDER_BY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateOrderDetail';
    public static UPDATE_PRICE_ORDER_BY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateOrderPrice';
    public static GET_LIST_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/GetListOrder';
    public static APPROVE_MANY_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/RequestApproveManyTempDeposit';
    public static GET_LIST_MESSAGES_MANY_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/GetMessagesMany';
    public static BUY_FOR_YOU_WALLET = env.baseUrl.cmsApi + '/OrderBuyForYou/GetWallets';
    public static BUY_FOR_YOU_ADD_RECHAGE = env.baseUrl.cmsApi + '/OrderBuyForYou/AddRechange';
    public static ORDER_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderBuyForYou/GetCustomerByAccountId';
    public static ORDER_BUY_YOU_PAY_ORDERS = env.baseUrl.cmsApi + '/OrderBuyForYou/PayOrders';
    public static ORDER_BUY_FOR_YOU_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderBuyForYou/GetSaler';
    public static ORDER_BUY_FOR_YOU_ADD_NEW_ORDER = env.baseUrl.cmsApi + '/OrderBuyForYou/AddNewOrder';
    public static BUY_FOR_YOU_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/OrderBuyForYou/CreateDeposite';
    
    public static BUY_FOR_YOU_GET_CUSTOMER_LEVEL = env.baseUrl.cmsApi + '/OrderBuyForYou/GetCustomerProfile';
    public static ORDER_CUSTOMER_ADDRESS_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderBuyForYou/GetCustomerAddressByAccountId';
    public static ORDER_BUY_YOU_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderBuyForYou/GetListTopCustomer';
    public static ORDER_BUY_YOU_UPDATE_PRODUCT_URL = env.baseUrl.cmsApi + '/OrderBuyForYou/GetProductUrl';
    public static UPDATE_ORDER_DETAIL_FROM_URL = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateProductFromUrl';
    public static UPDATE_ORDER_NOTE = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateNoteForOrderDetail';
    public static UPDATE_ORDER_PROATT = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateAttForOrderDetail';
    public static GET_EXPORT_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderBuyForYou/Export';
    public static UPDATE_TAX_ORDER_DETAILS = env.baseUrl.cmsApi + '/OrderBuyForYou/UpdateTaxOrderDetals';
    public static GET_ORDER_DETAILS_BY_ID = env.baseUrl.cmsApi + '/OrderBuyForYou/GetOrderDetailById';
    
    
    
    






    public static ORDER_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderMercari/GetJTable';
    public static ORDER_MERCARI_LIST_JTABLE_Pay_Price_Mercari = env.baseUrl.cmsApi + '/OrderMercari/GetJTableBuyPayPriceMercari';
    public static ORDER_MERCARI_LIST_JTABLE_MERCARI_BOUGHT = env.baseUrl.cmsApi + '/OrderMercari/GetJTableBuyMercariBought';
    public static ORDER_MERCARI_LIST_JTABLE_MERCARI_CANCEL = env.baseUrl.cmsApi + '/OrderMercari/GetJTableBuyMercariCancel';
    public static ORDER_MERCARI_LIST_TABLE = env.baseUrl.cmsApi + '/OrderMercari/gettable';
    public static ORDER_MERCARI_LIST_JTABLE_WAITING_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/GetJTableBuyWaitingBoughtMercari';
    public static ORDER_MERCARI_DETAIL = env.baseUrl.cmsApi + '/OrderMercari/GetOrderDetail';
    public static ORDER_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/OrderMercari/GetPayment';
    public static ORDER_MERCARI_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderMercari/GetOrderDetailPayment';
    public static ORDER_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderMercari/GetListCustomer';
    public static ORDER_MERCARI_UPDATE_DETAIL = env.baseUrl.cmsApi + '/OrderMercari/UpdateDetail';
    public static ORDER_MERCARI_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/OrderMercari/UpdateStatusDetail';
    public static ORDER_MERCARI_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderMercari/AddPaymentMercari';
    public static ORDER_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/OrderMercari/GetDetail';
    public static ORDER_MERCARI_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/OrderMercari/GetwalletByaccountId';
    public static ORDER_MERCARI_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderMercari/Getpaymentprofile';
    public static ORDER_MERCARI_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/OrderMercari/GetWalletbyId';
    public static ORDER_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderMercari/GetMessages';
    public static ORDER_MERCARI_CANCEL_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/OrderMercari/CancelOrderByForYou';
    public static ORDER_MERCARI_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderMercari/RequestCancelOrder';
    public static ORDER_MERCARI_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/OrderMercari/RequestApproveTempDeposit';
    public static ORDER_MERCARI_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderMercari/PreUpdate';
    public static ORDER_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderMercari/GetAllWarehouseActive';
    public static ORDER_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderMercari/GetCustomerInfo';
    public static ORDER_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderMercari/GetWalletInfo';
    public static ORDER_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderMercari/GetMemberShipInfo';
    public static ORDER_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderMercari/GetEmpInfo';
    public static ORDER_MERCARI_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/OrderMercari/GetOrderPayments';
    public static UPDATE_ORDER_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/UpdateOrderDetail';
    public static UPDATE_PRICE_ORDER_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/UpdateOrderPrice';
    public static GET_LIST_ORDER_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/GetListOrder';
    public static APPROVE_MANY_BUY_ORDER_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/RequestApproveManyTempDeposit';
    public static GET_LIST_MESSAGES_MANY_BUY_ORDER_MERCARI = env.baseUrl.cmsApi + '/OrderMercari/GetMessagesMany';
    public static ORDER_MERCARI_WALLET = env.baseUrl.cmsApi + '/OrderMercari/GetWallets';
    public static ORDER_MERCARI_ADD_RECHAGE = env.baseUrl.cmsApi + '/OrderMercari/AddRechange';
    public static ORDER_MERCARI_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderMercari/GetCustomerByAccountId';
    public static ORDER_MERCARI_PAY_ORDERS = env.baseUrl.cmsApi + '/OrderMercari/PayOrders';
    public static ORDER_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderMercari/GetSaler';
    public static ORDER_MERCARI_ADD_NEW_ORDER = env.baseUrl.cmsApi + '/OrderMercari/AddNewOrder';
    public static ORDER_MERCARI_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/OrderMercari/AddRechange';
    public static ORDER_MERCARI_GET_CUSTOMER_LEVEL = env.baseUrl.cmsApi + '/OrderMercari/GetCustomerProfile';
    public static ORDER_MERCARI_CUSTOMER_ADDRESS_BY_ACCOUNTID = env.baseUrl.cmsApi + '/OrderMercari/GetCustomerAddressByAccountId';
    public static ORDER_MERCARI_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderMercari/GetListTopCustomer';
    public static ORDER_MERCARI_UPDATE_PRODUCT_URL = env.baseUrl.cmsApi + '/OrderMercari/GetProductUrl';
    public static UPDATE_ORDER_MERCARI_DETAIL_FROM_URL = env.baseUrl.cmsApi + '/OrderMercari/UpdateProductFromUrl';
    public static ORDER_MERCARI_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderMercari/GetProductType';
    public static ORDER_MERCARI_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderMercari/GetAllProductOrigin';
    public static ORDER_MERCARI_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/OrderMercari/GetAllPaymentAccount';
    public static ORDER_WAITING_MERCARI_EXPORT = env.baseUrl.cmsApi + '/OrderMercari/ExportWaitingMercari';
    public static ORDER_MERCARI_BOUGHT_EXPORT = env.baseUrl.cmsApi + '/OrderMercari/ExportMercariBought';
    public static ORDER_MERCARI_EXPORT = env.baseUrl.cmsApi + '/OrderMercari/ExportOrderMercari';
    
    
    
    
    
    
    
    
    







    public static WAITING_BUY_YOU_LIST_JTABLE = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetJTable';
    public static WAITING_BUY_YOU_LIST_TABLE = env.baseUrl.cmsApi + '/WaitingBuyForYou/gettable';
    public static WAITING_BUY_YOU_DETAIL = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetOrderDetail';
    public static WAITING_BUY_YOU_PAYMENT = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetPayment';
    public static WAITING_BUY_YOU_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetOrderDetailPayment';
    public static WAITING_BUY_YOU_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetListCustomer';
    public static WAITING_BUY_YOU_UPDATE_DETAIL = env.baseUrl.cmsApi + '/WaitingBuyForYou/UpdateDetail';
    public static WAITING_BUY_YOU_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/WaitingBuyForYou/UpdateStatusDetail';
    public static WAITING_BUY_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/WaitingBuyForYou/Add';
    public static WAITING_BUY_YOU_GET_DETAIL = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetDetail';
    public static WAITING_BUY_YOU_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetwalletByaccountId';
    public static WAITING_BUY_YOU_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/WaitingBuyForYou/Getpaymentprofile';
    public static WAITING_BUY_YOU_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetWalletbyId';
    public static WAITING_BUY_YOU_GET_MESSAGES = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetMessages';
    public static WAITING_BUY_YOU_CANCEL_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/CancelOrderByForYou';
    public static WAITING_BUY_YOU_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/WaitingBuyForYou/RequestCancelOrder';
    public static WAITING_BUY_YOU_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/WaitingBuyForYou/RequestApproveTempDeposit';
    public static WAITING_BUY_YOU_PRE_UPDATE = env.baseUrl.cmsApi + '/WaitingBuyForYou/PreUpdate';
    public static WAITING_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetAllWarehouseActive';
    public static WAITING_BUY_YOU_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetCustomerInfo';
    public static WAITING_BUY_YOU_GET_WALLET_INFO = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetWalletInfo';
    public static WAITING_BUY_YOU_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetMemberShipInfo';
    public static WAITING_BUY_YOU_GET_EMP_INFO = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetEmpInfo';
    public static WAITING_BUY_YOU_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetOrderPayments';
    public static UPDATE_WAITING_BY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/UpdateOrderDetail';
    public static UPDATE_PRICE_WAITINGBY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/UpdateOrderPrice';
    public static GET_LIST_WAITING_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetListOrder';
    public static WAITING_APPROVE_MANY_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/RequestApproveManyTempDeposit';
    public static WAITING_GET_LIST_MESSAGES_MANY_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetMessagesMany';
    public static WAITING_BUY_FOR_YOU_WALLET = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetWallets';
    public static WAITING_BUY_FOR_YOU_ADD_RECHAGE = env.baseUrl.cmsApi + '/WaitingBuyForYou/AddRechange';
    public static WAITING_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetCustomerByAccountId';
    public static WAITING_BUY_YOU_PAY_ORDERS = env.baseUrl.cmsApi + '/WaitingBuyForYou/PayOrders';
    public static WAITING_BUY_FOR_YOU_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetSaler';
    public static WAITING_BUY_FOR_YOU_ADD_NEW_ORDER = env.baseUrl.cmsApi + '/WaitingBuyForYou/AddNewOrder';
    public static WAITING_BUY_FOR_YOU_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/WaitingBuyForYou/CreateDeposite';
    public static WAITING_BUY_FOR_YOU_GET_CUSTOMER_LEVEL = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetCustomerProfile';
    public static WAITING_CUSTOMER_ADDRESS_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingBuyForYou/GetCustomerAddressByAccountId';
    public static GET_EXPORT_WAITING_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingBuyForYou/Export';
    






    public static WAITING_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/WaitingMercari/GetJTable';
    public static WAITING_MERCARI_LIST_TABLE = env.baseUrl.cmsApi + '/WaitingMercari/gettable';
    public static WAITING_MERCARI_DETAIL = env.baseUrl.cmsApi + '/WaitingMercari/GetOrderDetail';
    public static WAITING_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/WaitingMercari/GetPayment';
    public static WAITING_MERCARI_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/WaitingMercari/GetOrderDetailPayment';
    public static WAITING_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/WaitingMercari/GetListCustomer';
    public static WAITING_MERCARI_UPDATE_DETAIL = env.baseUrl.cmsApi + '/WaitingMercari/UpdateDetail';
    public static WAITING_MERCARI_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/WaitingMercari/UpdateStatusDetail';
    public static WAITING_MERCARI_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/WaitingMercari/Add';
    public static WAITING_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/WaitingMercari/GetDetail';
    public static WAITING_MERCARI_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/WaitingMercari/GetwalletByaccountId';
    public static WAITING_MERCARI_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/WaitingMercari/Getpaymentprofile';
    public static WAITING_MERCARI_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/WaitingMercari/GetWalletbyId';
    public static WAITING_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/WaitingMercari/GetMessages';
    public static WAITING_MERCARI_CANCEL_ORDER_BUY_FOR_YOU = env.baseUrl.cmsApi + '/WaitingMercari/CancelOrderByForYou';
    public static WAITING_MERCARI_REQUEST_CANCEL_ORDER = env.baseUrl.cmsApi + '/WaitingMercari/RequestCancelOrder';
    public static WAITING_MERCARI_REQUEST_APPROVE_TEMP_DEPOSIT = env.baseUrl.cmsApi + '/WaitingMercari/RequestApproveTempDeposit';
    public static WAITING_MERCARI_PRE_UPDATE = env.baseUrl.cmsApi + '/WaitingMercari/PreUpdate';
    public static WAITING_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/WaitingMercari/GetAllWarehouseActive';
    public static WAITING_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/WaitingMercari/GetCustomerInfo';
    public static WAITING_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/WaitingMercari/GetWalletInfo';
    public static WAITING_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/WaitingMercari/GetMemberShipInfo';
    public static WAITING_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/WaitingMercari/GetEmpInfo';
    public static WAITING_MERCARI_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/WaitingMercari/GetOrderPayments';
    public static UPDATE_WAITING_MERCARI = env.baseUrl.cmsApi + '/WaitingMercari/UpdateOrderDetail';
    public static UPDATE_PRICE_WAITING_MERCARI = env.baseUrl.cmsApi + '/WaitingMercari/UpdateOrderPrice';
    public static GET_LIST_WAITING_MERCARI = env.baseUrl.cmsApi + '/WaitingMercari/GetListOrder';
    public static WAITING_APPROVE_MANY_MERCARI = env.baseUrl.cmsApi + '/WaitingMercari/RequestApproveManyTempDeposit';
    public static WAITING_GET_LIST_MESSAGES_MANY_MERCARI = env.baseUrl.cmsApi + '/WaitingMercari/GetMessagesMany';
    public static WAITING_MERCARI_WALLET = env.baseUrl.cmsApi + '/WaitingMercari/GetWallets';
    public static WAITING_MERCARI_ADD_RECHAGE = env.baseUrl.cmsApi + '/WaitingMercari/AddRechange';
    public static WAITING_MERCARI_CUSTOMER_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingMercari/GetCustomerByAccountId';
    public static WAITING_MERCARI_PAY_ORDERS = env.baseUrl.cmsApi + '/WaitingMercari/PayOrders';
    public static WAITING_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/WaitingMercari/GetSaler';
    public static WAITING_MERCARI_ADD_NEW_ORDER = env.baseUrl.cmsApi + '/WaitingMercari/AddNewOrder';
    public static WAITING_MERCARI_CREATE_DEPOSITE = env.baseUrl.cmsApi + '/WaitingMercari/CreateDeposite';
    public static WAITING_MERCARI_GET_CUSTOMER_LEVEL = env.baseUrl.cmsApi + '/WaitingMercari/GetCustomerProfile';
    public static WAITING_MERCARI_CUSTOMER_ADDRESS_BY_ACCOUNTID = env.baseUrl.cmsApi + '/WaitingMercari/GetCustomerAddressByAccountId';
    public static WAITING_MERCARI_EXPORT = env.baseUrl.cmsApi + '/WaitingMercari/ExportOrderMercari';
    
    
    
    
    
    
    




    public static ORDER_BUY_YOU_PRETREATMENT_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/GetJTable';
    public static ORDER_BUY_YOU_PRETREATMENT_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/GetOrderDetailPayment';
    public static ORDER_BUY_YOU_PRETREATMENT_PRE_UPDATE = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/PreUpdate';
    public static ORDER_BUY_YOU_PRETREATMENT_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/GetAllWarehouseActive';
    public static UPDATE_ORDER_DETAIL = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/UpdateOrderDetail';
    public static UPDATE_ORDER_PRICE = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/UpdateOrderPrice';
    public static ORDER_BUY_YOU_PRETREATMENT_PRE_UPDATE_STATUS = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/UpdateStatus';
    public static ORDER_BUY_YOU_PRETREATMENT_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderBuyForYouPretreatment/GetListTopCustomer';





    public static PURCHASE_BUY_YOU_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetJTable';
    public static GET_EXPORT_BUY_FOR_YOU_MH = env.baseUrl.cmsApi + '/PurchaseBuyForYou/Export';
    public static PURCHASE_BUY_YOU_LIST_TABLE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/gettable';
    public static PURCHASE_BUY_YOU_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetOrderDetail';
    public static PURCHASE_BUY_YOU_PAYMENT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetPayment';
    public static PURCHASE_BUY_YOU_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetOrderDetailPayment';
    public static PURCHASE_BUY_YOU_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetListCustomer';
    public static PURCHASE_BUY_YOU_UPDATE_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateDetail';
    public static PURCHASE_BUY_YOU_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateStatusDetail';
    public static PURCHASE_BUY_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/PurchaseBuyForYou/Add';
    public static PURCHASE_BUY_YOU_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetDetail';
    public static PURCHASE_BUY_YOU_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetwalletByaccountId';
    public static PURCHASE_BUY_YOU_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/Getpaymentprofile';
    public static PURCHASE_BUY_YOU_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetWalletbyId';
    public static PURCHASE_BUY_YOU_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetMessages';
    public static PURCHASE_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetAllWarehouseActive';
    public static PURCHASE_BUY_YOU_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseBuyForYou/Update';
    public static PURCHASE_BUY_YOU_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateTracking';
    public static PURCHASE_BUY_YOU_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseBuyForYou/RequestCancelOrder';
    public static PURCHASE_BUY_YOU_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/BuyProduct';
    public static PURCHASE_BUY_YOU_PAYMENT_ORDER = env.baseUrl.cmsApi + '/PurchaseBuyForYou/PaymentOrder';
    public static PURCHASE_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetCustomerInfo';
    public static PURCHASE_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetWalletInfo';
    public static PURCHASE_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetMemberShipInfo';
    public static PURCHASE_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetEmpInfo';
    public static PURCHASE_BUY_YOU_UPDATE_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateOrderNumberBuyForYou';
    public static PURCHASE_BUY_YOU_UPDATE_ORDER_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateWareHouse';
    public static PURCHASE_BUY_YOU_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetAllPaymentAccount';
    public static PURCHASE_BUY_YOU_UPDATE_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdatePaymentAccount';
    public static GET_LIST_ORDER_PURCHASEBUYFORYOU = env.baseUrl.cmsApi + '/PurchaseBuyForYou/GetListOrder';
    public static APPROVE_MANY_PURCHASE_BUY_FOR_YOU = env.baseUrl.cmsApi + '/PurchaseBuyForYou/BuyProductMany';
    public static UPDATE_AMOUNT_ORDER_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateAmountOrderDetail';
    public static UPDATE_PRICE_ORDER_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdatePriceOrderDetail';
    public static UPDATE_TAX_ORDER_DETAIL = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateTaxOrderDetail';
    public static UPDATE_SHIPPINGFREE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateShippingFree';
    public static PURCHASE_BUY_YOU_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateYCComplete';
    public static PURCHASE_BUY_YOU_IMPORT_TRACKING = env.baseUrl.cmsApi + '/PurchaseBuyForYou/ImportTracking';
    public static PURCHASE_BUY_YOU_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateTrackingExcel';
    public static PURCHASE_BUY_YOU_SPLIT_ORDER_BOUGHT = env.baseUrl.cmsApi + '/PurchaseBuyForYou/SplitOrderBought';
    public static PURCHASE_WAITING_BUYFORYOU_UPDATE_NOTE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateNoteOrDerDetail';
    public static URCHASE_BUY_YOU_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseBuyForYou/UpdateSurcharge';
    
    





    public static PURCHASE_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseMercari/GetJTable';
    public static GET_EXPORT_MERCARI_MH = env.baseUrl.cmsApi + '/PurchaseMercari/Export';
    public static PURCHASE_MERCARI_LIST_TABLE = env.baseUrl.cmsApi + '/PurchaseMercari/gettable';
    public static PURCHASE_MERCARI_DETAIL = env.baseUrl.cmsApi + '/PurchaseMercari/GetOrderDetail';
    public static PURCHASE_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/PurchaseMercari/GetPayment';
    public static PURCHASE_MERCARI_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseMercari/GetOrderDetailPayment';
    public static PURCHASE_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseMercari/GetListCustomer';
    public static PURCHASE_MERCARI_UPDATE_DETAIL = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateDetail';
    public static PURCHASE_MERCARI_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateStatusDetail';
    public static PURCHASE_MERCARI_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/PurchaseMercari/Add';
    public static PURCHASE_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseMercari/GetDetail';
    public static PURCHASE_MERCARI_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/PurchaseMercari/GetwalletByaccountId';
    public static PURCHASE_MERCARI_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/PurchaseMercari/Getpaymentprofile';
    public static PURCHASE_MERCARI_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/PurchaseMercari/GetWalletbyId';
    public static PURCHASE_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseMercari/GetMessages';
    public static PURCHASE_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseMercari/GetAllWarehouseActive';
    public static PURCHASE_MERCARI_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseMercari/Update';
    public static PURCHASE_MERCARI_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateTracking';
    public static PURCHASE_MERCARI_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseMercari/RequestCancelOrder';
    public static PURCHASE_MERCARI_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseMercari/BuyProduct';
    public static PURCHASE_MERCARI_PAYMENT_ORDER = env.baseUrl.cmsApi + '/PurchaseMercari/PaymentOrder';
    public static PURCHASE_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseMercari/GetCustomerInfo';
    public static PURCHASE_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseMercari/GetWalletInfo';
    public static PURCHASE_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseMercari/GetMemberShipInfo';
    public static PURCHASE_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseMercari/GetEmpInfo';
    public static PURCHASE_MERCARI_UPDATE_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateOrderNumberBuyForYou';
    public static PURCHASE_MERCARI_UPDATE_ORDER_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateWareHouse';
    public static PURCHASE_MERCARI_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseMercari/GetAllPaymentAccount';
    public static PURCHASE_MERCARI_UPDATE_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseMercari/UpdatePaymentAccount';
    public static GET_LIST_ORDER_PURCHASE_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/GetListOrder';
    public static APPROVE_MANY_PURCHASE_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/BuyProductMany';
    public static UPDATE_AMOUNT_ORDER_DETAIL_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateAmountOrderDetail';
    public static UPDATE_PRICE_ORDER_DETAIL_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/UpdatePriceOrderDetail';
    public static UPDATE_TAX_ORDER_DETAIL_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateTaxOrderDetail';
    public static UPDATE_SHIPPINGFREE_MERCARI = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateShippingFree';
    public static PURCHASE_MERCARI_UPDATE_YCCOMPLETE = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateYCComplete';
    public static PURCHASE_MERCARI_IMPORT_TRACKING = env.baseUrl.cmsApi + '/PurchaseMercari/ImportTracking';
    public static PURCHASE_MERCARI_CAP_NHAT_TRACKING = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateTrackingExcel';
    public static PURCHASE_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/PurchaseMercari/GetSaler';
    public static UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseMercari/UpdateSurcharge';
    
    
    
    public static PURCHASE_REPORT_UPDATE_AUC = env.baseUrl.cmsApi + '/PurchaseReport/UpdatePurchaseReport';
    public static PURCHASE_REPORT_GET_LIST = env.baseUrl.cmsApi + '/PurchaseReport/GetListPurchaseReport';
    public static PURCHASE_REPORT_DELETE = env.baseUrl.cmsApi + '/PurchaseReport/Delete';
    public static PURCHASE_REPORT_UPDATE_DG = env.baseUrl.cmsApi + '/PurchaseReport/AddNewPurchaseReportDG';
    public static PURCHASE_REPORT_GET_LIST_DG = env.baseUrl.cmsApi + '/PurchaseReport/GetListPurchaseReportDG';
    public static PURCHASE_REPORT_DELETE_DG = env.baseUrl.cmsApi + '/PurchaseReport/DeleteDG';
    public static PURCHASE_REPORT_UPDATE_ME = env.baseUrl.cmsApi + '/PurchaseReport/AddNewPurchaseReportME';
    public static PURCHASE_REPORT_GET_LIST_ME = env.baseUrl.cmsApi + '/PurchaseReport/GetListPurchaseReportME';
    public static PURCHASE_REPORT_DELETE_ME = env.baseUrl.cmsApi + '/PurchaseReport/DeleteME';
    public static PURCHASE_REPORT_UPDATE_MH = env.baseUrl.cmsApi + '/PurchaseReport/AddNewPurchaseReportMH';
    public static PURCHASE_REPORT_GET_LIST_MH = env.baseUrl.cmsApi + '/PurchaseReport/GetListPurchaseReportMH';
    public static PURCHASE_REPORT_DELETE_MH = env.baseUrl.cmsApi + '/PurchaseReport/DeleteMH';
    public static GET_ORDER_PURCHASE_REPORT = env.baseUrl.cmsApi + '/PurchaseReport/GetOrderPurchase';
    public static SEARCH_ORDER_PURCHASE_REPORT = env.baseUrl.cmsApi + '/PurchaseReport/SearchOrderPurchase';
    public static EXPORT_ORDER_PURCHASE_REPORT = env.baseUrl.cmsApi + '/PurchaseReport/ExportPurchase';
    public static GET_LIST_EMPS_PURCHASE_REPORT = env.baseUrl.cmsApi + '/PurchaseReport/GetListAccountId';
    public static PURCHASE_REPORT_SYNCDATA = env.baseUrl.cmsApi + '/PurchaseReport/PurchaseReportLoad';
    public static PURCHASE_REPORT_UPDATE_LOCK = env.baseUrl.cmsApi + '/PurchaseReport/UpdateLock';
    public static PURCHASE_REPORT_UPDATE_UNLOCK = env.baseUrl.cmsApi + '/PurchaseReport/UnLock';



    public static GET_PURCHASE_REPORT_MERCARI = env.baseUrl.cmsApi + '/PurchaseReportMercari/GetPurchaseReportMercari';
    public static GET_PURCHASE_REPORT_DATA_MERCARI = env.baseUrl.cmsApi + '/PurchaseReportMercari/GetPurchaseReportDataMercari';
    public static EXPORT_ORDER_PURCHASE_REPORT_MERCARI = env.baseUrl.cmsApi + '/PurchaseReportMercari/Export';


    

    public static GET_PURCHASE_REPORT_AUC = env.baseUrl.cmsApi + '/PurchaseReportAuc/GetPurchaseReportAuc';
    public static GET_PURCHASE_REPORT_DATA_AUC = env.baseUrl.cmsApi + '/PurchaseReportAuc/GetPurchaseReportDataAuc';
    public static EXPORT_ORDER_PURCHASE_REPORT_AUC = env.baseUrl.cmsApi + '/PurchaseReportAuc/Export';


    public static GET_PURCHASE_REPORT_DG = env.baseUrl.cmsApi + '/PurchaseReportDg/GetPurchaseReportdg';
    public static GET_PURCHASE_REPORT_DATA_DG = env.baseUrl.cmsApi + '/PurchaseReportDg/GetPurchaseReportDatadg';
    public static EXPORT_ORDER_PURCHASE_REPORT_DG = env.baseUrl.cmsApi + '/PurchaseReportDg/Export';


    public static GET_PURCHASE_REPORT_JPANDMH = env.baseUrl.cmsApi + '/PurchaseReportJPAndMH/GetPurchaseReportJpAndMh';
    public static GET_PURCHASE_REPORT_DATA_JPANDMH = env.baseUrl.cmsApi + '/PurchaseReportJPAndMH/GetPurchaseReportDataJpAndM';
    public static EXPORT_ORDER_PURCHASE_REPORT_JPANDMH = env.baseUrl.cmsApi + '/PurchaseReportJPAndMH/Export';
    
    
    
    
    
    

    
    
    
    
    

    
    
    
    




    public static PURCHASE_WAITING_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseWaiting/GetJTable';
    public static PURCHASE_WAITING_LIST_TABLE = env.baseUrl.cmsApi + '/PurchaseWaiting/gettable';
    public static PURCHASE_WAITING_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaiting/GetOrderDetail';
    public static PURCHASE_WAITING_PAYMENT = env.baseUrl.cmsApi + '/PurchaseWaiting/GetPayment';
    public static PURCHASE_WAITING_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseWaiting/GetOrderDetailPayment';
    public static PURCHASE_WAITING_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseWaiting/GetListCustomer';
    public static PURCHASE_WAITING_UPDATE_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateDetail';
    public static PURCHASE_WAITING_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateStatusDetail';
    public static PURCHASE_WAITING_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/PurchaseWaiting/Add';
    public static PURCHASE_WAITING_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaiting/GetDetail';
    public static PURCHASE_WAITING_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/PurchaseWaiting/GetwalletByaccountId';
    public static PURCHASE_WAITING_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/PurchaseWaiting/Getpaymentprofile';
    public static PURCHASE_WAITING_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/PurchaseWaiting/GetWalletbyId';
    public static PURCHASE_WAITING_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseWaiting/GetMessages';
    public static PURCHASE_WAITING_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseWaiting/GetAllWarehouseActive';
    public static PURCHASE_WAITING_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseWaiting/Update';
    public static PURCHASE_WAITING_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateTracking';
    public static PURCHASE_WAITING_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseWaiting/RequestCancelOrder';
    public static PURCHASE_WAITING_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseWaiting/BuyProduct';
    public static PURCHASE_PURCHASE_WAITING_PAYMENT_ORDER = env.baseUrl.cmsApi + '/PurchaseWaiting/PaymentOrder';
    public static PURCHASE_WAITING_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseWaiting/GetCustomerInfo';
    public static PURCHASE_WAITING_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseWaiting/GetWalletInfo';
    public static PURCHASE_WAITING_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseWaiting/GetMemberShipInfo';
    public static PURCHASE_WAITING_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseWaiting/GetEmpInfo';
    public static PURCHASE_PURCHASE_WAITINGUPDATE_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateOrderNumberBuyForYou';
    public static PURCHASE_WAITING_UPDATE_ORDER_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateWareHouse';
    public static PURCHASE_WAITING_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseWaiting/GetAllPaymentAccount';
    public static PURCHASE_WAITING_UPDATE_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdatePaymentAccount';
    public static GET_LIST_ORDER_PURCHASE_WAITING = env.baseUrl.cmsApi + '/PurchaseWaiting/GetListOrder';
    public static APPROVE_MANY_PURCHASE_WAITING = env.baseUrl.cmsApi + '/PurchaseWaiting/BuyProductMany';
    public static PURCHASE_WAITING_GET_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseWaiting/GetListTopCustomer';
    public static GET_EXPORT_MH = env.baseUrl.cmsApi + '/PurchaseWaiting/Export';
    public static PURCHASE_WAITTING_SPLIT_ORDER_WAIT_FOR_BUY = env.baseUrl.cmsApi + '/PurchaseWaiting/SplitOrderWaitForBuy';
    public static PURCHASE_WAITTING_ORDER_DETAIL_UPDATE_STATUS = env.baseUrl.cmsApi + '/PurchaseWaiting/OrderDetailUpdateStatus';
    public static PURCHASE_WAITTING_UPDATE_ORDERDETAIL = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateShippingFreeOrderDetail';
    public static PURCHASE_WAITING_UPDATE_NOTE = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateNoteOrDerDetail';
    public static PURCHASE_WAITTING_GET_ORDERDETAIL_BY_ID = env.baseUrl.cmsApi + '/PurchaseWaiting/GetOrderById';
    public static PURCHASE_WAITING_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseWaiting/UpdateSurcharge';
    
    
    
    



    public static PURCHASE_WAITING_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetJTable';
    public static PURCHASE_WAITING_MERCARI_LIST_TABLE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/gettable';
    public static PURCHASE_WAITING_MERCARI_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetOrderDetail';
    public static PURCHASE_WAITING_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetPayment';
    public static PURCHASE_WAITING_MERCARI_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetOrderDetailPayment';
    public static PURCHASE_WAITING_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetListCustomer';
    public static PURCHASE_WAITING_MERCARI_UPDATE_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateDetail';
    public static PURCHASE_WAITING_MERCARI_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateStatusDetail';
    public static PURCHASE_WAITING_MERCARI_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/Add';
    public static PURCHASE_WAITING_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetDetail';
    public static PURCHASE_WAITING_MERCARI_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetwalletByaccountId';
    public static PURCHASE_WAITING_MERCARI_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/Getpaymentprofile';
    public static PURCHASE_WAITING_MERCARI_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetWalletbyId';
    public static PURCHASE_WAITING_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetMessages';
    public static PURCHASE_WAITING_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetAllWarehouseActive';
    public static PURCHASE_WAITING_MERCARI_UPDATE_ORDER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/Update';
    public static PURCHASE_WAITING_MERCARI_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateTracking';
    public static PURCHASE_WAITING_MERCARI_CANCEL_ORDER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/RequestCancelOrder';
    public static PURCHASE_WAITING_MERCARI_BUY_PRODUCT = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/BuyProduct';
    public static PURCHASE_PURCHASE_WAITING_MERCARI_PAYMENT_ORDER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/PaymentOrder';
    public static PURCHASE_WAITING_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetCustomerInfo';
    public static PURCHASE_WAITING_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetWalletInfo';
    public static PURCHASE_WAITING_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetMemberShipInfo';
    public static PURCHASE_WAITING_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetEmpInfo';
    public static PURCHASE_PURCHASE_WAITING_MERCARI_UPDATE_ORDER_NUMBER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateOrderNumberBuyForYou';
    public static PURCHASE_WAITING_MERCARI_UPDATE_ORDER_WAREHOUSE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateWareHouse';
    public static PURCHASE_WAITING_MERCARI_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetAllPaymentAccount';
    public static PURCHASE_WAITING_MERCARI_UPDATE_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdatePaymentAccount';
    public static GET_LIST_ORDER_PURCHASE_WAITING_MERCARI = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetListOrder';
    public static APPROVE_MANY_PURCHASE_WAITING_MERCARI = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/BuyProductMany';
    public static PURCHASE_WAITING_MERCARI_GET_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetListTopCustomer';
    public static GET_EXPORT_WAITING_MERCARI = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/Export';
    public static PURCHASE_WAITING_MERCARI_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetProductType';
    public static PURCHASE_WAITING_MERCARI_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetAllProductOrigin';
    public static PURCHASE_WAITING_MERCARI_UPDATE_PRODUCT_TYPE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateProductType';
    public static PURCHASE_WAITING_MERCARI_UPDATE_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateProductOrigin';
    public static PURCHASE_WAITING_MERCARI_UPDATE_STATE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateState';
    public static PURCHASE_WAITING_MERCARI_UPDATE_SHIPPINGFREE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateShippingFree';
    public static PURCHASE_WAITING_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/GetSaler';
    public static PURCHASE_WAITING_MERCARI_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/PurchaseWaitingMercari/UpdateSurcharge';
    
    
    







    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetJTable';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_LIST_TABLE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/gettable';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_DETAIL = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetOrderDetail';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_PAYMENT = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetPayment';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetOrderDetailPayment';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_LIST_CUSTOMER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetListCustomer';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_DETAIL = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateDetail';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateStatusDetail';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/OrderPayPriceMercari/Add';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_DETAIL = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetDetail';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetwalletByaccountId';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/Getpaymentprofile';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetWalletbyId';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_MESSAGES = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetMessages';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetAllWarehouseActive';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_ORDER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/Update';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateTracking';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_CANCEL_ORDER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/RequestCancelOrder';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_BUY_PRODUCT = env.baseUrl.cmsApi + '/OrderPayPriceMercari/BuyProduct';
    public static PURCHASE_PURCHASE_ORDER_PAY_PRICE_MERCARI_PAYMENT_ORDER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/PaymentOrder';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetCustomerInfo';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_WALLET_INFO = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetWalletInfo';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetMemberShipInfo';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_EMP_INFO = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetEmpInfo';
    public static PURCHASE_PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_ORDER_NUMBER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateOrderNumberBuyForYou';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_ORDER_WAREHOUSE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateWareHouse';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_ALL_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetAllPaymentAccount';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_PAYMENT_ACCOUNT = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdatePaymentAccount';
    public static GET_LIST_ORDER_PURCHASE_ORDER_PAY_PRICE_MERCARI = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetListOrder';
    public static APPROVE_MANY_PURCHASE_ORDER_PAY_PRICE_MERCARI = env.baseUrl.cmsApi + '/OrderPayPriceMercari/BuyProductMany';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetListTopCustomer';
    public static GET_EXPORT_ORDER_PAY_PRICE_MERCARI = env.baseUrl.cmsApi + '/OrderPayPriceMercari/Export';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetProductType';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_ALL_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetAllProductOrigin';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateProductType';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_PRODUCT_ORIGIN = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateProductOrigin';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_STATE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateState';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_SHIPPINGFREE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateShippingFree';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderPayPriceMercari/GetSaler';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_BidStatus = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateBibStatus';
    public static PURCHASE_ORDER_PAY_PRICE_MERCARI_UPDATE_SURCHARGE = env.baseUrl.cmsApi + '/OrderPayPriceMercari/UpdateSurcharge';
    
    
    
    
    
    
    
    


    



    public static QUOTE_BUY_YOU_LIST_JTABLE = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetJTable';
    public static QUOTE_BUY_YOU_LIST_TABLE = env.baseUrl.cmsApi + '/QuoteBuyForYou/gettable';
    public static QUOTE_BUY_YOU_DETAIL = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetOrderDetail';
    public static QUOTE_BUY_YOU_PAYMENT = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetPayment';
    public static QUOTE_BUY_YOU_DETAIL_PAYMENT = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetOrderDetailPayment';
    public static QUOTE_BUY_YOU_LIST_CUSTOMER = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetListCustomer';
    public static QUOTE_BUY_YOU_UPDATE_DETAIL = env.baseUrl.cmsApi + '/QuoteBuyForYou/UpdateDetail';
    public static QUOTE_BUY_YOU_UPDATE_STATUS_DETAIL = env.baseUrl.cmsApi + '/QuoteBuyForYou/UpdateStatusDetail';
    public static QUOTE_BUY_YOU_PAYMENT_ADD_REQUEST = env.baseUrl.cmsApi + '/QuoteBuyForYou/Add';
    public static QUOTE_BUY_YOU_GET_DETAIL = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetDetail';
    public static QUOTE_BUY_YOU_GET_WALLET_TRANS = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetwalletByaccountId';
    public static QUOTE_BUY_YOU_GET_PAYMENT_PROFILE = env.baseUrl.cmsApi + '/QuoteBuyForYou/Getpaymentprofile';
    public static QUOTE_BUY_YOU_GET_WALLET_BY_WALLETID = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetWalletbyId';
    public static QUOTE_BUY_YOU_GET_MESSAGES = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetMessages';
    public static QUOTE_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetAllWarehouseActive';
    public static QUOTE_BUY_YOU_UPDATE_ORDER = env.baseUrl.cmsApi + '/QuoteBuyForYou/Update';
    public static QUOTE_BUY_YOU_UPDATE_ORDER_TRACKING = env.baseUrl.cmsApi + '/QuoteBuyForYou/UpdateTracking';

    public static QUOTE_BUY_YOU_CANCEL_ORDER = env.baseUrl.cmsApi + '/QuoteBuyForYou/RequestCancelOrder';
    public static QUOTE_BUY_YOU_BUY_PRODUCT = env.baseUrl.cmsApi + '/QuoteBuyForYou/BuyProduct';
    public static QUOTE_BUY_YOU_PAYMENT_ORDER = env.baseUrl.cmsApi + '/QuoteBuyForYou/PaymentOrder';
    public static QUOTE_BUY_YOU_GET_CUSTOMER_INFO = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetCustomerInfo';
    public static QUOTE_BUY_YOU_GET_WALLET_INFO = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetWalletInfo';
    public static QUOTE_BUY_YOU_GET_MEMBERSHIP_INFO = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetMemberShipInfo';
    public static QUOTE_BUY_YOU_GET_EMP_INFO = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetEmpInfo';
    public static QUOTE_BUY_FOR_YOU_UPDATE = env.baseUrl.cmsApi + '/QuoteBuyForYou/QuoteBuyForYouUpdate';
    public static BUYFORYOU_QUOTE_GET_ORDER_PAYMENTS = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetOrderPayments';
    public static BUYFORYOU_QUOTE_PAYMENT_ORDER_MULTI = env.baseUrl.cmsApi + '/QuoteBuyForYou/PaymentOrderMulti';
    public static QUOTE_BUY_YOU_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/QuoteBuyForYou/GetSaler';
    public static QUOTE_BUY_YOU_UPDATE_ORDERDETAILS_PRICE = env.baseUrl.cmsApi + '/QuoteBuyForYou/UpdatePriceForOrderDetails';
    public static QUOTE_BUY_YOU_UPDATE_ORDERDETAILS_SHIPPINGFEE = env.baseUrl.cmsApi + '/QuoteBuyForYou/UpdateShippingFeeForOrderDetails';
    public static EXPORT_BUYFORYOU_QUOTE = env.baseUrl.cmsApi + '/QuoteBuyForYou/Export';
    
    
    
    
    
    

    public static GET_WORK_FLOW = env.baseUrl.cmsApi + '/Workflow/Get';
    public static GET_DOT_WITH_HISTORY = env.baseUrl.cmsApi + '/workflow/dotwithhistory';



    public static BID_EXTERNALCONFIG_LIST_JTABLE = env.baseUrl.cmsApi + '/BidExternalConfig/GetJTable';
    public static BID_LIST_TOP_CUSTOMER = env.baseUrl.cmsApi + '/BidExternalConfig/GetListTopCustomer';
    public static BID_LIST_CUSTOMER = env.baseUrl.cmsApi + '/BidExternalConfig/GetListCustomer';
    public static BID_EXTERNALCONFIG_ADD = env.baseUrl.cmsApi + '/BidExternalConfig/Add';
    public static BID_EXTERNALCONFIG_DELETE = env.baseUrl.cmsApi + '/BidExternalConfig/Delete';
    public static BID_EXTERNALCONFIG_DETAIL = env.baseUrl.cmsApi + '/BidExternalConfig/GetDetail';
    public static BID_EXTERNALCONFIG_UPDATE = env.baseUrl.cmsApi + '/BidExternalConfig/Update';


    public static IS4_ACCESS_GET_RESOURCES = env.baseUrl.cmsApi + '/Access/GetResources';
    public static IS4_ACCESS_CHECK_PERMISSION = env.baseUrl.cmsApi + '/Access/CheckPermission';

    public static ORDER_TRANSPORT_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderTransport/GetJTable';
    public static ORDER_TRANSPORT_ADD = env.baseUrl.cmsApi + '/OrderTransport/Add';
    public static ORDER_TRANSPORT_DETAIL = env.baseUrl.cmsApi + '/OrderTransport/GetDetail';
    public static ORDER_TRANSPORT_UPDATE = env.baseUrl.cmsApi + '/OrderTransport/Update';
    public static ORDER_TRANSPORT_GET_LIST_CUSTOMER_ADDRESS = env.baseUrl.cmsApi + '/OrderTransport/GetListCustomerAddress';
    public static ORDER_TRANSPORT_GET_ALL_ORDER_SERVICE = env.baseUrl.cmsApi + '/OrderTransport/GetAllOrderService';
    public static ORDER_TRANSPORT_GET_ALL_WARE_HOUSE = env.baseUrl.cmsApi + '/OrderTransport/GetAllWarehouse';
    public static ORDER_TRANSPORT_GET_ALL_PRODUCT_TYPE = env.baseUrl.cmsApi + '/OrderTransport/GetAllProductType';
    public static ORDER_TRANSPORT_GET_EMPLOYEE_SALER = env.baseUrl.cmsApi + '/OrderTransport/GetSaler';
    public static ORDER_TRANSPORT_UPDATE_STATUS = env.baseUrl.cmsApi + '/OrderTransport/UpdateStatus';
    
    

    public static ORDER_SERVICE_LIST_JTABLE = env.baseUrl.cmsApi + '/OrderService/GetJTable';
    public static ORDER_SERVICE_ADD = env.baseUrl.cmsApi + '/OrderService/Add';
    public static ORDER_SERVICE_UPDATE = env.baseUrl.cmsApi + '/OrderService/Update';
    public static ORDER_SERVICE_DELETE = env.baseUrl.cmsApi + '/OrderService/Delete';
    public static ORDER_SERVICE_GET_DETAIL = env.baseUrl.cmsApi + '/OrderService/GetDetail';

    public static PRODUCT_TYPE_LIST_JTABLE = env.baseUrl.cmsApi + '/ProductType/GetJTable';
    public static PRODUCT_TYPE_ADD = env.baseUrl.cmsApi + '/ProductType/Add';
    public static PRODUCT_TYPE_UPDATE = env.baseUrl.cmsApi + '/ProductType/Update';
    public static PRODUCT_TYPE_DELETE = env.baseUrl.cmsApi + '/ProductType/Delete';
    public static PRODUCT_TYPE_GET_DETAIL = env.baseUrl.cmsApi + '/ProductType/GetDetail';
    public static PRODUCTTYPE_LIST = env.baseUrl.cmsApi + '/ProductType/GetListSort';
    public static PRODUCTTYPE_SORT = env.baseUrl.cmsApi + '/ProductType/UpdateSort';
    
    

    public static ORDER_TYPE_AUCTION = 'AUCTION';
    public static ORDER_TYPE_SHOPPING = 'YAHOO_SHOPPING';
    public static ORDER_TYPE_RAKUTEN = 'RAKUTEN';
    public static ORDER_TYPE_AMAZON = 'AMAZON';

    public static get GetAuthenToken(): string {
        return localStorage.getItem(this.LOCAL_STORAGE_AUTHEN_KEY);
    }

    public static buildUrl(params: string[]): string {
        const url = params.join('');
        return url;
    }



    public static buildUrlWithBaseCDN(relativeUrl: string): string {
        const params = [this.CDN_URL, relativeUrl];
        const url = this.buildUrl(params);
        return url;
    }
}

export class OrderState {
    public static DON_MOI = 'DON_MOI';
    public static CHO_XU_LY_HUY_DON = 'CHO_XU_LY_HUY_DON';
    public static DA_HUY_DON = 'DA_HUY_DON';
    public static KET_THUC_DON_HANG = 'KET_THUC_DON_HANG';

    public static CHO_XU_LY_TAM_UNG = 'CHO_XU_LY_TAM_UNG';
    public static CHO_MUA_HANG = 'CHO_MUA_HANG';
    public static DA_MUA_HANG = 'DA_MUA_HANG';
    public static CHO_XL_DE_NGHI_TT = 'CHO_XL_DE_NGHI_TT';
    public static CHO_TT_DON_HANG = 'CHO_TT_DON_HANG';
    public static LUU_KHO = 'LUU_KHO';
    public static DA_THANH_TOAN = 'DA_THANH_TOAN';
    public static DA_GIAO_HANG = 'DA_GIAO_HANG';

    public static orderStateDisplay = [{
        state: OrderState.DON_MOI, display: 'Đơn mới'
    }, {
        state: OrderState.CHO_XU_LY_HUY_DON, display: 'Chờ huỷ đơn'
    }, {
        state: OrderState.DA_HUY_DON, display: 'Đã huỷ đơn'
    }, {
        state: OrderState.KET_THUC_DON_HANG, display: 'Đã kết thúc'
    }, {
        state: OrderState.CHO_XU_LY_TAM_UNG, display: 'Chờ xử lý tạm ứng'
    }, {
        state: OrderState.CHO_MUA_HANG, display: 'Chờ mua hàng'
    }, {
        state: OrderState.DA_MUA_HANG, display: 'Đã mua hàng'
    }, {
        state: OrderState.CHO_XL_DE_NGHI_TT, display: 'Chờ xử lý đề nghị thanh toán'
    }, {
        state: OrderState.CHO_TT_DON_HANG, display: 'Chờ thanh toán'
    }, {
        state: OrderState.LUU_KHO, display: 'Lưu kho'
    }, {
        state: OrderState.DA_THANH_TOAN, display: 'Đã thanh toán'
    }, {
        state: OrderState.DA_GIAO_HANG, display: 'Đã giao hàng'
    },];

    public static getDisplayState(currentState: string): string {
        const orderStatusDisplay = OrderState.orderStateDisplay.find(item => item.state === currentState);

        if (orderStatusDisplay) {
            return orderStatusDisplay.display;
        }

        return 'Không xác định';
    }
}

export class OrderStatus {
    public static CHO_XU_LY = 0;
    public static TAM_UNG = 1;

    public static orderStatusDisplaySearch = [{
        status: 0, display: "Chờ xử lý"
    }, {
        status: 1, display: "Tạm ứng"
    },]

    public static orderStateDisplay = [{
        state: OrderStatus.CHO_XU_LY, display: 'Chờ xử lý'
    }, {
        state: OrderStatus.TAM_UNG, display: 'Tạm ứng'
    }, {
        state: 2, display: 'Mua hàng'
    }, {
        state: 3, display: 'Vận chuyển quốc tế'
    }, {
        state: 4, display: 'Thanh toán'
    }, {
        state: 5, display: 'Đang giao hàng'
    }, {
        state: 6, display: 'Đã giao hàng'
    }, {
        state: 7, display: 'Yêu cầu huỷ'
    }, {
        state: 8, display: 'Đã huỷ'
    }];

    public static getDisplayState(currentState: number): string {
        const orderStatusDisplay = OrderStatus.orderStateDisplay.find(item => item.state === currentState);

        if (orderStatusDisplay) {
            return orderStatusDisplay.display;
        }

        return 'Không xác định';
    }

    public static getOrderStatusCanPreUpdates() {
        const orderStatusCanPreUpdateKeys = [
            OrderStatus.CHO_XU_LY,
            OrderStatus.TAM_UNG
        ];

        return OrderStatus.orderStateDisplay.filter(item => orderStatusCanPreUpdateKeys.findIndex(item2 => item.state == item2) >= 0);
    }
}

export class OrderTrigger {
    public static YEU_CAU_HUY_DON = "YEU_CAU_HUY_DON";
    public static TU_DONG_DUYET_MUA_HANG = "TU_DONG_DUYET_MUA_HANG";
    public static DUYET_HUY_DON = "DUYET_HUY_DON";
    public static TU_CHOI_DUYET_HUY_DON = "TU_CHOI_DUYET_HUY_DON";
    public static TU_DONG_KET_THUC_DON_HANG = "TU_DONG_KET_THUC_DON_HANG";

    public static HUY_DON_MUA_HO = "HUY_DON_MUA_HO";
    public static YEU_CAU_DUYET_TAM_UNG = "YEU_CAU_DUYET_TAM_UNG";
    public static TU_CHOI_YEU_CAU_DUYET_TAM_UNG = "TU_CHOI_YEU_CAU_DUYET_TAM_UNG";
    public static DUYET_TAM_UNG = "DUYET_TAM_UNG";

    public static MUA_HANG = "MUA_HANG";
    public static DE_NGHI_THANH_TOAN = "DE_NGHI_THANH_TOAN";
    public static DUYET_DE_NGHI_THANH_TOAN = "DUYET_DE_NGHI_THANH_TOAN";
    public static TU_CHOI_DE_NGHI_THANH_TOAN = "TU_CHOI_DE_NGHI_THANH_TOAN";
    public static TU_CHOI_THANH_TOAN = "TU_CHOI_THANH_TOAN";
    public static DUYET_THANH_TOAN = "DUYET_THANH_TOAN";

    public static GIAO_HANG = "GIAO_HANG";
}

export class WorkflowTranslateGraph {
    public static defines = [{
        workflowType: "OrderWorkflow",
        states: [{
            key: OrderState.DON_MOI,
            text: "ĐƠN MỚI"
        }, {
            key: OrderState.CHO_XU_LY_HUY_DON,
            text: "CHỜ XL HỦY ĐƠN"
        }, {
            key: OrderState.DA_HUY_DON,
            text: "ĐÃ HỦY ĐƠN"
        }, {
            key: OrderState.KET_THUC_DON_HANG,
            text: "KẾT THÚC"
        }, {
            key: OrderState.CHO_XU_LY_TAM_UNG,
            text: "CHỜ XL TẠM ỨNG"
        }, {
            key: OrderState.CHO_MUA_HANG,
            text: "CHỜ MUA HÀNG"
        }, {
            key: OrderState.DA_MUA_HANG,
            text: "ĐÃ MUA HÀNG"
        }, {
            key: OrderState.CHO_XL_DE_NGHI_TT,
            text: "CHỜ XL ĐỀ NGHỊ TT"
        }, {
            key: OrderState.CHO_TT_DON_HANG,
            text: "CHỜ TT ĐƠN HÀNG"
        }, {
            key: OrderState.LUU_KHO,
            text: "LƯU KHO"
        }, {
            key: OrderState.DA_THANH_TOAN,
            text: "ĐÃ THANH TOÁN"
        }, {
            key: OrderState.DA_GIAO_HANG,
            text: "ĐÃ GIAO HÀNG"
        }],
        triggers: [{
            key: OrderTrigger.TU_DONG_DUYET_MUA_HANG,
            text: "tự động duyệt mua hàng"
        },{
            key: OrderTrigger.YEU_CAU_HUY_DON,
            text: "y/c hủy đơn"
        }, {
            key: OrderTrigger.DUYET_HUY_DON,
            text: "duyệt hủy đơn"
        }, {
            key: OrderTrigger.TU_CHOI_DUYET_HUY_DON,
            text: "từ chối"
        }, {
            key: OrderTrigger.TU_DONG_KET_THUC_DON_HANG,
            text: "auto"
        }, {
            key: OrderTrigger.HUY_DON_MUA_HO,
            text: "hủy đơn mua hộ"
        }, {
            key: OrderTrigger.YEU_CAU_DUYET_TAM_UNG,
            text: "y/c duyệt tạm ứng"
        }, {
            key: OrderTrigger.TU_CHOI_YEU_CAU_DUYET_TAM_UNG,
            text: "từ chối"
        }, {
            text: "từ chối"
        }, {
            key: OrderTrigger.DUYET_TAM_UNG,
            text: "duyệt tạm ứng"
        }, {
            key: OrderTrigger.MUA_HANG,
            text: "mua hàng"
        }, {
            key: OrderTrigger.DE_NGHI_THANH_TOAN,
            text: "đề nghị thanh toán"
        }, {
            key: OrderTrigger.DUYET_DE_NGHI_THANH_TOAN,
            text: 'duyệt đề nghị tt'
        }, {
            key: OrderTrigger.TU_CHOI_DE_NGHI_THANH_TOAN,
            text: 'từ chối'
        }, {
            key: OrderTrigger.TU_CHOI_THANH_TOAN,
            text: 'không thanh toán'
        }, {
            key: OrderTrigger.DUYET_THANH_TOAN,
            text: 'duyệt thanh toán'
        }, {
            key: OrderTrigger.GIAO_HANG,
            text: 'giao hàng'
        }]
    }];

    public static translate(content: string): string {
        const defines = WorkflowTranslateGraph.defines.filter(item => content.indexOf(item.workflowType) >= 0);

        if (!defines || defines.length == 0) {
            return content;
        }

        const define = defines[0];

        define.states.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        define.triggers.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        return content;
    }
}

export class PaymentType {
    public static PAY_ORDER = 'PAY_ORDER';
    public static CANCEL_ORDER = 'CANCEL_ORDER';

    public static defines = [
        { id: PaymentType.PAY_ORDER, name: 'Thanh toán' },
        { id: PaymentType.CANCEL_ORDER, name: 'Hủy thanh toán' }
    ];

    public static getDisplay(id: string): string {
        const item = PaymentType.defines.find(item => item.id === id);

        if (item) {
            return item.name;
        }

        return 'Không xác định';
    }
}

export class PaymentForm {
    public static WALLET = 'WALLET';
    public static ATM = 'ATM';
    public static BANKING = 'BANKING';
    public static CASH = 'CASH';

    public static defines = [
        { id: PaymentForm.WALLET, name: 'WALLET' },
        { id: PaymentForm.ATM, name: 'ATM' },
        { id: PaymentForm.BANKING, name: 'BANKING' },
        { id: PaymentForm.CASH, name: 'CASH' },
    ];

    public static getDisplay(id: string): string {
        const item = PaymentForm.defines.find(item => item.id === id);

        if (item) {
            return item.name;
        }

        return 'Không xác định';
    }
}

export class DeliveryPartner {
    public static VIETTEL_POST = 'ViettelPost';
    public static EMS = 'EMS';

    public static defines = [
        { key: DeliveryPartner.VIETTEL_POST, text: 'ViettelPost' },
        { key: DeliveryPartner.EMS, text: 'EMS' }
    ];

    public static getDisplay(key: string): string {
        const item = DeliveryPartner.defines.find(item => item.key === key);

        if (item) {
            return item.text;
        }

        return 'Không xác định';
    }
}

export class FreezeAddDefault {
    public static RefTypeDefault = null;

    public static TypeDefault = null;
}


export class OrderRefType {
    public static AUCTION = 'AUCTION';
    public static YAHOO_SHOPPING = 'YAHOO_SHOPPING';
    public static RAKUTEN = 'RAKUTEN';
    public static MERCARI = 'MERCARI';
    public static AMAZON = 'AMAZON';
    public static WEBLINK = 'WEBLINK';
    public static orderBuyList = [
        { id: OrderRefType.YAHOO_SHOPPING, name: 'Yahoo! Shopping' },
        { id: OrderRefType.RAKUTEN, name: 'Rakuten' },
        { id: OrderRefType.MERCARI, name: 'Mercari' },
        { id: OrderRefType.AMAZON, name: 'AMAZON' },
        { id: OrderRefType.WEBLINK, name: 'WEBLINK' }
    ];
    public static auctionList = [
        { id: OrderRefType.AUCTION, name: 'Yahoo! Auction' }
    ];
    public static allList = [
        { id: OrderRefType.AUCTION, name: 'Yahoo! Auction' },
        { id: OrderRefType.YAHOO_SHOPPING, name: 'Yahoo! Shopping' },
        { id: OrderRefType.RAKUTEN, name: 'Rakuten' },
        { id: OrderRefType.MERCARI, name: 'Mercari' },
        { id: OrderRefType.AMAZON, name: 'AMAZON' },
        { id: OrderRefType.WEBLINK, name: 'WEBLINK' }
    ];
    public static getDisplay(id: string): string {
        const item = OrderRefType.orderBuyList.find(item => item.id === id);

        if (item) {
            return item.name;
        }

        return 'Không xác định';
    }
}


export class OrderDeposits {
    public static KHOI_TAO = 'KHOI_TAO';
    public static DA_DUYET_CAP_1 = 'DA_DUYET_CAP_1';
    public static DA_DUYET_CAP_2 = 'DA_DUYET_CAP_2';
    public static DA_DUYET_CAP_3 = 'DA_DUYET_CAP_3';
    public static TU_CHOI = 'TU_CHOI';
    public static KET_THUC = 'KET_THUC';
    public static HUY = 'HUY';
    public static DA_HUY = 'DA_HUY';
    public static AUTO = 'AUTO';

    public static XL_TU_DONG_DUYET = 'XL_TU_DONG_DUYET';
    public static XL_TU_DONG_HUY = 'XL_TU_DONG_HUY';

    public static DUYET_CAP_1 = 'DUYET_CAP_1';
    public static DUYET_CAP_2 = 'DUYET_CAP_2';
    public static DUYET_CAP_3 = 'DUYET_CAP_3';
    public static TU_DONG_KET_THUC = 'TU_DONG_KET_THUC';
    public static CHO_XL_TU_DONG_DUYET = 'CHO_XL_TU_DONG_DUYET';
    public static CHO_XL_TU_DONG_HUY = 'CHO_XL_TU_DONG_HUY';

    public static orderDepositsDisplay = [{
        state: OrderDeposits.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderDeposits.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderDeposits.DUYET_CAP_1, display: 'Duyệt cấp 1'
    }, {
        state: OrderDeposits.DUYET_CAP_2, display: 'Duyệt cấp 2'
    }, {
        state: OrderDeposits.DUYET_CAP_3, display: 'Duyệt cấp 3'
    }, {
        state: OrderDeposits.TU_DONG_KET_THUC, display: 'Tự động kết thúc'
    }, {
        state: OrderDeposits.TU_CHOI, display: 'Từ chối'
    }, {
        state: OrderDeposits.AUTO, display: 'Tự động xử lý'
    }
    ];

    public static orderDepositsState = [{
        state: OrderDeposits.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderDeposits.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderDeposits.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderDeposits.AUTO, display: 'Tự động xử lý'
    }];
}



export class DepositsWorkflowTranslateGraph {
    public static defines = [{
        workflowType: 'DEPOSIT_WORKFLOW',
        states: [{
            key: OrderDeposits.KHOI_TAO,
            text: 'Khởi tạo'
        }, {
            key: OrderDeposits.DA_DUYET_CAP_1,
            text: 'Duyệt cấp 1'
        }, {
            key: OrderDeposits.DA_DUYET_CAP_2,
            text: 'Duyệt cấp 2'
        }, {
            key: OrderDeposits.DA_DUYET_CAP_3,
            text: 'Duyệt cấp 3'
        }, {
            key: OrderDeposits.KET_THUC,
            text: 'Kết thúc'
        }, {
            key: OrderDeposits.CHO_XL_TU_DONG_DUYET,
            text: 'Nạp tiền'
        }, {
            key: OrderDeposits.CHO_XL_TU_DONG_HUY,
            text: 'Huỷ nạp tiền'
        }],
        triggers: [{
            key: OrderDeposits.DUYET_CAP_1,
            text: 'duyệt'
        }, {
            key: OrderDeposits.DUYET_CAP_2,
            text: 'duyệt'
        }, {
            key: OrderDeposits.DUYET_CAP_3,
            text: 'duyệt'
        }, {
            key: OrderDeposits.TU_DONG_KET_THUC,
            text: 'auto'
        }, {
            key: OrderDeposits.TU_CHOI,
            text: 'từ chối'
        },
        {
            key: OrderDeposits.HUY,
            text: 'hủy'
        }, {
            key: OrderDeposits.DA_HUY,
            text: 'Đã hủy'
        }, {
            key: OrderDeposits.XL_TU_DONG_DUYET,
            text: 'auto'
        }, {
            key: OrderDeposits.XL_TU_DONG_HUY,
            text: 'auto'
        }]
    }];

    public static translate(content: string): string {
        const defines = DepositsWorkflowTranslateGraph.defines.filter(item => content.indexOf(item.workflowType) >= 0);

        if (!defines || defines.length == 0) {
            return content;
        }

        const define = defines[0];

        define.states.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        define.triggers.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        return content;
    }
}






export class OrderPayment {
    public static AUTO = 'AUTO';
    //trigger
    public static DUYET_CAP_1 = 'DUYET_CAP_1';
    public static DUYET_CAP_2 = 'DUYET_CAP_2';
    public static DUYET_CAP_3 = 'DUYET_CAP_3';
    public static TU_CHOI = 'TU_CHOI';
    public static TU_DONG_KET_THUC = 'TU_DONG_KET_THUC';
    public static HUY = 'HUY';
    public static XL_TU_DONG_DUYET = 'XL_TU_DONG_DUYET';
    //State
    public static KHOI_TAO = 'KHOI_TAO';
    public static DA_DUYET_CAP_1 = 'DA_DUYET_CAP_1';
    public static DA_DUYET_CAP_2 = 'DA_DUYET_CAP_2';
    public static DA_DUYET_CAP_3 = 'DA_DUYET_CAP_3';
    public static DA_HUY = 'DA_HUY';
    public static CHO_XL_TU_DONG_DUYET = 'CHO_XL_TU_DONG_DUYET';
    public static KET_THUC = 'KET_THUC';






    public static orderPaymentDisplay = [{
        state: OrderPayment.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderPayment.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderPayment.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderPayment.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderPayment.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderPayment.DUYET_CAP_1, display: 'Duyệt cấp 1'
    }, {
        state: OrderPayment.DUYET_CAP_2, display: 'Duyệt cấp 2'
    }, {
        state: OrderPayment.DUYET_CAP_3, display: 'Duyệt cấp 3'
    }, {
        state: OrderPayment.TU_DONG_KET_THUC, display: 'Tự động kết thúc'
    }, {
        state: OrderPayment.TU_CHOI, display: 'Từ chối'
    },
    ];


    public static orderPaymentState = [{
        state: OrderPayment.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderPayment.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderPayment.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderPayment.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderPayment.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderPayment.AUTO, display: 'Tự động xử lý'
    }];



}

export class PaymentWorkflowTranslateGraph {
    public static defines = [{
        workflowType: 'PAYMENT_WORKFLOW',
        states: [{
            key: OrderPayment.KHOI_TAO,
            text: 'Khởi tạo'
        }, {
            key: OrderPayment.DA_DUYET_CAP_1,
            text: 'Duyệt cấp 1'
        }, {
            key: OrderPayment.DA_DUYET_CAP_2,
            text: 'Duyệt cấp 2'
        }, {
            key: OrderPayment.DA_DUYET_CAP_3,
            text: 'Duyệt cấp 3'
        }, {
            key: OrderPayment.DA_HUY,
            text: 'Đã hủy'
        }, {
            key: OrderPayment.CHO_XL_TU_DONG_DUYET,
            text: 'Xử lý trừ tiền'
        }, {
            key: OrderPayment.KET_THUC,
            text: 'Kết thúc'
        }],
        triggers: [{
            key: OrderPayment.DUYET_CAP_1,
            text: 'duyệt'
        }, {
            key: OrderPayment.DUYET_CAP_2,
            text: 'duyệt'
        }, {
            key: OrderPayment.DUYET_CAP_3,
            text: 'duyệt'
        }, {
            key: OrderPayment.TU_DONG_KET_THUC,
            text: 'auto'
        }, {
            key: OrderPayment.TU_CHOI,
            text: 'Từ chối'
        }, {
            key: OrderPayment.HUY,
            text: 'Hủy'
        }, {
            text: 'từ chối'
        }, {
            key: OrderPayment.HUY,
            text: 'hủy'
        }, {
            key: OrderPayment.XL_TU_DONG_DUYET,
            text: 'auto'
        }]
    }];

    public static translate(content: string): string {
        const defines = PaymentWorkflowTranslateGraph.defines.filter(item => content.indexOf(item.workflowType) >= 0);

        if (!defines || defines.length === 0) {
            return content;
        }

        const define = defines[0];

        define.states.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        define.triggers.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        return content;
    }
}



export class OrderWithdrawal {
    //State
    public static KHOI_TAO = 'KHOI_TAO';
    public static DA_DUYET_CAP_1 = 'DA_DUYET_CAP_1';
    public static DA_DUYET_CAP_2 = 'DA_DUYET_CAP_2';
    public static DA_DUYET_CAP_3 = 'DA_DUYET_CAP_3';
    public static DA_CHUYEN_KHOAN = 'DA_CHUYEN_KHOAN';
    public static DA_HUY = 'DA_HUY';
    //trigger
    public static DUYET_CAP_1 = 'DUYET_CAP_1';
    public static DUYET_CAP_2 = 'DUYET_CAP_2';
    public static DUYET_CAP_3 = 'DUYET_CAP_3';
    public static TU_DONG_KET_THUC = 'TU_DONG_KET_THUC';
    public static CHUYEN_KHOAN = 'CHUYEN_KHOAN';
    public static TU_CHOI = 'TU_CHOI';
    public static KET_THUC = 'KET_THUC';
    public static HUY = 'HUY';


    public static OrderWithdrawalDisplay = [{
        state: OrderWithdrawal.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderWithdrawal.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderWithdrawal.DUYET_CAP_1, display: 'Duyệt cấp 1'
    }, {
        state: OrderWithdrawal.DUYET_CAP_2, display: 'Duyệt cấp 2'
    }, {
        state: OrderWithdrawal.DUYET_CAP_3, display: 'Duyệt cấp 3'
    }, {
        state: OrderWithdrawal.TU_DONG_KET_THUC, display: 'Tự động kết thúc'
    }, {
        state: OrderWithdrawal.TU_CHOI, display: 'Từ chối'
    },
    {
        state: OrderWithdrawal.CHUYEN_KHOAN, display: 'Chuyển khoản'
    },
    {
        state: OrderWithdrawal.DA_CHUYEN_KHOAN, display: 'Đã chuyển khoản'
    },
    ];

    public static OrderWithdrawalStateDisplay = [{
        state: OrderWithdrawal.KHOI_TAO, display: 'Khởi tạo'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_1, display: 'Đã duyệt cấp 1'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_2, display: 'Đã duyệt cấp 2'
    }, {
        state: OrderWithdrawal.DA_DUYET_CAP_3, display: 'Đã duyệt cấp 3'
    }, {
        state: OrderWithdrawal.KET_THUC, display: 'Kết thúc'
    }, {
        state: OrderWithdrawal.TU_DONG_KET_THUC, display: 'Tự động kết thúc'
    }
    ];
}

export class WithdrawalWorkflowTranslateGraph {
    public static defines = [{
        workflowType: 'WITHDRAWAL_WORKFLOW',
        states: [{
            key: OrderWithdrawal.KHOI_TAO,
            text: 'Khởi tạo'
        }, {
            key: OrderWithdrawal.DA_DUYET_CAP_1,
            text: 'Duyệt cấp 1'
        }, {
            key: OrderWithdrawal.DA_DUYET_CAP_2,
            text: 'Duyệt cấp 2'
        }, {
            key: OrderWithdrawal.DA_DUYET_CAP_3,
            text: 'Duyệt cấp 3'
        }, {
            key: OrderWithdrawal.DA_CHUYEN_KHOAN,
            text: 'Đã chuyển khoản'
        },
        {
            key: OrderWithdrawal.DA_HUY,
            text: 'Đã hủy'
        }],
        triggers: [{
            key: OrderWithdrawal.DUYET_CAP_1,
            text: 'Duyệt'
        }, {
            key: OrderWithdrawal.DUYET_CAP_2,
            text: 'Duyệt'
        }, {
            key: OrderWithdrawal.DUYET_CAP_3,
            text: 'Duyệt'
        }, {
            key: OrderWithdrawal.TU_DONG_KET_THUC,
            text: 'Tự động kết thúc'
        }, {
            key: OrderWithdrawal.TU_CHOI,
            text: 'Từ chối'
        }, {
            key: OrderWithdrawal.CHUYEN_KHOAN,
            text: 'Chuyển khoản'
        }, {
            key: OrderWithdrawal.KET_THUC,
            text: 'Kết thúc'
        }, {
            key: OrderWithdrawal.HUY,
            text: 'Hủy'
        }]
    }];

    public static translate(content: string): string {
        const defines = WithdrawalWorkflowTranslateGraph.defines.filter(item => content.indexOf(item.workflowType) >= 0);

        if (!defines || defines.length == 0) {
            return content;
        }

        const define = defines[0];

        define.states.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        define.triggers.forEach(item => {
            content = content.replace(new RegExp(`\"` + item.key + `\"`, 'g'), `\"` + item.text + `\"`);
        });

        return content;
    }
}

export class PaymentRefType {
    public static ORDER = "ORDER";
    public static PAY = "PAY";
}

export class PurchaseOrderState {
    public static CHO_MUA_HANG = "CHO_MUA_HANG";
    public static DA_MUA_HANG = "DA_MUA_HANG";
}

export interface MenuContextDefine {
    key: string;
    class: string;
    permissionAction: string;
}

export interface MenuContextDefine2 {
    key: string;
    name: string;
    icon: string;
    permissionAction: string;
}

export class PermissionCommon {
    public static execute(opt: any, defines: MenuContextDefine[]): void {
        opt.$menu.find('.context-menu-item > span').each((key, item) => {
            const $item = $(item);
            const $parent = $item.parent();
            const text = $item.text();

            defines.forEach(defineItem => {
                if (text.indexOf(defineItem.key) < 0) {
                    return;
                }

                const textDisplay = text.replace(defineItem.key, '');

                if (defineItem.class) {
                    $parent.addClass(defineItem.class);
                }

                if (defineItem.permissionAction) {
                    $parent.attr('data-action', defineItem.permissionAction);
                }

                $item.text(textDisplay);
            });
        });
    }

    public static createMenuItems(permissionService: PermissionService, defines: MenuContextDefine2[]) {
        const menuItems = {};
        
        defines.filter(async item => await permissionService.currentPermission(item.permissionAction))
            .forEach(async item => {
                var t = await permissionService.currentPermission(item.permissionAction);
                if(t)
                menuItems[item.key] = item;
            });

        return menuItems;
    }
}



export class Actions { 
    public static ACCESS = 'ACCESS';
    public static ACTIVE = 'ACTIVE';
    public static UNACTIVE= 'UNACTIVE';
    public static ACTIVE_UNACTIVE= 'ACTIVE_UNACTIVE';
    public static ACTIVE_BID_VIP= 'ACTIVE_BID_VIP';
    public static ADD = 'ADD';
    public static ADD_PAY_ORDER = 'ADD_PAY_ORDER';
    public static APPROVE = 'APPROVE';
    public static APPROVE_L1 = 'APPROVE_L1';
    public static APPROVE_L2 = 'APPROVE_L2';
    public static APPROVE_L3 = 'APPROVE_L3';
    public static BAO_GIA = 'BAO_GIA';
    public static DELETE = 'DELETE';
    public static DUYET_TAMUNG = 'DUYET_TAMUNG';
    public static DUYET_THANHTOAN = 'DUYET_THANHTOAN';
    public static EDIT = 'EDIT';
    public static EXPORT = 'EXPORT';
    public static HUY_DH = 'HUY_DH';
    public static IMPORT = 'IMPORT';
    public static MUA_HANG = 'MUA_HANG';
    public static OPEN = 'OPEN';
    public static REJECT = 'REJECT';
    public static SET_PASSWORD = 'SET_PASSWORD';
    public static SORT = 'SORT';
    public static VIEW_ALL_CUSTOMER = 'VIEW_ALL_CUSTOMER';
    public static YC_DUYET_TAMUNG = 'YC_DUYET_TAMUNG';
    public static YC_HUY = 'YC_HUY'; 
}