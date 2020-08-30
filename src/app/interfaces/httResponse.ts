export const STATUS_CODE = {
  SUCCESS: 'SUCCESSED',
  ERROR: 'ERROR',
  ACCESS_DENIED: 'Access denied',
  UNAUTHORIZED: 'UnAuthorized',
};
export interface IHttpResponseModel {
  message: string;
  status: string;
  data: any;
}
