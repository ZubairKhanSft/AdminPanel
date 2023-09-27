
export const API_BASE_URL = "http://manageback.08local.com/api";
console.log("API_BASE_URL",API_BASE_URL)
export const IMG_BASE_URL = "http://usermanagement01-001-site1.atempurl.com/";
export const JEW_IMG_BASE_URL = 'http://back.persianjewishhistory.com/';
console.log("IMG_BASE_URL",IMG_BASE_URL)
//http://manageback.08local.com/swagger/index.html

// http://usermanagement01-001-site1.atempurl.com/swagger/index.html
// const ORBASE_URL = 'http://jewscalendar01-001-site1.atempurl.com/api' // jews
export const ORBASE_URL = 'http://back.persianjewishhistory.com/api' ;// jews
console.log("ORBASE_URL",ORBASE_URL)

export const API_ENDPOINTS_ADV = {
  add_adv: `${ORBASE_URL}/Advertisement/Add-Advertisement`,
  edit_adv: `${ORBASE_URL}/Advertisement/Update-Advertisement`,
  get_id_adv: `${ORBASE_URL}/Advertisement/Get-Advertisement-By-Id`,
  getall_adv: `${ORBASE_URL}/Advertisement/Get-All-Advertisements`,
  delete_adv: `${ORBASE_URL}/Advertisement/Delete-Advertisement`,
  post_disable_adv: `${ORBASE_URL}/Advertisement/Disable-Ad`,
};

export const API_ENDPOINTS_ORG = {
  get_org: `${ORBASE_URL}/Organization`,
  get_id_org: `${ORBASE_URL}/Organization/Get-Organization-By-Id`,
  get_all_org: `${ORBASE_URL}/Organization/Get-All-Organization`,
  add_org: `${ORBASE_URL}Organization/Add-Organization`,
  edit_org: `${ORBASE_URL}/Organization/Update-Organization`,
  delete_org: `${ORBASE_URL}/Organization/Delete-Organization`,
};

export const API_ENDPOINTS_Files = {
  upload_file: `${ORBASE_URL}/File/File-Uploaded`,
  update_file: `${ORBASE_URL}/File/Update-File-Upload`,
  get_id_file: `${ORBASE_URL}/File/Get-File-By-Id`,
  get_all_files: `${ORBASE_URL}/File/Get-All-Files`,
  delete_file: `${ORBASE_URL}/File/Delete-File`,
};

export const API_ENDPOINTS_Event = {
  upload_file: `${ORBASE_URL}/ReligiousEvent/add`,
  update_file: `${ORBASE_URL}/ReligiousEvent/edit`,
  get_id_file: `${ORBASE_URL}/ReligiousEvent/GetBy-Id`,
  get_all_files: `${ORBASE_URL}/ReligiousEvent/GetAll`,
  delete_file: `${ORBASE_URL}/ReligiousEvent/Delete`,
};

export const API_ENDPOINTS_Contact = {
  upload_file: `${ORBASE_URL}/Contact/Add`,
  update_file: `${ORBASE_URL}/Contact/Edit`,
  get_id_file: `${ORBASE_URL}/Contact/GetBy-ID`,
  get_all_files: `${ORBASE_URL}/Contact/GetAll`,
  delete_file: `${ORBASE_URL}/Contact/Delete`,
  deleteNumberById : `${ORBASE_URL}/Contact/Delete-Contact-By-Number-Id`,
};

export const API_ENDPOINTS_Banner = {
  Get_all_Banner: `${ORBASE_URL}/Banner/GetAll`,
  Add_Banner: `${ORBASE_URL}Add-Banner`,
  get_by_id : `${ORBASE_URL}/Banner/GetBy-Id`,
  update_file : `${ORBASE_URL}/Banner/edit`,
  upload_file : `${ORBASE_URL}/Banner/Add-Banner`,
  delete_file : `${ORBASE_URL}/Banner/Delete`,
};
export const API_ENDPOINTS_UpcomingEvent = {
  Add_Upcoming_Event: `${ORBASE_URL}/UpcomingEvent/Add`,
  Edit_Upcoming_Event: `${ORBASE_URL}/UpcomingEvent/edit`,
  get_id_event: `${ORBASE_URL}/UpcomingEvent/GetBy-Id`,
  get_all_event: `${ORBASE_URL}/UpcomingEvent/GetAll`,
  delete_event: `${ORBASE_URL}/UpcomingEvent/Delete`,
};

export const API_ENDPOINTS_About = {
  upload_about: `${ORBASE_URL}/AboutUs/Add`,
  update_about: `${ORBASE_URL}/AboutUs/Update-Aboutus`,
  get_id_about: `${ORBASE_URL}/AboutUs/getbyid`,
  get_all_about: `${ORBASE_URL}/AboutUs/GetAll`,
  delete_about: `${ORBASE_URL}/AboutUs/Delete`,
};