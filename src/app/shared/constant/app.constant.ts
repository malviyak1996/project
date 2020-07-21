import { Injectable } from '@angular/core';

@Injectable()
export class AppConstant {
    public  PAGE_LIMIT = 10;
    public USER_PORT = 8999;
    public SUPER_USER_PORT  =8087;
    public APPROVAL_PENDING_STATUS = 2;
    public APPROVAL_REJECT_STATUS = 4;
    public APPROVAL_ACCEPT_STATUS = 3;
    public USER_TYPE_RETAILER = 2;
    public USER_TYPE_DISTRIBUTER = 3;
    public USER_TYPE_MANIFACTURER = 4;
    public PRE_RETAILER_AUTHENTICATION = 5;
    public DB_OWNER = 1;
    public APPROVED ='Approved';
    public PENDING ="Pending";
    public REJECTED="Rejected";

    // USER TYPE
    public USER_TYPE_RETAILER_TEXT = "R";
    public USER_TYPE_DISTRIBUTER_TEXT = "D";
    public USER_TYPE_MANIFACTURER_TEXT = "M";

    // CREDIT OR DEBIT 
    public CREDIT_TEXT ="C";
    public DEBIT_TEXT ="D";


    public EDIT ="Edit";
    public  EMPTY_USERNAME= "*username cannot be empty.";
    public NAVIGATE_SUPERADMIN_DASHBOARD="/superadmin/user-management";
    public NAVIGATE_OPERATION_DASHBOARD="/operation";
    public SUPERADMIN_ID="super_admin@advanz101.com";
    public DOWNLOAD_FILE_URL="http://localhost:8087/rewardManagement/downloadFile/";
 }