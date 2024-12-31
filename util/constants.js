const BASE_URL = `${process.env.NEXT_PUBLIC_URL?process.env.NEXT_PUBLIC_URL:"http://localhost:5000"}/api`;

export const LOGIN_URL = BASE_URL + "/login";
export const REGISTER_URL = BASE_URL + "/studentRegister";
export const STUDENT_REGISTER_VERIFY_URL = BASE_URL + "/studentLoginVerify";
export const MANAGER_LOGIN_VERIFY_URL = BASE_URL + "/loginVerify";

export const FORGOT_PASSWORD_URL = BASE_URL + "/forgotPassword";
export const FORGOT_PASSWORD_VERIFY_URL = BASE_URL + "/resetPasswordVerify";
export const RESET_PASSWORD_URL = BASE_URL + "/resetPassword";

export const STUDENT_EDIT_PROFILE_URL = BASE_URL + "/studentEditData";

export const GET_COMPANY_DATA_URL = BASE_URL + "/getCompanyHireData";
export const GET_TOP_5_PLACEMENTS_URL = BASE_URL + "/getTopFivePlacements";
export const GET_COMPANY_LIST_URL = BASE_URL + "/getCompanies";
export const ADD_NEW_COMPANY_URL = BASE_URL + "/addCompany";
export const ADD_NEW_PLACEMENT_URL = BASE_URL + "/addPlacementData";
export const GET_ALL_PLACEMENTS_URL = BASE_URL + "/getAllPlacedStudentData";
export const GET_ALL_STUDENTS_URL = BASE_URL + "/getAllStudentData";
export const REGISTER_OFFICAL_URL = BASE_URL + "/registerOfficial";
export const GET_REGISTERED_OFFICIALS_URL = BASE_URL + "/getRegisteredOfficials";
export const TOGGLE_ACCOUNT_STATUS_URL = BASE_URL + "/toggleOfficialStatus";
export const GET_COMPANY_HIRE_DATA_URL = BASE_URL + "/getCompanyHireDataById";
export const GET_COMPANY_DATA_BY_BATCH_URL = BASE_URL + "/getCompanyHireDataByBatch";
export const ADD_NEW_STUDENT_URL = BASE_URL + "/addStudent";


export const GET_STUDENT_PLACEMENTS_URL = BASE_URL + "/getStudentPlacements";
export const STUDENT_EDIT_PLACEMENT_URL = BASE_URL + "/editPlacementDataById";