
import http from '../common/http-common'


class ProgramsDataService
{
    getAll() {
        return http.get(`api/programs/`);
      }
    
      get(id) {
        return http.get(`api/programs/${id}`);
      }
    
      create(data) {
        return http.post("api/programs", data);
      }
    
      update(id, data) {
        return http.put(`api/programs/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/programs/${id}`);
      }
}

export default new ProgramsDataService();
