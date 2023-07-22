// CONFIG
export const IS_LOADING_ADDRESS = "IS_LOADING_ADDRESS";

// LOGIN USER
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_TOKEN_USER = "LOGIN_TOKEN_USER";
export const IS_SUPERV = "IS_SUPERV";

// LOGIN COMPANY
export const LOGIN_COMPANY = "LOGIN_COMPANY";
export const LOGIN_SUCCESS_COMPANY = "LOGIN_SUCCESS_COMPANY";
export const LOGIN_ERROR_COMPANY = "LOGIN_ERROR_COMPANY";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGOUT_USER = "LOGOUT_USER";
export const RESET_LOGIN_USER = "RESET_LOGIN_USER";

// COTIZACION
export const COTIZACION_INIT = "COTIZACION_INIT";
export const COTIZACION_UPDATE = "COTIZACION_UPDATE";
export const COTIZACION_LOADING = "COTIZACION_LOADING";
export const COTIZACION_SUCCESS = "COTIZACION_SUCCESS";
export const COTIZACION_ERROR = "COTIZACION_ERROR";
export const COTIZACION_ADD_PRODUCT = "COTIZACION_ADD_PRODUCT";
export const COTIZACION_REMOVE_PRODUCT = "COTIZACION_REMOVE_PRODUCT";
export const COTIZACION_UPDATE_PRODUCT = "COTIZACION_UPDATE_PRODUCT";
export const COTIZACION_ADD_AMOUNT = "COTIZACION_ADD_AMOUNT";
export const COTIZACION_ADD_CLIENT = "COTIZACION_ADD_CLIENT";
export const COTIZACION_REMOVE_CLIENT = "COTIZACION_REMOVE_CLIENT";
export const COTIZACION_UPDATE_CLIENT = "COTIZACION_UPDATE_CLIENT";
export const COTIZACION_ADD_ADDRESS = "COTIZACION_ADD_ADDRESS";
export const COTIZACION_ADD_PDV = "COTIZACION_ADD_PDV";
export const COTIZACION_ADD_CREATED_BY_NAME = "COTIZACION_ADD_CREATED_BY_NAME";
export const COTIZACION_REMOVE_ADDRESS = "COTIZACION_REMOVE_ADDRESS";
export const COTIZACION_UPDATE_ADDRESS = "COTIZACION_UPDATE_ADDRESS";
export const COTIZACION_REMOVE = "COTIZACION_REMOVE";
export const COTIZACION_GUARDAR_TYPO_DOCUMENT =
  "COTIZACION_GUARDAR_TYPO_DOCUMENT";
export const COTIZACION_ELIMINAR_PRODUCTO = "COTIZACION_ELIMINAR_PRODUCTO";
export const COTIZACION_ADD_AMOUNT_EDIT = "COTIZACION_ADD_AMOUNT_EDIT";
export const COTIZACION_ADD_SUCURSAL = "COTIZACION_ADD_SUCURSAL";
export const ADD_COMPANY_COTIZACION = "ADD_COMPANY_COTIZACION";
export const ADD_PRICE_CHANGE = "ADD_PRICE_CHANGE";
export const APPROVE_PRICE_CHANGE = "APPROVE_PRICE_CHANGE";
export const ADD_SALES_AGENT = "ADD_SALES_AGENT";
export const ADD_CHANNEL = "ADD_CHANNEL";
export const COTIZACION_CAMBIO_TIPO = "COTIZACION_CAMBIO_TIPO";
export const MODIFICAR_CLIENTE_CONTADO = "MODIFICAR_CLIENTE_CONTADO";
export const MOSTRAR_DESCUENTO = "MOSTRAR_DESCUENTO";
export const SET_PRICE_LIST = "SET_PRICE_LIST";
export const COTIZACION_UPDATE_PLANID_LINES = "COTIZACION_UPDATE_PLANID_LINES";
export const COTIZACION_UPDATE_WAREHOUSE_LINES = "COTIZACION_UPDATE_WAREHOUSE_LINES";

//PRODUCTS REDUCER
export const ADD_FACET_FILTER = "ADD_FACET_FILTER";
export const REMOVE_FACET_FILTERS = "REMOVE_FACET_FILTERS";
export const SINGLE_FACET_FILTER = "SINGLE_FACET_FILTER";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const ADD_BRANDS = "ADD_BRANDS";
export const REMOVE_CATEGORIES = "REMOVE_CATEGORIES";
export const REMOVE_BRANDS = "REMOVE_BRANDS";
export const REMOVE_SINGLE_CATEGORY = "REMOVE_SINGLE_CATEGORY";
export const REMOVE_SINGLE_BRAND = "REMOVE_SINGLE_BRAND";
export const COTIZACION_QUITAR_ADDRESS = "COTIZACION_QUITAR_ADDRESS";
export const COTIZACION_ADD_COMMENT = "COTIZACION_ADD_COMMENT";

//COMPANY
export const SET_COMPANY = "SET_COMPANY";
export const COMPANY_ERROR_STORE = "COMPANY_ERROR_STORE";
export const SET_WAREHOUSE = "SET_WAREHOUSE";

// PRODUCTS
export const SHOW_PRODUCTS = "SHOW_PRODUCTS";

// CART
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_ONE = "ADD_ONE";
export const ADD_MANY = "ADD_MANY";
export const REMOVE_ONE = "REMOVE_ONE";
export const SET_DISCOUNT = "SET_DISCOUNT";
export const EMPTY_CART = "EMPTY_CART";

// LIST
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const CLEAR_LIST = "CLEAR_LIST";
export const CART_FROM_LIST = "CART_FROM_LIST";

export const ID_CONSTANTS = {
  salesOrder: {
    sellOrderTypeID: "502983D8-15CC-421C-AFBA-22BF488DA064",
    headerStatusSalesOrderID: "2CAC34C2-CCD3-4D2E-BEB6-084322B03450",
    salesOrderHeaderID: "D85B66E1-5861-4207-9E19-EDC839905E1C",
    salesOrderStatusID: "66E1E765-1D68-4C55-A74B-EB2D4E7D2BBB",
  },
  dispatchOrder: {
    dipatchTypeID: "534B4247-B8FD-4CF9-95AB-C82AAE47B428",

    headerStatusDispatchOrderID: "53C60AD3-EA4B-4B25-B774-C66145AE44ED",
  },

  fullFilmentData: {
    fullFilmentDirectDeliveryProviderID: "E775A02F-E3D0-49B7-90B4-AB7C54166171",
  },
};